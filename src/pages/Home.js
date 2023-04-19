import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jayant</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>

          <a href="https://www.linkedin.com/in/jayant-sawarkar-34099b1a9/"><LinkedInIcon/></a>
          <a href="mailto:jayantsawar96@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/jayant7385"><GitHubIcon /></a>

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI
            </span>
          </li>
        
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, TypeScript</span>
          </li>

          <li className="item">
            <h2>Tech</h2>
            <span>Git,GitHub</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;