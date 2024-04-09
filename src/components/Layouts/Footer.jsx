import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTrophy } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faComments} /> Threads</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTrophy} /> Leaderboard</a></li>
        </ul>
      </nav>

    </footer>
  );
}

export default Footer;
