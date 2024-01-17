import React from 'react';
import '../styles/CapstoneProject.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const CapstoneProject = () => {

    const sectionClass = "w-4/5 lg:w-3/5 text-justify leading-8";
    const titleClass = "w-4/5 lg:w-3/5 mt-12 mb-16 text-center text-3xl";

    return (
        <section className={"w-full flex flex-col justify-center items-center"}>
            <h1 className={titleClass}>
                <FontAwesomeIcon className={"pr-2"} icon={faBook} /> UWC Development: Capstone Project</h1>
            <div id={"capstone-project"} className={sectionClass}>
                <p>
                    As part of a collaborative effort with a group of five members, I played a dual role in our Capstone Project. Serving as the UI designer, I focused on creating intuitive and visually appealing interfaces. Simultaneously, I took on the role of the database architect, designing the project's database schema and ensuring efficient data management.
                </p>
                <p>
                    This experience allowed me to apply my theoretical knowledge to real-world scenarios, collaborate within a team, and gain practical insights into user interface design and database architecture.
                </p>
               
            </div>
        </section>
    );
}

export default CapstoneProject;