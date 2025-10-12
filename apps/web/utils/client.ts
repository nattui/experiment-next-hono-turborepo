import { getClient } from "api"
import { BASE_URL } from "@/utils/url"

export const client = getClient(`${BASE_URL.WEB}/api`)
