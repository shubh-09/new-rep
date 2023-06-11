import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../components/css/ReadPost.css"
import Card from '../../components/Card';

const ReadPost = ({ postId }) => {
  const [post, setPost] = useState(null);



  useEffect(() => {
    const fetchPost = async () => {

        try {
          const response = await axios.get(`http://localhost:6950/posts/all`);
          console.log(response.data);
          setPost(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    fetchPost();
  }, [postId]);

  

  return (
    <div>
        <Card/>
        {/* <h1>helo</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.id}</p>
          {post.map((post) => (
            <h2 key={post.id}>{post.title}</h2>
          ))}

        </div>
      ) : (
        <p>Loading post...</p>
      )} */}
    </div>
  );
};

export default ReadPost;
