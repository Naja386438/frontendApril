import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Forget(){
    const navigator = useNavigate()
     const redirecter = ()=> {
        navigator('/Reset');
     }
    return(
        <center>
        <div>
            <a href=" " onClick={redirecter} >Forget Password?</a> 
        </div>
        </center>
    )
};
export default Forget;