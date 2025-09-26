import { Hono } from "hono"
import { deleteSession } from "../../utils/auth"

const routeSignout = new Hono()

routeSignout.get("/", async (context) => {
  deleteSession({ context })
  return context.json({})
})

export { routeSignout }
