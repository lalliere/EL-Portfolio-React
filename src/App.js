import React from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Carousel from "./components/Carousel";
import Project from './components/Project';
import projects from "./projects.json";
import Title from "./components/Title";
import Contact from "./components/Contact";


class App extends React.Component {

  render() {
    return (
      
      <div className="App">
        <Navbar />
        <Wrapper>
        <section id="contact"></section>
          <Title align="center">Emily Lallier</Title>
          <hr></hr>
          <Contact />
          <section id="aboutme"></section>
          <Grid item xs={12} style={{marginBottom: "40px"}} />
          <AboutMe />
          <section id="portfolio"></section>
          <Title>My Projects</Title>
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
          <section id="languages"></section>
          <Carousel />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
