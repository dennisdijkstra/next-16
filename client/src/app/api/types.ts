export type User = {
  id?: string,
	email: string
	password: string
  firstName?: string
  lastName?: string
}

export type Config = {
	headers: {
    'Content-Type': string
	},
	credentials: RequestCredentials
}

export type RequestResponse = {
    res?: Response,
    error?: string,
}

export type Payload = Record<string, unknown>

export type QueryParams = Record<string, string | number | boolean>

export type Options = {
  query?: QueryParams
  data?: Payload
}

export type ApiResponse<T = unknown> = {
  res?: T
  error?: string
}
