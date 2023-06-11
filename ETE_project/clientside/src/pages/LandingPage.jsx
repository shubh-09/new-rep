import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/LandingPage.css';
import ReadPost from './User/ReadPost';
import Card from '../components/Card';

const posts = [
  {
    title: 'Learn Chess in a New Way',
    author: 'Samay Raina',
    description: 'Have fun while learning chess with our standup comedian Samay Raina',
  },
  {
    title: 'King Gizzard & the Lizard Wizard Returns to Thrash Metal',
    author: 'Ethan Shanfeld',
    description: 'The prolific Australian rock act known for traversing genres, is returning to thrash metal with a new album',
  },
  {
    title: '13 best Video Editing tips for absolute beginners',
    author: 'Amit Pathak',
    description: 'Are you a beginner in video editing? Here are a few tips that might prove to be useful the next time you edit your videos.',
  },
  {
    title: 'The MCUs Multiverse Saga Release Order does not Make Any Sense',
    author: 'Screen Rant',
    description: 'To that end, Marvel current Phase 5 plans in particular look odd.',
  },
  {
    title: 'CSK lift Tata IPL 16 trophy, beat GT by 5 wickets',
    author: 'Raman Sharma',
    description: 'The 16th season of the Indian Premier League (IPL 2023) ended with CSK becoming champions and lifting the IPL 2023 trophy.',
  },
];


const LandingPage = ({ isLoggedIn }) => {
  return (
    <div className="landing-page">
      <div className="content">
        {/* Add your landing page content here */}
        <h1 class="hjh" style={{fontSize:"70px"}}>Welcome to our Medium Clone!</h1>
        <p>Write something new funny, interesting, anything you like that inspire the world.</p>
      </div>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;