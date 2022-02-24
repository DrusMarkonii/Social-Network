import { Router, Request, Response } from 'express';
import Post from '../models/Posts/Post';


const routerPosts = Router();

routerPosts.get('/', async (req: Request, res: Response) => {
    try {
      const posts = await Post.find().sort({date: -1});
      return res.json(posts);
    } catch (e) {
      console.log(e);
    }
  });

routerPosts.post('/', async (req, res) => {
  try {
    const { date, content, userName } = req.body;

    const post = new Post({content, userName, date})
    await post.save()

    return res.send({ message: `Post was created` })

  } catch (e) {
    console.log('Errors Router Post', e);
      res.json({ message: 'Server error, Post not add' });
  }
});


routerPosts.delete('/', async (req, res) => {
  try {
    const {date} = req.body;

    await Post.deleteOne({date})
  
    return res.json({ message: `Post was delete` })
    
  } catch (e) {
    console.log('Errors Router Post', e);
      res.send({ message: 'Server error, Post not add' });
  }
})

  export default routerPosts