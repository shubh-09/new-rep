import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../components/css/UpdatePostForm.css"
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

const UpdatePostForm = ({ postId }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
        try {
          const response = await axios.get(`http://localhost:6950/update/${postId}`);
          const { title, subtitle, category, body } = response.data.post;
          setTitle(title);
          setSubtitle(subtitle);
          setCategory(category);
          setBody(body);
        } catch (error) {
          console.log(error);
        }
      };
    fetchPost();
  }, [postId]);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      subtitle,
      category,
      body,
    };

    try {
      await axios.put(`/update/${postId}`, updatedPost);
      console.log('Post updated successfully');
    } catch (error) {
      console.error('Error updating post: ', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className='container'>
        <div className='form-contai'>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="submit">Update Post</button>
    </form>

        </div>

    </div>
    <Footer/>
    </>
  );
};

export default UpdatePostForm;
