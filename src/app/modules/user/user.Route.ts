import { Router } from "express";
import { userCotroller } from "./user.controler";
import { creatUserZodeSchema } from "./user.Validation";
import { validateReuset } from "../../middlewares/ValidRequst";

const router = Router();
router.post(
  "/register",
  validateReuset(creatUserZodeSchema),
  userCotroller.createUser
);
router.get("/all-users", userCotroller.getAllUsers);

export const UserRoutes = router;
