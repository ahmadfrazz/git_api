import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import '../App.css';
import { useNavigate, Link  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';



const Register = () => {

  const nav = useNavigate();
  // const {darkMode} = useContext(DarkModeContext);
const darkMode = useSelector((state) => state.themeToggle )
const state = useSelector((state) => state.userRegister )


const ustate = useSelector((state) => state.userRegister );





  // const [passwordType, setPasswordType] = useState("password");
  //   const [passwordInput, setPasswordInput] = useState("");
  //   const handlePasswordChange =(evnt)=>{
  //       setPasswordInput(evnt.target.value);
  //   }
  //   const togglePassword =()=>{
  //     if(passwordType==="password")
  //     {
  //      setPasswordType("text")
  //      return;
  //     }
  //     setPasswordType("password")
  //   }
// IoEyeOffOutline
// IoEyeOutline
// import { IconName } from "react-icons/io5";

const dispatch = useDispatch();
const [alert, setAlert] = useState({ success: false, error: false });
const [inputError, setInputError] = useState({
  uname: '',
  email: '',
  password: '',
  confirm_password: '',
});
const [validate, setValidate] = useState('');
const [newUser, setNewuser] = useState({
  id: '',
  uname: '',
  email: '',
  password: '',
  confirm_password: '',
});

const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("name", name, 'and', "value", value );
        if(name !== 'confirm_password')
        {
          setNewuser({...newUser, [name]: value });
          setInputError({[name]: ''});
        }
        if (name === 'confirm_password')
        {
          setNewuser({...newUser, [name]: value });
          if(newUser.password === value){
            setValidate('Matched');
            setInputError({[name]: ''});
          }else{
            setValidate('');
            setInputError({[name]: "Password doesn't match"});
          }
        }
        // debugger;
    }

const onSubmitHandler = (e) => {

  e.preventDefault();
  
  if(newUser.uname === ''){
    setInputError({uname: 'Name is required'});
    return;
  }
  if(newUser.email === ''){
    setInputError({email: 'Email is required'});
    return;
  }
  if(newUser.password === ''){
    setInputError({password: 'Password is required'});
    return;
  }
  if(newUser.confirm_password === ''){
    setInputError({confirm_password: 'Confirm Password is required'});
    return;
  }
  if(newUser.password !== newUser.confirm_password){
    setAlert({error: true});
    return;
  }
  const userFound = ustate.users.find((user) => user.email === email ? true : false )
  if(!userFound){
    const user = {
      id: uuidv4(),
      uname,
      email,
      password
    }
    if(password === confirm_password){
      dispatch({ type: 'REGISTER', payload: user});
      setAlert({success: true, error: false});
      setNewuser({
        id: '',
        uname: '',
        email: '',
        password: '',
        confirm_password: '',
      })
      nav('/login')
    }else{
      setAlert({success: false, error: true});
    }
    console.log(state.users);
  }else{
    setAlert({error: true});
  }
}


const {uname, email, password, confirm_password} = newUser;
const {success, error} = alert;

  return (
    <div className='container' >
      {success ?
      <div className="alert alert-success alert-dismissible" role="alert">
        <strong>Congrats!</strong> Account created successfully.
        <Link to="/login"className="alert-link" >Sign In here...</Link>
        {/* <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> */}
      </div> : null}

      {error ?
      <div className="alert alert-danger alert-dismissible" role="alert">
        <strong>Oops!</strong> Email already exist..
        {/* <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close"><span>&times;</span></button> */}
      </div> : null}

      <div className='container p-5' id={darkMode === 'DARK' ? 'D_logincontainer' : 'L_logincontainer'} >

        <h3 className='text-center mb-5' id={darkMode === 'DARK' ? 'D_loginHeader' : 'L_loginHeader'} >Register</h3>
        <div id="loginForm" >
          <form onSubmit={onSubmitHandler}>
            <div className="form-floating mb-4">
              <input type="text" name='uname' className={classnames('form-control', { 'is-invalid': inputError.uname, 'is-valid': uname})} vlaue={uname} onChange={handleChange} id={darkMode === 'DARK' ? 'D_logininput' : 'L_logininput'} placeholder="Enter name..." autoFocus />
              <label for="floatingInput" id='floatingLabel'>Enter Name</label>
            {inputError.uname ? <div className='invalid-feedback'>{inputError.uname}</div> : null}
            </div>
            <div className="form-floating mb-4">
              <input type="email" name='email' className={classnames('form-control', { 'is-invalid': inputError.email, 'is-valid': email })} vlaue={email} onChange={handleChange} id={darkMode === 'DARK' ? 'D_logininput' : 'L_logininput'} placeholder="Enter email..."  />
              <label for="floatingInput" id='floatingLabel'>Enter Email</label>
              {inputError.email ? <div className='invalid-feedback'>{inputError.email}</div> : null}
            </div>
            <div className="mb-4" style={{display: 'grid' , gridTemplateColumns: 'auto auto', gridGap: '10px'}}>
              <div className="form-floating">
                <input type="password" name='password' className={classnames('form-control', { 'is-invalid': inputError.password, 'is-valid': password })} vlaue={password} onChange={handleChange} id={darkMode === 'DARK' ? 'D_logininput' : 'L_logininput'} placeholder="Enter password..."  />
                <label for="floatingInput" id='floatingLabel'>Enter Password</label>
                {inputError.password ? <div className='invalid-feedback'>{inputError.password}</div> : null}
              </div>
              <div className="form-floating">
                <input type="password" name='confirm_password' className={classnames('form-control', { 'is-invalid': inputError.confirm_password, 'is-valid': validate })} vlaue={confirm_password} onChange={handleChange} id={darkMode === 'DARK' ? 'D_logininput' : 'L_logininput'} placeholder="Confirm password..."  />
                <label for="floatingInput" id='floatingLabel'>Confirm Password</label>
                {inputError.confirm_password ? <div className='invalid-feedback'>{inputError.confirm_password}</div> : null}          
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary mt-1" id="login_btn" ><span>Sign Up </span></button>
            </div>
          </form>

        </div>


      </div>




        {/* <div className="row">
            <div className="col-sm-3">
                <div className="input-group my-4 mx-4">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
                </div>
            </div>
        </div> */}







      

    </div>
  )
}

export default Register;