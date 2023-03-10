import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import './styles.scss';
import {icon} from '../assets/img';
import {resume} from '../assets/others';


const Navbar = () => {

    const [isNavbarExtended, setIsNavbarExtended] = useState(false)
    const handleClick = () => {
        isNavbarExtended? setIsNavbarExtended(false) : setIsNavbarExtended(true)
    }

    return (
        <div className="navbar p-c">
            <div className="navbar-wrapper">
                <div className="brand">
                    <a href="#"><img src={icon} /></a>
                </div>
                <div className="bars">
                    <FontAwesomeIcon icon={faBars} onClick={handleClick} className="bar-icon g-t" />
                    <div className={isNavbarExtended? 'navExtended' : 'navHidden'}>
                        <FontAwesomeIcon icon={faXmark} className='xmark g-t' onClick={handleClick} />
                        <div>
                            <a href="#home" className="l-t hover" onClick={handleClick}><span className="g-t">01.</span>Home</a>
                            <a href="#about" className="l-t hover" onClick={handleClick}><span className="g-t">02.</span>About</a>
                            <a href="#projects" className="l-t hover" onClick={handleClick}><span className="g-t">03.</span>Projects</a>
                            <a href="#contact" className="l-t hover" onClick={handleClick}><span className="g-t">04.</span>Contact</a>
                            <a href={resume} className="g-t" style={{textDecoration: "none"}}>Resume</a>
                        </div>
                    </div>
                </div>
                
                <nav className="nav">
                    <a href="#home" className="l-t hover"><span className="g-t">01.</span>Home</a>
                    <a href="#about" className="l-t hover"><span className="g-t">02.</span>About</a>
                    <a href="#projects" className="l-t hover"><span className="g-t">03.</span>Projects</a>
                    <a href="#contact" className="l-t hover"><span className="g-t">04.</span>Contact</a>
                </nav>
                <a href={resume} style={{textDecoration: "none"}} className="g-t btn-hover resume">Resume</a>
            </div> 
        </div>
    )
}

export default Navbar;