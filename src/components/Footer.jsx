import React from 'react';
import './Footer.css';
import Instagram from "./icons8-instagram.gif";
import Facebook from "./icons8-facebook.gif";
import Twitter from "./icons8-twitter.gif";
import Youtube from "./icons8-youtube.gif";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className='textcol'>Contact Us</h3>
          <p className='textcol'>Email: order@delhitiffinwala.com</p>
          <p className='textcol'>Phone: +91 8383871535</p>
        </div>
        <div className="footer-content">
          <h3 className='textcol'>Follow Us</h3>
          <div className="social-icons">
            <p  target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Instagram} alt="instagram" />
            </p>
            <p  target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Twitter} alt="Twitter" />
            </p>
            <p  target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Facebook} alt="Facebook" />
            </p>
            <p  target="_blank" rel="noopener noreferrer">
              <img className='iconImg' src={Youtube} alt="Youtube" />
            </p>
           
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Link to={"/aboutus"} ><p className='textcol'>About Us</p></Link>
        
        <p className='textcol'>&copy; 2023 delhitiffinwala. All Rights Reserved.</p>
        <Link to={"/terms&condition"}><p className='textcol'>Terms & Condition</p></Link>
      </div>
    </footer>
  );
};

export default Footer;