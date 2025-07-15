import express, { Request, Response } from "express";
// import { UserRoutes } from "./modules/user/user.Route"
import cors from "cors";
import { router } from "./routes";
import { globarErrorHendler } from "./middlewares/gobalErrorHandeler";
import notFound from "./middlewares/NotFound";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "welcome to server Tour PH",
  });
});

app.use(globarErrorHendler);

app.use(notFound);

export default app;
