## Introduction

Reproduction for https://github.com/prisma/prisma-client-js/issues/430

## Steps to reproduce

1. Clone this repository
2. Run `yarn` to get all of the dependencies
3. Place your mysql instance url in schema/prisma.schema file
4. Run `yarn prisma2 migrate save --name init --experimental`
5. Run `yarn prisma2 migrate up --experimental`
6. Run `node seed.js` to get some data in the database
7. Run `node index.js` to reproduce the error
