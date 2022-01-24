import {Schema, model, Types} from 'mongoose'

const User = new Schema({
    email: {type: String, required: true, unique: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String},
    dialogs: [{type: Types.ObjectId, ref: 'Dialogs'}],
    posts: [{type: Types.ObjectId, ref: 'Posts'}],
    friends: [{type: Types.ObjectId, ref: 'Friends'}],
})

export default model('User', User)