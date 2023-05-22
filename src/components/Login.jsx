import React, { useState } from 'react';
// import Layout from './Layout';
import './Login.css';
import Navbar from './Nav';

function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [terms, setTerms] = useState(false);
  
//   console.log('render login', username,password,terms);
//         const onSubmit = (e) => {
//         e.preventDefault();
//         console.log('submit value', inputFields)
//   }
const [inputFields, setInputFields] = useState({
        email:'',
        password:'',
        term:false
      });

const handleChange = (e) => {
  const { target } = e;
  const { name } = target;
  const value = name === 'term' ? target.checked : target.value;
  setInputFields({
    ...inputFields,
    [name]: value
  })
}
    

const onSubmit = (e) => {
  e.preventDefault(); 

  console.log('submit value', inputFields)
}

  return (
    <>
      <Navbar />
        <div className="loginpage">
          <section className="form">
            <h1 className="welcome">Welcome to <span style={{color: 'orange'}}>Nest</span>Fit</h1>
            <div className="txt_field">
              <h4><span style={{color:'orange'}}>User</span>name</h4>
              <input className="input-username" type="username" name="username" onChange={handleChange}/>
            </div>
            <div className="txt_field">
              <h4><span style={{color:'orange'}}>Pass</span>word</h4>
              <input className="input-password" type="password" name="password" onChange={handleChange}/>
            </div>
            <div className="remember-me">
              <input className="input-remember-me" type="checkbox" name="term" onChange={handleChange} />
              <p>I agree to the terms & conditions</p>
            </div>
            <div className="btn">
              <button className="register" onClick={ onSubmit } >Register</button>
              <button className="login" onClick={ onSubmit } >Login</button>
            </div>
              {/* <hr />
            <div className="btn-login-google">
              
              <button className="google" >Log in with Google</button>
            </div>
            <div className="btn-login-facebook">
            
              <button className="facebook">Log in with Facebook</button>
            </div> */}
          </section>
        </div>
    </>
  )
}
export default Login