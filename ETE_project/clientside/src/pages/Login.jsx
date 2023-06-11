import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import ".././components/css/Login.css"
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


const Login = () => {

  const navigate = useNavigate();
  // const [role, setRole] = useState(0);
  const [values, setValues] = useState({
    email: 'test2@123gmail.com',
    password:'Test@123',
    // mobileNumber:""s
    role: 0

});



const { email, password, role} = values;

const handleChange = name => (e) =>{
    console.log(e.target.value);
    setValues({...values, [name]: e.target.value});
}


const handleSubmit = async (e) =>{
  console.log("yes hittting signin");
    e.preventDefault();
    try{
      // console.log("hi23");
        const signinUser = await axios.post('http://localhost:6950/signin', {
            email,
            password,
            // mobileNumber
            role ,  
            
        });
        console.log(signinUser);
        const userId = signinUser.data.userid;
        // const userid = response.data.id;
        localStorage.setItem("userId" ,userId);
        console.log(signinUser);
        navigate(`/story`);

        if  (signinUser.data.sucess === true){
          console.log("yeah here also");
            setValues({ email: '', password:'',role: '' });
  
            // toast.success("Log In successfully");
            // navigate(`/user`); 
            if (typeof window !== "undefined") {
              localStorage.setItem("token",JSON.stringify(signinUser.data));
            }
          
        }
        

    } catch(err){
        console.log(err.response.data.error);
        toast.error(err.response.data.error);
     
    }
}

// const handlesignup = (e) => {
//     try {
//       navigate('/signup');
//     } catch (err) {
//        console.log(err.response.data.error);
//         toast.error(err.response.data.error);
//     }
// }

  return (
   <>
   <Navbar/>
    <div className="login-container">
    <div className="form-cont">
   <h1>signin</h1>
   <form >
        <label htmlFor='username' >email:</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          value={email}
          onChange={handleChange("email")}  
        /><br/>

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={handleChange("password")} 

        /><br/>

<label>
          <input
            type="radio"
            value={0}
            checked={role === 0}
            onChange={handleChange("role")}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            value={1}
            checked={role === 1}
            onChange={handleChange("role")}
          />
          Admin
        </label>

        <input onClick={handleSubmit}  type="submit" value="Submit"/>
        <p>
            Not registered? <Link to="/signup">Signup</Link>
          </p>
      </form>
      </div>
      </div>
      <Footer/>
   </>
  )
}

export default Login;