import { getClient } from "api"
import { getClient as getClientTrpc } from "trpc"
import { BASE_URL } from "@/utils/url"

export const client = getClient(`${BASE_URL.WEB}/api`)

export const clientTrpc = getClientTrpc(`${BASE_URL.WEB}/trpc`)
