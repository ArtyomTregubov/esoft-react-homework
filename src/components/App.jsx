import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Study from "./Study";

const App = () => {

    const skills = [

        {
            text: "HTML-вёрстка", 
         },

        {
            text: "JavaScript",
        },

        {
            text: "React",
        },

        {
            text: "Node.JS",
        },

    ]

    const study = [

        {
            text: "Docker", 
         },

        {
            text: "Kubernetes",
        },

        {
            text: "Next",
        },

        {
            text: "Nest",
        },

        {
            text: "Vite", 
         },

        {
            text: "Vue",
        },

        {
            text: "Zustand",
        },

        {
            text: "Express",
        },

        {
            text: "Python",
        },

        {
            text: "Go",
        },
        
    ]

  return (
    <div className="App">
    <Header/>
    <main>
        <Skills data={skills}/>
        <Study data={study}/>
    </main>
    <Footer/>
    </div>
    
  );
}

export default App;