import React from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import Project from './components/Project';
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import projects from "./projects.json";

class App extends React.Component {

  render() {
    return (
      
      <div className="App">
        <Navbar />
        <Wrapper>
          <section id="about"></section>
          <Title align="center">Emily Lallier</Title>
          <hr></hr>
          <About />
          <section id="contact"></section>
          <Contact />
          <section id="portfolio"></section>
          <Grid item xs={12} style={{marginBottom: "40px"}} />  
          <Title>Portfolio</Title>
          <hr></hr>
          <Grid container justify="center" alignItems="stretch" spacing={10}> 
              {projects.map(project => (
                <Grid item>
                  <Project 
                    img={project.img}
                    imgAlt={project.imgAlt}
                    title={project.title}
                    description={project.description}
                    deployed={project.deployed}
                    github={project.github}              
                  />
                </Grid>
              ))}
              <Grid item xs={12} />
          </Grid>
          <section id="skills"></section>
          <Skills />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
