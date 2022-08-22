import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinUser } from '../../redux/user/user';
import './auth.css';

export default function login() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinUser(name));
  };
  return (
    <div className="auth-page">
      <div className="container">
        <img className="form-logo" src={require('../../img/rentacar_logo.png')} alt="logo" />
        <form action="" className="form" method="POST" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="navi-option">
          <p>
            Don&apos;t have an account?
            <a href="/signup"> Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
}
