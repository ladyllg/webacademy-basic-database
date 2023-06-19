
import { api } from './api.info';
import { Api } from './server';

const server = new Api();

try {
  server.bootstrap().then(() => {
    console.info(`API Empresa rodando na porta ${api.defaultPort}`);
  });
} catch (error) {
  console.error('Server failed to start.');
  console.error(error);
  process.exit(1);
}