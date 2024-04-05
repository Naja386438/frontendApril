import axios from 'axios';
import { useEffect, useState } from 'react';




function Reset(){
    const [email, setEmail] =useState(''); 
    const [new_password, setPassword] =useState(''); 
    const [confirmPassword, setConfirmPassword] =useState('');
    const [error,setError] =useState('');
    useEffect ( ()=>{
        console. log( 'email is:', email); 
        console. log ('password is:', new_password);
     }, [email, new_password]) 


     const handleSubmit = async () => {

            setError("password updated successfully");
            const response = await axios. post('http://localhost:2000/forgot',{
             email, new_password 
            }) 

             if (response.data){
console.log(response.data);

            }
        // else{
        //     setError("password dont match")
        // }                                                 

    }
    return(
         <center>
        <div style={{borderStyle:"solid",height:"500px",width:"700px",backgroundImage:`url(home.jpg)`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <h2 style={{textAlign:"center"}}>Reset account Password</h2> 
            <input type="email" name="email" placeholder="Enter Mail Id" onChange={(e)=>setEmail(e.target.value)} style={{width:"500px",padding:"12px"}}></input><br></br>
            <input type="text" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} style={{width:"500px",padding:"12px"}}></input><br></br>
            <input type="text" name="Confirm Password" placeholder="Confirm Password" onChange={(e)=>setPassword(e.target.value)} style={{width:"500px",padding:"12px"}}></input>
            <br></br>
            <button type="botton" value="update password" onClick={handleSubmit} style={{padding:"12px",backgroundColor:"purple"}}>update password</button>
            <div style={{color:"red"}}>{error}</div>
        
        </div>
        </center>
    )
    }
    export default Reset;