"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
let server;
let age;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb://Tour_Ph:lm5LjeZm25OhL2yB@ac-cgkxfia-shard-00-00.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-01.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-02.x9t7sgg.mongodb.net:27017/tour-db?ssl=true&replicaSet=atlas-nszs70-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to DB");
        server = app_1.default.listen(5000, () => {
            console.log("server lising prot 5000");
        });
    }
    catch (error) {
        console.log(error);
    }
});
startServer();
// Error Handling below
process.on("SIGTERM", () => {
    console.log("SIGTERM detectd ... server shutting dowun");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on("SIGINT", () => {
    console.log("SIGINT detectd ... server shutting dowun");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on("unhandledRejection", (err) => {
    console.log("unhandledRejection detectd ... server shutting dowun", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on("uncaughtException", (err) => {
    console.log("uncaughtException detectd ... server shutting dowun", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// unhandledRejection error
// Promise.reject(new Error(" I forger to cahsh"))
// uncaughtException error
// throw new Error ("I foger to handel this lcoal error")
