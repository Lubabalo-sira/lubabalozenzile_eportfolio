import React from 'react';
import '../styles/Home.css';
import {Link} from "react-router-dom";
import {Theme} from "../../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import resume_1 from "../../assets/resume_1.pdf";
import {
    faUser

} from "@fortawesome/free-solid-svg-icons";
import {
    faFolderOpen
} from "@fortawesome/free-regular-svg-icons";
import uwclogo from "../../assets/uwclogo.png";
import pic from "../../assets/pic.webp";


const Home = () => {
    return (
        <section id={"home-page"} className={"mb-16 w-full flex justify-center"}>
            <div className={"w-4/5 lg:w-3/5 mt-16 lg:mt-32 flex flex-col lg:flex-row justify-between items-start"}>
               <div className={"flex flex-col items-left"}>
                    <h1 id={"home-title"}>
                        <span className={`${Theme.textPrimaryColor} text-3xl xl:text-5xl md:leading-normal text-left`}>
                        Hi there ! I'm Lubabalo Zenzile, a Computer Science graduate
                        </span>
                    </h1>
                   <h3 id={"home-subtitle"} className={"mt-8 mb-4"}>
                       <span className={`${Theme.textSoftPrimaryColor} text-xl text-left`}>
                           Currently pursuing my Honours Degree in Computer Science at the University of the Western Cape
                       </span>
                   </h3>
                   <div className={"mt-16 flex flex-col sm:flex-row"}>
                       <Link id={"aboutme-button"}
                           className={`slide-button mb-4 sm:mb-0 sm:mr-2 border-2 border-[#333] rounded-md p-3 w-min whitespace-nowrap hover:no-underline ${Theme.textPrimaryColor}`}
                           to={"/lubabalozenzile_eportfolio/aboutme"}>
                           <FontAwesomeIcon className={"pr-3"} icon={faUser}/>More about me
                       </Link>
                       <Link id={"projects-button"}
                            className={`slide-button sm:ml-2 rounded-md p-3 w-min whitespace-nowrap hover:no-underline text-white`}
                            to={"/lubabalozenzile_eportfolio/personalprojects"}>
                            Browse my projects<FontAwesomeIcon className={"pl-3"} icon={faFolderOpen} />
                       </Link>
                   </div>
                   <div className={"my-16 flex flex-col md:flex-row items-center"}>
                       <img
                           className={"hidden lg:block md:w-1/3 w-4/5 md:mr-4"}
                           src={uwclogo}
                           alt={""}/>
                       <h2
                           className={`lg:ml-4 text-lg xl:text-2xl md:leading-normal text-center lg:text-left ${Theme.textPrimaryColor}`}>
                           Welcome to my eportfolio! If you don't find the specific information you're looking for, feel free to contact me. I'm here to help and excited to connect with you!
                       </h2>
                   </div>
               </div>
                <div className={"w-max h-max flex flex-col items-center"}>
                    <img
                        className={"w-60 h-60 max-w-none hidden lg:flex rounded-full"}
                        src={pic}
                        alt={""}/>
                    <a id={"inscription-form-button"}
                       className={`py-4 text-sm ${Theme.textSoftPrimaryColor} font-medium hover:underline`}
                       href={resume_1}
                       target="_blank"
                       rel="noreferrer" download>
                        Download my resume
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Home;