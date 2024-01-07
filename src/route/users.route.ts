import express from "express";
import { test } from "../controller/user.controller";
import { validationMiddleware } from "../middleware/users.middleware";
import { testValidationSchema } from "../validations/test.validation";
import { RequestData } from "../enum";

const router = express.Router();

router.get(
  "/test",
  validationMiddleware(testValidationSchema, RequestData.QUERY),
  test
);

export default router;
