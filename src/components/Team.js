import { Link } from 'react-router-dom';
import React from 'react';
import './styles/Team.css';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

const Team = () => {
  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src={team1} alt="Team Member 1" />
          <h3>NOOR ISSE</h3>
          <p>The founder</p> 
          <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="team-member">
          <img src={team2} alt="Team Member 2" />
          <h3>NOOR HAFOW</h3>
          <p>The Manager</p>
          <Link to="/contact"><button className="btn">Contact</button></Link>
          
        </div>
        <div className="team-member">
          <img src={team3} alt="Team Member 3" />
          <h3>NOOR ISSE</h3>
          <p>The ICT Manager</p>
          <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="team-member">
          <img src={team4} alt="Team Member 4" />
          <h3>NOOR ISSE</h3>
          <p>The Secratery</p>
          <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
