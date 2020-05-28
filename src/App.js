import React from 'react';
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
