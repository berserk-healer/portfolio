import React from "react";
import './styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {

    return (
        <div className="socials">
            <ul>
                <li><a href="https://github.com/berserk-healer" target='_blank'><FontAwesomeIcon className="l-t hover" icon={faGithub} /></a></li>
                <li><a href="https://www.facebook.com/thanhlieu9620/" target='_blank'><FontAwesomeIcon className="l-t hover" icon={faFacebook} /></a></li>
            </ul>
        </div>
    )
};

export default Socials;