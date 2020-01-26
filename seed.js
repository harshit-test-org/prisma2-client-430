const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const data = await prisma.assets.create({
    data: {
      owner: {
        create: {
          email: 'pantharshit00@gmail.com',
          firstName: 'Harshit',
          lastName: 'Pant',
          trashed: false,
          password: 'this-is-a-password',
        },
      },
      description: 'test',
      fileName: 'test',
      mimeType: 'test',
      remarks: 'test',
      title: 'test',
      trashed: false,
      type: 'AUDIO',
    },
  })
  console.log(data)
}

main()
