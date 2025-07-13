import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./config/env";


let server: Server;

const startServer = async () => {
  try {
    // eslint-disable-next-line no-console
    console.log(envVars.NODE_ENV)
    await mongoose.connect(envVars.DB_UR);

    // eslint-disable-next-line no-console
    console.log("connected to DB");
    server = app.listen(envVars.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`server lising prot 5000${envVars.PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
startServer();


// Error Handling below

process.on("SIGTERM", () => {
  // eslint-disable-next-line no-console
  console.log("SIGTERM detectd ... server shutting dowun",);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1)
});
process.on("SIGINT", () => {
  // eslint-disable-next-line no-console
  console.log("SIGINT detectd ... server shutting dowun",);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1)
});
process.on("unhandledRejection", (err) => {
  // eslint-disable-next-line no-console
  console.log("unhandledRejection detectd ... server shutting dowun",err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1)
});
process.on("uncaughtException", (err) => {
  // eslint-disable-next-line no-console
  console.log("uncaughtException detectd ... server shutting dowun",err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1)
});


// unhandledRejection error
// Promise.reject(new Error(" I forger to cahsh"))
// uncaughtException error
// throw new Error ("I foger to handel this lcoal error")
