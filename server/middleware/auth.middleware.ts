import { NextFunction } from "express";
import  jwt  from "jsonwebtoken";
import config from "config"

type AuthorizedRequest = Express.Request & { user: any, headers:any, Request: any, authorization: string, method: any };



const authMiddleWare =  (req:AuthorizedRequest, res:Response, next:NextFunction) => {
    if (req.method === "OPTIONS") {
        return next()
    }

    try {
        const token = req.headers.authorization.split('')[1]
        if (!token) {
            return "Auth Error"
        }

        const decoded = jwt.verify(token,config.get('secretKey') )
        req.user = decoded
        next()
    } catch (e) {
        console.log(e)
    }

}

export default authMiddleWare;

