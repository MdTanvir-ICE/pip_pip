import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
  const{state,dispatch} =useContext(UserContext);
  const history = useHistory();
    const renderList = ( ) =>{
    
       if(state){
       
          return [
            <li ><a href="/profile">Profile</a></li>,
            <li><a href="/create">Create Post</a></li>,
            <li><a href="/myfollowingspost">My following</a></li>,
           <li >
              <button className="btn #c62828 red darken-3" type="submit" name="action"
              onClick={( )=> {localStorage.clear();
                dispatch({type:'CLEAR'});
                history.push('/login');
              }}
              >Logout  
              </button>
           </li>
          ]
       }else{
        
           return [
           
            <li> <Link to="/login">Login</Link></li>,
            <li> <Link to="/signup">Signup</Link></li>
           ]
       }
    }
    

    return (
      
      <nav>
      <div className="nav-wrapper white" >
        <a style={{marginLeft:'2%'}} href={state?'/':'/login'} className="brand-logo left">Pip-piP</a>
        <ul id="nav-mobile" className="right ">
          {renderList()}
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;