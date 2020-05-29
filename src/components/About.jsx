import React from 'react';

const About=(props)=> {
  return (
    <div className={props.isAboutExtended?"side-about-ex":"side-about"} onClick={props.changeAbout}>
      <h2>About</h2>
    </div>
  )
}

export default About;