import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './styles.scss';



const OtherProjects = () => {


    return (
        <section className="other-projects-page">
            <h1 className="section-heading l-t">Other Projects</h1>
            <div className="projects-grid">
                <div className="project-item">
                    <div className="inner-content">
                        <header>
                            <div className="top">
                                <div className="folder">
                                    <FontAwesomeIcon icon={faFolder} />
                                </div>
                                <div className="links">
                                    <a href="https://github.com/berserk-healer/weatherApp" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon d-t' /></a>
                                    <a href="https://weather-jsav1uojv-berserk-healer.vercel.app/" target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} className='icon d-t' /></a>
                                </div>
                            </div>
                            <h3 className="title d-t">Weather App</h3>
                            <div className="description d-t">
                                <p>Building a custom weather app with HTML/CSS/JavaScript and OpenWeather API</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="tech-list d-t">
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>OpenWeather API</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div className="project-item">
                    <div className="inner-content">
                        <header>
                            <div className="top">
                                <div className="folder">
                                    <FontAwesomeIcon icon={faFolder} />
                                </div>
                                <div className="links">
                                    <a href="https://github.com/berserk-healer/Calculator" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon d-t' /></a>
                                    <a href="https://calculator-i8jjyt0zx-berserk-healer.vercel.app/" target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} className='icon d-t' /></a>
                                </div>
                            </div>
                            <h3 className="title d-t">Calculator</h3>
                            <div className="description d-t">
                                <p>A simple Calculator built with JavaScript.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="tech-list d-t">
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div className="project-item">
                    <div className="inner-content">
                        <header>
                            <div className="top">
                                <div className="folder">
                                    <FontAwesomeIcon icon={faFolder} />
                                </div>
                                <div className="links">
                                    <a href="https://github.com/berserk-healer/react-restaurant-app/tree/main" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon d-t' /></a>
                                    <a href="https://berserk-healer.github.io/react-restaurant-app/" target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} className='icon d-t' /></a>
                                </div>
                            </div>
                            <h3 className="title d-t">Restaurant App</h3>
                            <div className="description d-t">
                                <p>Restaurant Website built with ReactJS.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="tech-list d-t">
                                <li>React</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div className="project-item">
                    <div className="inner-content">
                        <header>
                            <div className="top">
                                <div className="folder">
                                    <FontAwesomeIcon icon={faFolder} />
                                </div>
                                <div className="links">
                                    <a href="https://github.com/berserk-healer/todolist" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon d-t' /></a>
                                    
                                </div>
                            </div>
                            <h3 className="title d-t">Todo List</h3>
                            <div className="description d-t">
                                <p>Todo List App with NodeJS and EJS template views.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="tech-list d-t">
                                <li>Express</li>
                                <li>EJS</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div className="project-item">
                    <div className="inner-content">
                        <header>
                            <div className="top">
                                <div className="folder">
                                    <FontAwesomeIcon icon={faFolder} />
                                </div>
                                <div className="links">
                                    <a href="https://github.com/berserk-healer/alien_invasion" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon d-t' /></a>
                                    
                                </div>
                            </div>
                            <h3 className="title d-t">Alien Invasion</h3>
                            <div className="description d-t">
                                <p>Space Shooting game built with pygame.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="tech-list d-t">
                                <li>Python</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <div className="project-item">
                    <div className="inner-content">
                        <header>
                            <div className="top">
                                <div className="folder">
                                    <FontAwesomeIcon icon={faFolder} />
                                </div>
                                <div className="links">
                                    <a href="https://github.com/berserk-healer/ElysiaBot" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon d-t' /></a>
                                    
                                </div>
                            </div>
                            <h3 className="title d-t">Discord Bot</h3>
                            <div className="description d-t">
                                <p>A Bot that response to user messages built DiscordJS and OpenAIAPI.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="tech-list d-t">
                                <li>NodeJS</li>
                                <li>OpenAI API</li>
                            </ul>
                        </footer>
                    </div>
                </div>
                
            </div>
            <a href="https://github.com/berserk-healer?tab=repositories" target="_blank" className="more-button g-t hover btn-hover">More...</a>
        </section>
    )
}

export default OtherProjects;