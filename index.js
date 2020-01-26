const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const data = await prisma.assets.findMany({
    where: { trashed: false },
    first: 10,
    skip: 0,
    include: { owner: true },
  })

  console.log(data)
}

main()
