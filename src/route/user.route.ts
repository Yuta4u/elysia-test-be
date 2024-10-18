import Elysia from "elysia"
import { UserController } from "../controller/user.controller"
import { UserCreateModels } from "../model/user.model"

export const RouteUsers = (app: Elysia) =>
  app.group("/user", (user) => {
    user.post(
      "/",
      async ({ body }) =>
        UserController.addUser({
          body: body,
        }),
      {
        body: UserCreateModels,
      }
    )

    user.get("/", () => UserController.getUser())

    return user
  })
