import { Router, Request, Response } from 'express';
import User from '../models/User/User';


const routerFriends = Router();

routerFriends.get('/friends', async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (e) {
      console.log(e);
    }
  });

  export default routerFriends