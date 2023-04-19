import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2001 - 2010"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lok Vidhyalaya, Wardha, Maharashtra
          </h3>
          <p> Primary School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            New Arts College, Wardha, Maharashtra
          </h3>
          <p> High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           D.M.I.E.T.R, Wardha, Maharashtra
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Of Engineering
          </h4>

          <p>Mechanical Engineering</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Quality Engineer - Endurance Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aurangabad, Maharashtra
          </h4>
          <p>As a Quality Engineer working to Maintain & Supply material.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ReactJs Internship - Newton School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Banglore
          </h4>
          <p>
            Learn & Work with different Stack. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - Saffire
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune,Maharashtra
          </h4>
          <p>
            Helped the team launch major projects by working in the front
            end with ReactJS Technology.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;