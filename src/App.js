import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Carousel from "./components/Carousel";
import Project from './components/Project';
import projects from "./projects.json";
import Routes from './components/Routes';
import Grid from '@material-ui/core/Grid';



class App extends React.Component {

  render() {
    return (
      
      <div className="App">
        <Navbar />
        <Routes />
        <Wrapper>
          <AboutMe />
          <hr></hr>
          <Grid container spacing={10}>
              {projects.map(project => (
                <Grid item spacing={3} >
                  <Project 
                    img={project.img}
                    alt={project.imgAlt}
                    title={project.title}
                    description={project.description}
                    deployed={project.deployed}
                    github={project.github}              
                  />
                </Grid>
              ))}
              <Grid item xs={12} />
          </Grid>
          <Carousel />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
