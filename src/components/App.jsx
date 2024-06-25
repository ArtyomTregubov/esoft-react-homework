import React from "react";
import { v4 as uuidv4 } from "uuid";
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

    
    const [firstData, setFirstData] = React.useState([

        {
            text: "Docker", 
            level: 55,
            id: uuidv4(),
         },

        {
            text: "Kubernetes",
            level: 30,
            id: uuidv4(),
        },

        {
            text: "Next",
            level: 70,
            id: uuidv4(),
        },

        {
            text: "Nest",
            level: 28,
            id: uuidv4(),
        },

        {
            text: "Vite", 
            level: 62,
            id: uuidv4(),
         },

        {
            text: "Vue",
            level: 10,
            id: uuidv4(),
        },

        {
            text: "Zustand",
            level: 51,
            id: uuidv4(),
        },

        {
            text: "Express",
            level: 18,
            id: uuidv4(),
        },

        {
            text: "Python",
            level: 61,
            id: uuidv4(),
        },

        {
            text: "Go",
            level: 49,
            id: uuidv4(),
        },
        
    ])

    

   

  return (
    <div className="App">
    <Header/>
    <main>
        <Skills data={skills}/>
        <Study 
        firstData={firstData}
        />
    </main>
    <Footer/>
    </div>
    
  );
}

export default App;