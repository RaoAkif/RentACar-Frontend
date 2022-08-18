import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/user/user';

export default function signup() {
  const { status } = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(name));
    if (status === 'succeeded') {
      window.location.href = '/login';
    } else {
      const dialog = document.createElement('dialog');
      dialog.classList.add('dialog');
      dialog.innerHTML = `user ${name} already exists`;
      document.body.appendChild(dialog);
      dialog.showModal();
      setTimeout(() => {
        dialog.close();
      }, 2000);
    }
  };
  return (
    <div className="auth-page">
      <div className="container">
        <h1>Signup</h1>
        <form className="form" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <br />
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="btn">Signup</button>
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
