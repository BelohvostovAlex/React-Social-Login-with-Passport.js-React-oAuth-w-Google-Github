import React from 'react';
import { useParams } from 'react-router-dom';

import { posts } from '../data';

export const Post = () => {
  const params = useParams();
  const currentPost = posts[params.id - 1];

  return (
    <div className="post">
      <img src={currentPost.img} alt="postImg" className="postImg" />
      <h1 className="postTitle">{currentPost.title}</h1>
      <p className="postDesc">{currentPost.desc}</p>
      <p className="postLongDesc">{currentPost.longDesc}</p>
    </div>
  );
};
