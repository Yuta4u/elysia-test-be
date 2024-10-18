import { Elysia } from "elysia"
import { RouteUsers } from "./route/user.route"
import { swagger } from "@elysiajs/swagger"
import serverless from "serverless-http"

const app: any = new Elysia().use(swagger()).get("/", () => "Hello Elysia")
app.use(RouteUsers)

app.listen(8080)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

// Untuk AWS Lambda
export const handler = serverless(app)
