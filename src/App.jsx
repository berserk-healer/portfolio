import React from "react";
import {Navbar, Socials, Home, About, FeatureProjects, OtherProjects, Contact, Footer} from './components'



const App = () => {

    
    return (
        <div className="App">
            <Navbar />
            <Socials />
            <Home />
            <About />
            <FeatureProjects />
            <OtherProjects />
            <Contact />
            <Footer />
        </div>
    )
};

export default App;