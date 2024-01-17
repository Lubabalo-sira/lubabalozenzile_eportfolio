import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBriefcase,
  faNetworkWired,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {

  const sectionClass = "w-4/5 lg:w-3/5 text-justify leading-8";
  const titleClass = "w-4/5 lg:w-3/5 mt-12 mb-16 text-center text-3xl";
  const subTitleClass = "mb-4 text-left text-2xl";

  return (
    <section className={"w-full flex flex-col justify-center items-center"}>
      <div className={sectionClass}>
        <h1 className={titleClass}>
          <FontAwesomeIcon className={"pr-2"} icon={faBriefcase} /> My Skills
        </h1>
        <div id={"trip-introduction"} className={"mb-16"}>
          <p>
            Recent Computer Science graduate with a passion for continuous learning and skill development. Excited to apply my knowledge and contribute to innovative projects in the software development field.
          </p>
        </div>
      </div>

      <div className={sectionClass}>
        <h2 className={titleClass}>Technical Skills</h2>

        <div>
          <h3 className={subTitleClass}>Programming Languages</h3>
          <ul>
            <li>Java (Proficient)</li>
            <li>Python (Proficient)</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Web Technologies</h3>
          <ul>
            <li>JavaScript (Proficient)</li>
            <li>HTML/CSS (Proficient)</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Database Technologies</h3>
          <ul>
            <li>MySQL (Proficient)</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Frameworks and Libraries</h3>
          <ul>
            {/* Add frameworks or libraries you've worked with */}
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Version Control</h3>
          <ul>
            <li>Git (Proficient)</li>
          </ul>
        </div>
      </div>

      <div className={sectionClass}>
        <h2 className={titleClass}>Soft Skills</h2>

        <div>
          <h3 className={subTitleClass}>Communication</h3>
          <ul>
            <li>Effective written and verbal communication</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Problem Solving</h3>
          <ul>
            <li>Proven ability to analyze and solve complex problems</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Team Collaboration</h3>
          <ul>
            <li>Collaborative team player with a focus on achieving common goals</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Adaptability</h3>
          <ul>
            <li>Demonstrated ability to adapt to new technologies and challenging situations</li>
          </ul>
        </div>
      </div>

      <div className={sectionClass}>
        <h2 className={titleClass}>Project Management</h2>

        <div>
          <h3 className={subTitleClass}>Agile/Scrum</h3>
          <ul>
            <li>Experience with Agile and Scrum methodologies</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Project Planning</h3>
          <ul>
            <li>Proficient in developing project timelines and milestones</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Task Prioritization</h3>
          <ul>
            <li>Effective task prioritization for efficient project management</li>
          </ul>
        </div>
      </div>

      <div className={sectionClass}>
        <h2 className={titleClass}>Tools</h2>

        <div>
          <h3 className={subTitleClass}>IDEs (Integrated Development Environments)</h3>
          <ul>
            <li>VSCode</li>
            <li>IntelliJ IDEA</li>
            <li>PyCharm</li>
          </ul>
        </div>

        <div>
          <h3 className={subTitleClass}>Design Tools</h3>
          <ul>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      <div className={sectionClass}>
        <h2 className={titleClass}>Mathematics Skills</h2>
        <ul>
          <li>Calculus</li>
          <li>Advanced Calculus</li>
          <li>Linear Algebra</li>
          <li>Mathematical Finance</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
