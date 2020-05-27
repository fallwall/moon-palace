import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Work from './components/Work';
import About from './components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default App;
