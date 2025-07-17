import AppError from "../../errorHelpers/appError";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatue from "http-status-codes";

const createUser = async (payload: Partial<IUser>) => {
  const { email, ...rest } = payload;

  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new AppError(httpStatue.BAD_REQUEST, "User Already Exist");
  }

  const authProvider: IAuthProvider = {
    provider: " credntials",
    proderId: email as string,
  };

  const user = await User.create({
    email,
    auths: [authProvider],

    ...rest,
  });
  return user;
};

const getAllUser = async () => {
  const users = await User.find({});

  const totalUsers = await User.countDocuments();

  return {
    data: users,
    meta: {
      total: totalUsers,
    },
  };
};

export const UserServices = {
  createUser,
  getAllUser,
};
