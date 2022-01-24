import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem/NewsItem';

const News: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/posts',
      );
      
      setPosts(result.data);
    };
    fetchData()
  }, [])


  return (
    <div className='newsBox'>
      {posts.map( (post) => (
        <NewsItem message={post.content} username={post.userName} key={post.id} likeCount={8}/>
      ))}
    </div>
  );
};

export default News;
