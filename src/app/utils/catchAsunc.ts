/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"

type AsncHandler =  (req: Request, res: Response, next: NextFunction) => Promise<void>

 export const carhAsync =(fn: AsncHandler) =>(req: Request, res: Response, next: NextFunction)=>{
  Promise.resolve(fn(req,res,next)).catch((error:any) =>{
    console.log(error)
    next(error)
  })
 }

