// app/actions.ts
'use server'

import { User, userSchema } from './schemas'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function searchUsers(query: string): Promise<User[]> {
//   const users = await getUsers()
  // console.log('Searching users with query:', query)
  // return users.filter(user => user.name.toLowerCase().startsWith(query.toLowerCase()))
  //prisma find user
  return prisma.user.findMany({
    where: {
      name: {
        startsWith: query,
        mode: 'insensitive',
      },
    },
  })
}

export async function addUser(data: Omit<User, 'id'>): Promise<User> {
//   const users = await getUsers() // Load current users
  // const newId = (users.length + 1).toString()
  // const newUser = { ...data, id: newId }
  // const validatedUser = userSchema.parse(newUser)
  // users.push(validatedUser)
  // return validatedUser

  //prisma add user
  return prisma.user.create({
    data,
  })
}
