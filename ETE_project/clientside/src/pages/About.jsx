import React from 'react';
import '../components/css/About.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to the Medium Clone, a platform for writers and readers to connect, share ideas, and explore a wide range of topics. 
        Our mission is to provide a space where individuals can express their creativity, knowledge, and opinions through engaging articles and stories.
      </p>
      <p>
        Whether you're an aspiring writer looking for an audience or a passionate reader seeking thought-provoking content, Medium Clone is the perfect place for you. 
        Join our vibrant community and discover a world of captivating stories, insightful articles, and meaningful discussions.
      </p>
      <p>
        We believe in the power of words to inspire, inform, and transform. At Medium Clone, we value diversity, inclusivity, and the freedom of expression. 
        We encourage our users to share their unique perspectives, engage in respectful conversations, and create an environment that fosters learning and growth.
      </p>
      <p>
        So, whether you're here to read, write, or connect, we hope you enjoy your journey on Medium Clone. Happy exploring!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
