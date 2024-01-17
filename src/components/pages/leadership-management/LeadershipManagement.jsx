import React from 'react';
import "../../styles/leadership-management/LeadershipManagement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const LeadershipManagement = () => {

    const sectionClass = "w-4/5 lg:w-3/5 text-justify leading-8";
    const titleClass = "w-4/5 lg:w-3/5 mt-12 mb-16 text-center text-3xl";

    return (
        <section className={"w-full flex flex-col justify-center items-center"}>
            <h1 className={titleClass}>
                <FontAwesomeIcon className={"pr-2"} icon={faCertificate} /> UWC Development: Leadership and Management</h1>
            <div id={"leadership-management"} className={sectionClass}>
                <p>
                    During my time at UWC, I actively participated in leadership and management roles. I served as a class representative, organizing and facilitating communication between students and faculty.
                </p>
                <p>
                    Additionally, I took part in extracurricular activities, such as leading group projects and coordinating team efforts. These experiences enhanced my organizational and leadership skills, preparing me for collaborative work environments.
                </p>
               
            </div>
        </section>
    );
}

export default LeadershipManagement;