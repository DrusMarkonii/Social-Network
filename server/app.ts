import express from "express";
const app = express();

import { createServer } from "http";
import { Server } from "socket.io";
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

import mongoose from 'mongoose';
import cors from 'cors';
import config from 'config';
import authRouter from './routes/auth.routes';
import routerFriends from './routes/friends';
import routerPosts from './routes/posts';
import routerChat from './routes/chat';
import cookieParser from 'cookie-parser';

const PORT = config.get('serverPort') || 5000;
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
// app.use('/api', (req, res) => res.send('Home page'))

app.use('/friends', routerFriends);
app.use('/posts', routerPosts);
app.use('/api/auth', authRouter);
app.use('friend/chat', routerChat);
app.use('/', routerChat);



io.on('connection', (socket: any) => {
  console.log('user connected', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id)
  })
  
  
});


const start = async () => {
  try {
    await mongoose
      .connect(config.get('mongoUrl'))
      .then(() => console.log('MongoDB has started...'));
      httpServer.listen(PORT, () => console.log(`Server started on ${PORT}...`));
  } catch (e) {
    console.log('Errors....', e);
  }
};

start();
