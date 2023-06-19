export interface MigracaoDB {
  consultas?: Array<{ model: string; query: string }>;
}

const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();

// migracoes.set(1, {
//     consultas: [
//       {
//         model: 'Produto',
//         query: `ALTER TABLE Produto ADD codigo VARCHAR(45);`,
//       },
//     ],
// });

// migracoes.set(2, {
//   consultas: [
//     {
//       model: "Clientes",
//       query: `ALTER TABLE Clientes ADD apelido VARCHAR(45);`,
//     },
//   ],
// });

export { migracoes };
