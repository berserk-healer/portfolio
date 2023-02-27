import React from "react";

const About = () => {

    return (
        <section className="about-page" id="about">
            <h2 className="section-heading l-t"><span className="g-t">02.</span>About Me</h2>
            <div className="container">
                <div>
                    <p className="d-t">I'm a very ambitious developer looking for an entry role in IT company, with the oppotunity to work with the lattest technologies on challenging and diverse project.</p>
                    <p className="d-t">I'm a hard-working, eager to learn new things kind of guy. And I'm willing to face challenges to improve myself.</p>
                    <p className="d-t">If I need to define myself in one sentence that would be an optimistic, a work enthusiast,a book lover and a tech-obsessed!</p>
                    <p className="d-t">Here are a few technologies I've been working with recently: </p>
                </div>
                <ul className="skills-list">
                    <li className="d-t">JavaScript (ES6+)</li>
                    <li className="d-t">React</li>
                    <li className="d-t">Node.js (Express)</li>
                    <li className="d-t">Django</li>
                    <li className="d-t">Databases: SQLite/MongoDB</li>
                    <li className="d-t">HTML/CSS</li>
                </ul>
            </div>
        </section>
    )
};

export default About;