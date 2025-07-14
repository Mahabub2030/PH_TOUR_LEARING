import { Router } from "express";
import { userCotroller } from "./user.controler";


const router = Router()

router.post("/register", userCotroller.createUser)

export const UserRoutes  = router