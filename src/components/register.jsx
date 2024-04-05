import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

  return (
    <center>
      <table>
    <div style={{borderStyle:"solid",height:"500px",width:"700px",borderStyle:"solid",height:"500px",width:"700px",backgroundImage:`url(reg.jpg)`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>  
      <h2>REGISTER</h2>
      <tr>
      <div >
        
        <input style={{width:"500px",padding:"12px"}}
          type="text" placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      </tr>
      <tr>
      <div>
        <input style={{width:"500px",padding:"12px"}}
          type="text" placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      </tr>
      <tr>
      <div>
        <input style={{width:"500px",padding:"12px"}}
          type="email" placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      </tr>
      <tr>
      <div>
        
        <input style={{width:"500px",padding:"12px"}}
          type="password" placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      </tr>
      <tr>
      <div>
        
        <input style={{width:"500px",padding:"12px"}}
          type="password" placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      </tr>
      <button onClick={handleSubmit} style={{backgroundColor:"aqua",color:"white",padding:"14px 20px",textAlign:"center"}}>Register</button>
    </div>
    </table>
    </center>
  );
};

export default Register;
