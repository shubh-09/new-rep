import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../../components/css/CreatePost.css"
import axios from 'axios';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

const CreatePost = () => {
  const navigate = useNavigate();
    const [title, setTitle] = useState('');
  const [subtitle, setSubTitle]= useState('');
  const [category, setCategory] = useState('art');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  // const [username, setUsername] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('category', category);
    formData.append('body', body);
    formData.append('image', image);
    formData.append('userId', localStorage.getItem("userId"));

    axios
      .post('http://localhost:6950/create ', formData)
      .then((response) => {
        console.log('Post created successfully');
        setTitle('');
        setSubTitle('');
        setCategory('art');
        setBody('');
        setImage(null);
        navigate("/");
      })
      .catch((error) => {
        console.error('Error creating post: ', error);
      });
  };
  return (
        <>
        <Navbar/>
        <div className="main_create">
        <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="title">SubTitle:</label>
      <input
        type="text"
        id="subtitle"
        value={subtitle}
        onChange={(e) => setSubTitle(e.target.value)}
        required
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="art">Art</option>
        <option value="science">Science</option>
        <option value="technology">Technology</option>
        <option value="movie">Movie</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
      </select>

      <label htmlFor="body">Body:</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>

      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        onChange={(e) => setImage(e.target.files[0])}
        // value={image}
      />

      <button type="submit">Create post</button>
      <Link  className="update" to="/updatepost">update post</Link>
    </form>
        </div>
        <Footer/>
        </>
    )
}

export default CreatePost;