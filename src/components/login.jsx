import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <center>
    <div style={{borderStyle:"solid",height:"500px",width:"700px",backgroundImage:`url(reset.jpg)`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <h2>LOGIN</h2>
      <div>
        <input style={{width:"500px",padding:"12px 20px"}}
          type="email" placeholder='Email ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>  
        <input style={{width:"500px",padding:"12px 20px"}}
          type="password" placeholder=' Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div style={{display:"flex",justifyContent:"center",textAlign:"center",gap:"10px"}}>
      <button onClick={handleSubmit} style={{padding:"12px",backgroundColor:"aqua",}}>Login</button> 

      <button onClick={redirecter} style={{padding:"12px",backgroundColor:"aqua"}}>Register</button> 
      </div>
      <div>
            {/* <a href="">Forget Password?</a> */}
        </div>
    </div>
    </center>
  );
};

export default Login;
