import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import authRouter from './routes/auth.routes'
import cors from 'cors';
import routerFriends from './routes/friends';
import routerPosts from './routes/posts';
import routerChat from './routes/chat';



const PORT = config.get('serverPort') || 5000;
const app = express();

app.use(cors())
app.use(express.json())
// app.use('/api', (req, res) => res.send('Home page'))
app.use('/friends', routerFriends)
app.use('/posts', routerPosts)
app.use('/api/auth', authRouter)
app.use('friend/chat', routerChat)

const start = async () => {
  try {
    await mongoose
      .connect(config.get('mongoUrl'))
      .then(() => console.log('MongoDB has started...'));
    app.listen(PORT, () => console.log(`Server started on ${PORT}...`));
  } catch (e) {
    console.log('Errors....', e);
  }
};

start();
