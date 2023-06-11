import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './pages/User/User';
import CreatePost from './pages/User/CreatePost';
import About from './pages/About';
import ContactUsPage from './pages/Contactus';
import UpdatePostForm from './pages/User/UpdatePostForm';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/user' element={<User />} />
        {/* <Route exact path='/about' element={<About />} /> */}
        {/* <Route exact path='/contact' element={<ContactUsPage />} /> */}
        <Route exact path='/createpost' element={<CreatePost />} />
        <Route exact path='/updatepost' element={<UpdatePostForm />} />
        <Route exact path='/story' element={<Card />} />
        <Route exact path='*' element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App;