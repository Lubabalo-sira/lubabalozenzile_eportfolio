import React from 'react';
import '../styles/ProfessionalDevelopment.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const ProfessionalDevelopment = () => {

    const sectionClass = "w-4/5 lg:w-3/5 text-justify leading-8";
    const titleClass = "w-4/5 lg:w-3/5 mt-12 mb-16 text-center text-3xl";

    return (
        <section className={"w-full flex flex-col justify-center items-center"}>
            <h1 className={titleClass}>
                <FontAwesomeIcon className={"pr-2"} icon={faBriefcase} /> UWC Development: Professional Development</h1>
            <div id={"professional-development"} className={sectionClass}>
                <p>
                    Alongside my studies, I engaged in freelance projects, providing web development services for various clients. I also offered assistance to fellow students, contributing to their projects and helping them overcome technical challenges.
                </p>
                <p>
                    This hands-on experience not only honed my technical skills but also fostered a collaborative spirit. I enjoy creating simple yet effective websites that meet the unique needs of clients and bring their ideas to life.
                </p>
                
            </div>
        </section>
    );
}

export default ProfessionalDevelopment;