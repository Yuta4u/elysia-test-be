import { Elysia } from "elysia"
import { RouteUsers } from "./route/user.route"
import { swagger } from "@elysiajs/swagger"

const app = new Elysia().use(swagger()).get("/", () => "Hello Elysia")
app.use(RouteUsers)

app.listen(8080)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
