import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../error";
import { Schema } from "joi";
import { RequestData } from "../enum";

export const validationMiddleware =
  (schema: Schema, requestLocation: RequestData) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.validate(req[requestLocation]);
    if (result.error) {
      throw new BadRequestError(result.error.message);
    }
    next();
  };
