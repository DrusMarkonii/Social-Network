import { Router, Request, Response } from 'express';
import User from '../models/User/User';


const routerFriends = Router();

routerFriends.get('/', async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (e) {
      console.log(e);
    }
  });

  routerFriends.delete('/', async (req: Request, res: Response) => {
    try {
      const {userName} = req.body;
      console.log(req.body)
      console.log(userName)

    await User.deleteOne({userName})
  
    return res.json({ message: `User was delete` })
    } catch (e) {
      console.log(e);
    }
  });

  export default routerFriends 