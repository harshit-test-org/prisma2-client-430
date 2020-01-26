## Introduction

Reproduction for https://github.com/prisma/prisma-client-js/issues/430

## Steps to reproduce

1. Clone this repository
2. Place your mysql instance url in schema/prisma.schema file
3. Run `yarn prisma2 migrate save --name init --experimental`
4. Run `yarn prisma2 migrate up --experimental`
5. Run `node seed.js` to get some data in the database
6. Run `node index.js` to reproduce the error
