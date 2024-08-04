import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to Water Resource Management</h1>
          <p>Ensuring sustainable water resources for future generations</p>
        </div>
      </div>
      <div className="new-section">
        <h2>What We Do</h2>
        <div className="cards">
          <div className="card">
            <h3>Water Conservation</h3>
            <p>We implement innovative water conservation strategies to ensure sustainable water usage.</p>
            <button>Learn More</button>
          </div>
          <div className="card">
            <h3>Community Education</h3>
            <p>We educate communities on the importance of water conservation and sustainable practices.</p>
            <button>Get Involved</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
