import React from 'react';
import Friend from './Friend/Friend';

const Friends: React.FC = () => (
  <div className='friends'>
    <Friend username='Jane' />
    <Friend username='Bob' />
  </div>
);

export default Friends;
