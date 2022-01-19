import React from 'react';
import NewsItem from './NewsItem/NewsItem';

const News: React.FC = () => (
  <div className='newsBox'>
    <NewsItem likeCount={3} message='it is news message' username='Rob'/>
    <NewsItem likeCount={8} message='it is news message' username='Rob'/>
    
  </div>
);

export default News;
