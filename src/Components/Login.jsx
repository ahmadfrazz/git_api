import React, { useContext, useState, useEffect } from 'react';
import '../App.css';
import { useNavigate, Link } from "react-router-dom";
import { DarkModeContext } from '../context/DarkModeContext';
import { useDispatch, useSelector } from 'react-redux';






const Login = () => {

  const nav = useNavigate();

  // const {darkMode} = useContext(DarkModeContext);
const darkMode = useSelector((state) => state.themeToggle );
const dispatch = useDispatch();

const [submitted, setSubmitted] = useState(false);
const users = useSelector((state) => state.userRegister );
const [ustate, setUstate] = useState();

useEffect(() => {
  setUstate(users);
  if(submitted){
    setUstate(users);
    uhelp();
  }
  console.log(users);
}, [submitted, ustate])




const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [u, setU] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
  dispatch({type: 'LOGIN', payload: user});
  setSubmitted(true);
}
const uhelp = () => {
  ustate.users.map((user) => {
    if(user.isLogin && user.email === email && user.password === password){
      nav(`/user/${user.id}`);
    }
  })
}

// const log = useSelector((state) => state.userRegister );
// console.log(users.isLogin);
  // if(state.users.email=== email && state.users.isLogin === true){
  //   nav('/');
  //   setSubmitted(false)
  // }
  // else{
  //   setError(true)
  // // console.log(state.users);
  // }


  return (
    <div className='container' >
      {error ? <div className="alert alert-danger alert-dismissible" role="alert">
        <strong>Oops!</strong> Wrong Credentials...
        {/* <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close"><span>&times;</span></button> */}
      </div> : null }

      <div className='container' id={darkMode === 'DARK' ? 'D_logincontainer' : 'L_logincontainer'} >

        <h3 className='text-center mb-5' id={darkMode === 'DARK' ? 'D_loginHeader' : 'L_loginHeader'} >Welcome Back!</h3>
        <div id="loginForm" >
          
          <form onSubmit={onSubmitHandler}>
            <div className="form-floating mb-4">
              <input type="email" className="form-control" vlaue={email} onChange={e => setEmail(e.target.value)} id={darkMode === 'DARK' ? 'D_logininput' : 'L_logininput'} aria-describedby="emailHelp" placeholder="Enter email..." autoFocus />
              <label for="floatingInput" id='floatingLabel'>Enter Email</label>
            </div>
            <div className="form-floating mb-4">
              <input type="password" className="form-control" vlaue={password} onChange={e => setPassword(e.target.value)} id={darkMode === 'DARK' ? 'D_logininput' : 'L_logininput'} placeholder="Enter password..." />
              <label for="floatingInput" id='floatingLabel'>Password</label>
            </div>
            <div>
              <button type="submit" className="btn btn-primary mt-1" id="login_btn" >Log in</button>
            </div>
          </form>
          
          <div id={darkMode === 'DARK' ? 'D_divider' : 'L_divider'} >
              <hr className="solid" />
              <small className="form-text" id='dividerText' >Don't have an account?</small>
              <hr className="solid" />
          </div>
          <div>
            <Link to="/register" className='btn btn-outline-secondary' id={darkMode === 'DARK' ? 'D_regbtn' : 'L_regbtn'} >Create New Account</Link>
          </div>

        </div>
      </div>
    </div>
  )
}



export default Login;