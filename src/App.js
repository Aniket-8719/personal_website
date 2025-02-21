import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Education from "./Components/Education";


const App = () => {
  return (
    <Layout>
      <Hero/>
      <Education/>
      <Skills/>
      <section>
      <Timeline/>
    </section>
     
    </Layout>
  );
};

export default App;
 