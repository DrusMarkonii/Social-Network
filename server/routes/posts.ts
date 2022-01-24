import { Router, Request, Response } from 'express';
import Post from '../models/Posts/Post';


const routerPosts = Router();

routerPosts.get('/', async (req: Request, res: Response) => {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      console.log(e);
    }
  });

routerPosts.post('/', async (req, res) => {
  try {
    const {  content, userName } = req.body;

    const post = new Post({content, userName})
    await post.save()

    return res.send({ message: `Post was created` })

  } catch (e) {
    console.log('Errors Router Post', e);
      res.json({ message: 'Server error, Post not add' });
  }
});


routerPosts.delete('/', async (req, res) => {
  try {
    const { userName } = req.body;

    await Post.deleteOne({userName})
    

    return res.json({ message: `Post was delete` })
    
  } catch (e) {
    console.log('Errors Router Post', e);
      res.send({ message: 'Server error, Post not add' });
  }
})

  export default routerPosts