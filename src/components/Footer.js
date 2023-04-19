import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/jayant_sawarkar/"><InstagramIcon /></a>
        <a href="https://www.linkedin.com/in/jayant-sawarkar-34099b1a9/"> <LinkedInIcon /> </a>
      </div>
      <p> &copy; 2023 Jayant Sawarkar</p>
    </div>
  );
}

export default Footer;