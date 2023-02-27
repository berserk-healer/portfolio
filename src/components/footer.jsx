import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

    return (
        <section className="footer-page">
            <div className="social-links">
                <a href="https://github.com/berserk-healer" target='_blank'><FontAwesomeIcon className="l-t hover" icon={faGithub} /></a>
                <a href="https://www.facebook.com/thanhlieu9620/" target='_blank'><FontAwesomeIcon className="l-t hover" icon={faFacebook} /></a>
            </div>
            <div className="footer-text">
                <a href="https://github.com/berserk-healer/portfolio" target="_blank" className="d-t">Built by Leo Hoang with ❤</a>
            </div>
        </section>
    )
};

export default Footer;