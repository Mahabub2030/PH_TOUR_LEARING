/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
// import  from "http-status-codes";

import httpStatus from "http-status-codes";
import { UserServices } from "./user.serves";
import AppError from "../../errorHelpers/appError";
import { carhAsync } from "../../utils/catchAsunc";
import { success } from "zod";
import { sendRepose } from "../../utils/sendResponse";

const createUser = carhAsync(async(req: Request, res: Response, next: NextFunction) =>{
  const user = await UserServices.createUser(req.body)
//   res.status(httpStatus.CREATED).json({
//   message: "User create Successfully ",
//   user,
//  });

sendRepose(res,{
  success:true,
  statusCode:httpStatus.CREATED,
  message:"User create successfully",
  data:user,
  
})
})

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     // // throw new AppError(httpStatus.BAD_REQUEST, "fack error");
//     // const user = await UserServices.createUser(req.body);
//     // res.status(httpStatus.CREATED).json({
//     //   message: "User create Successfully ",
//     //   user,
//     // });
//     createUsersFucntion(req,res)

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (err: any) {
//     // eslint-disable-next-line no-console
//     console.log(err);
//     next(err);
//   }
// };

const getAllUsers = carhAsync(async(req: Request, res: Response, next: NextFunction) =>{
  const result = await UserServices.getAllUser()
  // res.status(httpStatus.OK).json({
  //   success:true,
  //   messge:"all user get one time",
  //   data:users
  // })
  sendRepose(res,{
  success:true,
  statusCode:httpStatus.CREATED,
  message:"all readwriting  successfully",
  data:result.data,
  meta:result.meta
  
})

})

// function => try-catch

export const userCotroller = {
  createUser,
  getAllUsers,
};
