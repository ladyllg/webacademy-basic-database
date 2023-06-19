import 'reflect-metadata';

import express from 'express';
import { produtosRouter, categoriaRouter, clientesRouter, vendasRouter } from "./routes/router";
import { api } from './api.info';
import { migracoes, MigracaoDB } from './models/migracoes'
import connection from './db/config';
import { VersaoDB } from './models/VersaoDB';

import { Categoria } from './models/Categoria';
import { Cliente } from './models/Cliente';
import { Produto } from './models/Produto';
import { Venda } from './models/Venda';

import { error } from 'console';

const models = [VersaoDB, Categoria, Cliente, Produto, Venda];

const routes = [
    produtosRouter,
    categoriaRouter,
    clientesRouter,
    vendasRouter
]

export class Api {
  public server: express.Application;
  public publicPath: string;

  constructor() {
    this.server = express();
    this.publicPath = `${process.cwd()}/public`;
  }

  async bootstrap(): Promise<Api> {
    try {
      await this.middleware();
      await this.router();
      await this.initModels();
      await this.migrations();
    } catch (err) {
      console.error(err);
    }
    return this;
  }

  private async middleware() {
    this.server.use(express.json());
  }

  private async router() {
    this.server.use(routes);
    try {
      this.server.listen(api.defaultPort);
    } catch (err) {
      console.error(err);
      throw error;
    }
  }

  private async initModels() {
    await connection
      .authenticate()
      .then(async () => {
        console.info('MySQL DB Conectado!');
        await connection.addModels(models);
        await connection.sync();
      })
      .then(() => {
        console.info('DB sync!');
      })
      .catch((err) => {
        console.error(err);
        throw error;
      });
  }

  private async migrations() {
    const versaoAtualBanco = await VersaoDB.findByPk(api.db.id);

    const numeroVersaoAtualBanco =
      versaoAtualBanco == null ? 0 : versaoAtualBanco.numeroVersao;

    console.info('VERSAO DO BANCO API-EMPRESA: ' + numeroVersaoAtualBanco);
    if (numeroVersaoAtualBanco < api.db.dbVersion) {
      console.info(migracoes);
      const models: string[] = [];

      for (let i = numeroVersaoAtualBanco; i < api.db.dbVersion; i++) {
        const migracao: MigracaoDB | undefined = migracoes.get(i + 1);

        if (migracao && migracao.consultas) {
          if (migracao.consultas !== null) {
            for (const consulta of migracao.consultas) {
              console.info('executando: ' + consulta.query);
              if (models.indexOf(consulta.model) < 0) {
                await connection.query(consulta.query);
                console.info('  executed!');
              } else {
                console.info('  not executed: new model.');
              }
            }
          }
        }
      }

      if (versaoAtualBanco == null) {
        await VersaoDB.create({
          id: api.db.id,
          numeroVersao: api.db.dbVersion,
        });
      } else {
        versaoAtualBanco.numeroVersao = api.db.dbVersion;
        await versaoAtualBanco.save();
      }
    }

    await connection
      .sync()
      .then(() => {
        console.info('Models sync!');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}