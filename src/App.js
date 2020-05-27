import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Work from './components/Work';
import WorkExtended from './components/WorkExtended';
import About from './components/About';
import AboutExtended from './components/AboutExtended';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isWorkExtended: false,
      isAboutExtended: false,
      isMainPage: true,
      isWorkPage: false
    }
  }

  changeWork = () => {
    this.setState(prevState => ({
      isWorkExtended: !prevState.isWorkExtended
    }))
  }

  changeAbout = () => {
    this.setState(prevState => ({
      isAboutExtended: !prevState.isAboutExtended
    }))
  }

  render() {
    return (
      <div className="App" >
        <Header />
        {this.state.isMainPage && <Main />}
        <Work
          isWorkExtended={this.state.isWorkExtended}
          changeWork={this.changeWork} />
        {this.state.isWorkExtended && <WorkExtended />}
        <About
          isAboutExtended={this.state.isAboutExtended}
          changeAbout={this.changeAbout} />
        {this.state.isAboutExtended && <AboutExtended />}
        <Footer />
      </div>
    );
  }
}

export default App;
