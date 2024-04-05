import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <>
    <div style={{alignContent:"end",display:"flex",justifyContent:"flex-end",backgroundColor:"wheat",color:"black"}}>
    
    <button onClick={logout} style={{padding:"14px 20px",backgroundColor:"wheat",color:"black",borderRadius:"10px",borderWidth:"5px"}}>login </button>
  
    </div>
    <center>
    <div style={{backgroundImage:`url(img.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"800px",width:"1600px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h2>Welcome Home{user}!</h2>
      <p></p>
      {/* <button onClick={logout} style={{padding:"14px 20px",backgroundColor:"wheat",color:"black",borderRadius:"10px",borderWidth:"5px"}}>login </button> */}
    </div>
    </center>
    </>
    
    );
};

export default Home;
