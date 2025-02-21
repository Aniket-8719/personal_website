import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";


const App = () => {
  return (
    <Layout>
      <Hero/>
      <Skills/>
    <section>
      <h2>Experince</h2>
      <Timeline/>

    </section>
     
    </Layout>
  );
};

export default App;
 