import React from "react";
import {blog, dalle} from '../assets/img'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const FeatureProjects = () => {

    return (
        <section id='projects' className="projects-page">
            <h2 className="section-heading l-t"><span className="g-t">03.</span>Some things I've built</h2>
            <div className="container">
                <div className="feature-project">
                    <div className="project-content">
                        <div>
                            <p className="project-overline g-t">Feature Project</p>
                            <h3 className="project-title"><a href="https://blog.bellcranel.click" className="l-t">Aincrad Blog</a></h3>
                            <div className="project-description d-t p-c">
                                <p>A Blog App Built with Django & SQLite database. Features: CustomUser Model, CRUD posts, Comment Section, Rich Text Field & Search bar</p>
                            </div>
                            <ul className="project-tech-list d-t">
                                <li>Django</li>
                                <li>SQLite</li>
                            </ul>
                            <div className="project-links">
                                <a href="https://github.com/berserk-healer/blog-app" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon l-t' /></a>
                                <a href="https://blog.bellcranel.click" target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} className='icon l-t ' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-image">
                        <img src={blog} alt="project-image" />
                    </div>
                </div>
                <div className="feature-project">
                    <div className="project-content">
                        <div>
                            <p className="project-overline g-t">Feature Project</p>
                            <h3 className="project-title"><a href="https://dalle-clone-six.vercel.app/" className="l-t">Dall-E Clone</a></h3>
                            <div className="project-description d-t p-c">
                                <p>MERN Stack Application for generating images powered by Dall-E, OpenAI API.</p>
                            </div>
                            <ul className="project-tech-list d-t">
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>NodeJS</li>
                            </ul>
                            <div className="project-links">
                                <a href="https://github.com/berserk-healer/dalle-clone/tree/main" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon l-t' /></a>
                                <a href="https://dalle-clone-six.vercel.app/" target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} className='icon l-t ' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-image">
                        <img src={dalle} alt="project-image" />
                    </div>
                </div>
            </div>
        </section>
    )
};


export default FeatureProjects;