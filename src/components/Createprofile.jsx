import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import EditAvatar from './EditAvatar';
// import EditUserData from './EditUserData';
import { createActivities } from "../api/activityApi";
// import './Createactivity.css'
import { useState, useEffect } from "react";
import Navbar from "./Nav";
// import { updateUserProfile } from "../api/activityApi";

const defaultProfile = {
    firstName: '',
    lastName: '',
    aboutMe: '',
    bitrhDate: '',
    gender: '',
    country: '',
    weight: '',
    height: '',
    location: ''
}

function Createprofile() {
 const [newProfile, setNewProfile] = useState(defaultProfile)

  useEffect(() => {
    setNewProfile(defaultProfile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ส่งคำขอไปยัง API สำหรับสร้างหรือแก้ไขโปรไฟล์
      await updateUserProfile(newprofile);
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleOnClick = () => {
    handleSubmit();
  }

  return (
    <>
    <Navbar />
      <div className="createProfile">
        <h3 style={{ color: "#fac031" }}>
          Create{" "}
          <span style={{ color: "white", backgroundColor: "#fac031" }}>
            Profile
          </span>
        </h3>
        <form className="create-form" onSubmit={handleSubmit}>
          <label>About Me</label>
          <input
            type="text"
            placeholder="About Me"
            value={newProfile.aboutMe}
            name="aboutMe"
            onChange={handleChange}
          />
          <label>First name</label>
          <input
            type="text"
            placeholder="First name"
            value={newProfile.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <label>Last name</label>
          <input
            type="text"
            placeholder="Last name"
            value={newProfile.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <label>Birth date</label>
          <input
            type="date"
            value={newProfile.birthDate}
            name="birthDate"
            onChange={handleChange}
          />
          <label>Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="maleRadio"
              value="Male"
              checked={newProfile.gender === "Male"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="maleRadio">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="femaleRadio"
              value="Female"
              checked={newProfile.gender === "Female"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="femaleRadio">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="otherRadio"
              value="Others"
              checked={newProfile.gender === "Others"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="otherRadio">
              Others
            </label>
          </div>
          <label>Country</label>
          <input
            type="text"
            placeholder="Country"
            value={newProfile.country}
            name="country"
            onChange={handleChange}
          />
          <label>Weight</label>
          <input
            type="Number"
            placeholder="Weight"
            value={newProfile.weight}
            name="weight"
            onChange={handleChange}
          />
          <label>Height</label>
          <input
            type="Number"
            placeholder="Height"
            value={newProfile.height}
            name="height"
            onChange={handleChange}
          />
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            value={newProfile.location}
            name="location"
            onChange={handleChange}
          />
          <div className="create-btn">
            <button>Cancel</button>
            <button className="create-save-btn" onClick={handleOnClick}>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Createprofile