import { Schema, model } from 'mongoose';

const Post = new Schema({
  // id: {type: String, required: true, unique: true},
  userName: { type: String, required: true, unique: false },
  avatar: { type: String },
  content: { type: String },
  date: { type: String },
});

export default model('Post', Post);
