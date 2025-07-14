import { NextFunction, Request, Response } from "express";
// import  from "http-status-codes";

import httpStatus from "http-status-codes";
import { UserServices } from "./user.serves";
import AppError from "../../errorHelpers/appError";

const createUser = async (req: Request, res: Response,next:NextFunction) => {
  try {

    throw new AppError(httpStatus.BAD_REQUEST, "fack error")
   const user = await UserServices.createUser(req.body)
    res.status(httpStatus.CREATED).json({
      message: "User create Successfully ",
      user,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.log(err);
    next(err)
  }
};

export const userCotroller = {
  createUser,
};
