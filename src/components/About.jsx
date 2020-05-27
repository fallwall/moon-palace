import React from 'react';

const About=(props)=> {
  return (
    <div className={props.isAboutExtended?"side-about-ex":"side-about"} onClick={props.changeAbout}>
      <p><h2>About</h2></p>
    </div>
  )
}

export default About;