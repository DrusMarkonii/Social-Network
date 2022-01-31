import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";
import config from "config"
import { json } from "stream/consumers";




const authMiddleWare =  (req:Request, res:Response, next:NextFunction) => {
    if (req.method === "OPTIONS") {
        return next()
    }

    try {
        const token = req.headers.authorization?.split('')[1]
        if (!token) {
            return res.status(401).json({ message: 'Auth error' });
        }

        const decoded = jwt.verify(token, config.get('secretKey'))
        // console.log(decoded)
        req.body.user = decoded
        next()
    } catch (e) {
        console.log(e)
    }

}

export default authMiddleWare;

