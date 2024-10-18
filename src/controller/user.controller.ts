import { PrismaClient } from "@prisma/client"
import { UserCreateProps } from "../model/user.model"

const prisma = new PrismaClient()

export const UserController = {
  addUser: async ({ body }: { body: UserCreateProps }) => {
    try {
      const user = await prisma.user.create({
        data: body,
      })
      return {
        data: user,
        message: "success",
      }
    } catch (error) {
      console.log("🚀 ~ addUser: ~ error:", error)
      return {
        data: [],
        message: "failed",
      }
    }
  },
  getUser: async () => {
    try {
      const user = await prisma.user.findMany({})
      return {
        data: user,
        message: "success",
      }
    } catch (error) {
      console.log("🚀 ~ getUser: ~ error:", error)
      return {
        data: [],
        message: "failed get user",
      }
    }
  },
}
