import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Work from './components/Work';
import WorkExtended from './components/WorkExtended';
import About from './components/About';
import AboutExtended from './components/AboutExtended';
import Arrow from './components/Arrow';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prevScrollpos: window.pageYOffset,
      arrowVisible: false,
      isWorkExtended: false,
      isAboutExtended: false,
      isMainPage: true,
      isWorkPage: false,
      workItem: null
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      arrowVisible: visible
    });
  };

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

  changeToWorkPage = (ev) => {
    this.setState({
      isMainPage: false,
      isWorkPage: true,
      workItem: parseInt(ev)
    })
  }

  changeToMainPage = (ev) => {
    this.setState({
      isMainPage: true,
      isWorkPage: false,
      workItem: null
    })
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App" >
        <Header
          changeToMainPage={this.changeToMainPage}
        />
        <Main
          isMainPage={this.state.isMainPage}
          isWorkPage={this.state.isWorkPage}
          changeToWorkPage={this.changeToWorkPage}
          workItem={this.state.workItem}
        />
        <Work
          isWorkExtended={this.state.isWorkExtended}
          changeWork={this.changeWork} />
        {this.state.isWorkExtended && <WorkExtended />}
        <About
          isAboutExtended={this.state.isAboutExtended}
          changeAbout={this.changeAbout} />
        {this.state.isAboutExtended && <AboutExtended />}
        <Footer />
        <Arrow
          arrowVisible={this.state.arrowVisible}
        />
      </div>
    );
  }
}

export default App;
