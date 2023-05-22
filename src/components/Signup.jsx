import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import Navbar from "./Nav";


const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstname,setFirstname] = useState('')
  return (
    <>
    <Navbar />
    
      <div class="backgroundLayer">
        <div>
          {/* form */}
          <div class="h-75 d-inline-block border border-light p-3 bg-light bg-opacity-50">
            <h1>Welcome to, NestFit</h1>
            <form className="mx-5">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onclick = {(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onclick = {(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Confrim Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  // id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  // id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onclick = {(e) => setFirstname(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  // id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onclick = {(e) => setLastname(e.target.value)}

                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Birth date
                </label>
                <input
                  type="email"
                  class="form-control"
                  // id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onclick = {(e) => setBirthdate(e.target.value)}
                />
              </div>
              <label for="exampleInputEmail1" class="form-label">
                Gender
              </label>
              <br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio3">
                  Others
                </label>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
                  // id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <button
                type="cancel"
                class="btn mr-1 border border-dark btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        </div>
    </>
  );
};

export default Signup;
