import React from 'react';
import {withRouter} from "react-router-dom";
import '../styles/Footer.css';
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Theme} from "../../theme";

const Footer = () => {

    const iconClass = `fa-3x ${Theme.textPrimaryColor} ${Theme.textHoverPrimaryColor} transition ease-in-out duration-300`;

    const getCurrentYear = () => {
        let d = new Date();
        return d.getFullYear();
    }

    return (
        <section id={"footer"} className={"absolute bottom-0 w-full flex flex-col items-center justify-center"}>
            <div className={"w-3/5 md:w-2/5 flex justify-between py-4"} id={"networks-item"}>
                <a href={""}
                   target={"_blank"}
                   rel={"noopener noreferrer"}>
                    <FontAwesomeIcon className={iconClass} icon={faFacebook}/>
                </a>
                <a href={"https://www.linkedin.com/in/lubabalo-zenzile-bb2270208/"}
                   target={"_blank"}
                   rel={"noopener noreferrer"}>
                    <FontAwesomeIcon className={iconClass } icon={faLinkedin}/>
                </a>
                <a href={"https://www.github.com/Lubabalo-sira"}
                   target={"_blank"}
                   rel={"noopener noreferrer"}>
                    <FontAwesomeIcon className={iconClass} icon={faGithub}/>
                </a>
            </div>
            <div className={"py-2 px-8 text-xs text-gray-400"}>Copyright &copy; {getCurrentYear()} Lubabalo Zenzile. All Rights Reserved</div>
        </section>
    )
}

export default withRouter(Footer);