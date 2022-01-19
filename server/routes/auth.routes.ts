import { Router } from 'express';
import User from '../models/User/User';
import bcrypt from 'bcrypt';
import  config from 'config';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';


const router = Router();



router.post(
  '/registration',
  // [
  //   check('email', 'Incorrect email').isEmail(),
  //   check('password', 'Incorrect password').isLength({ min: 3, max: 12 }),
  // ],
  async ( req, res ) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Incorrect request', errors });
      }

      const { email, password, userName } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} already exist` });
      }

      const hashPassword = await bcrypt.hash(password, 6);

      const user = new User({ email, password: hashPassword, userName });
      await user.save();

      return res.json({ message: `User ${userName} was created` });

    } catch (e) {
      console.log('Errors Router Registration', e);
      res.send({ message: 'Server error' });
    }
  }
);


router.post('/login', 
async ( req, res ) => {
  try {
    const { email, password} = req.body;
    const user = await User.findOne({email})

    if(!user) {
      return res.status(400).json({message: 'User not found'})
    }

    const isPassValid = bcrypt.compareSync(password, user.password)

    if(!isPassValid) {
      return res.status(400).json({message: 'Invalid password'})
    }
    
    const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'})
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar,
        dialogs: user.dialogs,
        posts: user.posts,
        friends: user.friends
      }
    })

  } catch (e) {
    console.log('Errors Router Login', e);
    res.send({ message: 'Server error' });
  }
}
)

export default router;
