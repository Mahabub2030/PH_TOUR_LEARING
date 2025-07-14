import { Router } from "express"
import { UserRoutes } from "../modules/user/user.Route"

export const router = Router()

const modeulRoutes = [
    {
        path:"/user",
        router:UserRoutes
    },
    // {
    //     path:"/tour",
    //     router:UserRoutes
    // },
    // {
    //     path:"/tour",
    //     router:UserRoutes
    // },
    // {
    //     path:"/tour",
    //     router:UserRoutes
    // },
]

modeulRoutes.forEach((route)=>{
    router.use(route.path, route.router)

})