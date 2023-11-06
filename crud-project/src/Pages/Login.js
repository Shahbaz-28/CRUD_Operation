import React, { useState } from 'react';
import '../style/loginPage.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCreate from '../Hooks/crud_hooks/create_user_hook'
import createUser from '../services/apis/create_user';

const Login = () => {

  const [users, setUsers] = useState({});
  const navigate = useNavigate();

  const {data} = useCreate()

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("users", users);
   const res = await createUser(users)
   console.log("res", res)
    setUsers();
    navigate("/user");
  };

  return (
    <div className="create-container">
      <h2 className="create-heading">LOGIN</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="create-input-group">
          <label htmlFor="name" className="create-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="create-input"
            onChange={getUserData}
            required
          />
        </div>
        <div className="create-input-group">
          <label htmlFor="email" className="create-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="create-input"
            onChange={getUserData}
            required
          />
        </div>
        <div className="create-input-group">
          <label htmlFor="age" className="create-label">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            className="create-input"
            onChange={getUserData}
            required
          />
        </div>
        <div className="create-input-group create-radio-group">
          <div className="create-radio">
            <input
              className="create-input-radio"
              type="radio"
              name="gender"
              value="Male"
              onChange={getUserData}
              required
            />
            <label className="create-radio-label">Male</label>
          </div>
          <div className="create-radio">
            <input
              className="create-input-radio"
              type="radio"
              name="gender"
              value="Female"
              onChange={getUserData}
            />
            <label className="create-radio-label">Female</label>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="create-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
