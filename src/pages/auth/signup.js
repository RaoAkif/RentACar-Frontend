import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/user/user';
import './auth.css';

export default function signup() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(name));
  };
  return (
    <div className="auth-page orange">
      <div className="container">
        <img className="form-logo" src={require('../../assets/images/rentacar_logo.png')} alt="logo" />
        <form className="form" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              placeholder="Name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-green">Signup</button>
        </form>
        <div className="navi-option">
          <p>
            Already have an account?
            <a href="/login"> Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
