import React, { useState } from "react";
import axios from 'axios';
import { toast} from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import "../components/css/Signup.css"
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        gender:"",
        mobileNumber:"",
        role:"",
      });
    
    const {name,email,password ,username,confirm_password,gender,mobileNumber,role} = values;
    


    

    const handleChange= name => (e) => {
        // console.log(e.target.value);
        setValues({...values,[name]:e.target.value});
    
      };
      const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const signUser = await axios.post("http://localhost:6950/signup",{
              name,
              email,
              username,
              password,
              confirm_password,
              gender,
              mobileNumber,
              role,
            });

            console.log(signUser);

            if(signUser.data.success === true){
                setValues({
                  name: "",
                  email: "",
                  username:"",
                  password: "",
                  confirm_password: "",
                  gender:"",
                  mobileNumber:"",
                  role:""          
                     });
                toast.success("Sign up successfully, please Login!");
               
                };
        localStorage.setItem("userId" ,signUser.data.user1._id);

        } catch (err) {
            console.log(err.response.data.error);
            toast.error(err.response.data.error);

        }
      }

  return (
    <>
    <Navbar/>
     <div className="container">
      <div className="form-contai">
        
      
    <h1>signup</h1>
    <form >
      <div className="frompart1">
          <div className="formItems">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange("name")}
              value={name}
              required
              />
          </div >
          <div className="formItems">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
                onChange={handleChange("email")}
                value={email}
                required
              />
          </div>
          <div className="formItems">
            <label htmlFor="username">username:</label>
            <input
              type="text"
              name="username"
                onChange={handleChange("username")}
                value={username}
                required
              />
          </div>
          <div className="formItems">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              onChange={handleChange("password")}
              value={password}
              required
              />
          </div>
          <div className="formItems">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              name="confirm_password"
              onChange={handleChange("confirm_password")}
              value={confirm_password}   
              required
              />
          </div >
          
        </div>
        <div className="frompart2">
          <div className="formItems">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              name="gender"
              onChange={handleChange("gender")}
              value={gender}
              required
              />
          </div >
          <div className="formItems">
            <label htmlFor="mobile number">mobileNumber:</label>
            <input
              type="number"
              name="mobile number"
              onChange={handleChange("mobileNumber")}
              value={mobileNumber}
              required
              />
          </div>
          
        </div>
      <button onClick={handleSubmit} type="submit">Signup</button>
      <p>
            already created account <Link to="/login">Login</Link>  plz Login
          </p>
    </form>
    </div>
    </div>
    <Footer/>
    </>
        )
}

export default Signup;