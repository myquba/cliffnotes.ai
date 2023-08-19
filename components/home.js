// Home.js
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout');
      alert('Logged out successfully.');
      history.push('/login');
    } catch (error) {
      console.error('Error logging out:', error.response.data);
      alert('Error logging out: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

