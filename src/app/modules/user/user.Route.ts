import { Router } from "express";
import { userCotroller } from "./user.controler";


const router = Router()

router.post("/register", userCotroller.createUser)
router.get("/all-users",userCotroller.getAllUsers)

export const UserRoutes  = router