import { Hono } from "hono"
import { deleteSession } from "../../utils/session.util"

const routeSignout = new Hono()

routeSignout.post("/", async (context) => {
  deleteSession(context)
  return context.json({})
})

export { routeSignout }
