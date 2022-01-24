import {Schema, model} from 'mongoose'

const Post = new Schema({
    userName: {type: String, required: true, unique: true},
    avatar: {type: String},
    content: {type: String}
})

export default model('Post', Post)