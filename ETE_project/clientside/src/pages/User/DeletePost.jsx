import React from 'react';
import axios from 'axios';

const DeletePost = ({ postId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:6950/${postId}`);
      onDelete(postId);
      console.log('Post deleted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default DeletePost;
