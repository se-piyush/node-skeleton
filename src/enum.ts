export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export enum HttpStatusCodes {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  FORBIDDEN = 403,
  UN_AUTHENTICATED = 401,
}

export enum RequestData {
  BODY = "body",
  QUERY = "query",
}
