import React from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import Carousel from "./components/Carousel";
import Project from './components/Project';
import projects from "./projects.json";
import Title from "./components/Title";
import AboutContact from "./components/AboutContact";


class App extends React.Component {

  render() {
    return (
      
      <div className="App">
        <Navbar />
        <Wrapper>
          <section id="aboutme"></section>
          <Title align="center">Emily Lallier</Title>
          <hr></hr>
        <section id="contact"></section>
          <AboutContact />
          <section id="portfolio"></section>
          <Grid item xs={12} style={{marginBottom: "40px"}} />  
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
