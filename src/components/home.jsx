import React from "react";

const Home = () => {

    return (
        <section id="home" className="home-page">
            <div>
                <h1 className="g-t">Hello! My name is, </h1>
            </div>
            <div>
                <h2 className="l-t">Leo Hoang,</h2>
            </div>
            <div>
                <h2 className="d-t"> and I am a web developer.</h2>
            </div>
            <div>
                <a href='#contact' className="g-t hover btn-hover">Contact me!</a>
            </div>
        </section>
    )
};

export default Home;