import { BadRequestError } from "../error";

export const testCore = async () => {
  throw new BadRequestError("this is a test");
};
