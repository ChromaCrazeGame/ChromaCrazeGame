import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Log in here chroma crazers!</h1>
      <Link to='/gameboard'>Login</Link>
    </div>
  )
}

export default LoginPage;