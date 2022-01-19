import { Router } from 'express';
import User from '../models/User/User';
import bcrypt from 'bcrypt';
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
      console.log(req.body);
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
      console.log('Errors Router', e);
      res.send({ message: 'Server error' });
    }
  }
);

export default router;
