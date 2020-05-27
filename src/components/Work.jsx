import React from 'react';

const Work=(props)=> {
  return (
    <div className={props.isWorkExtended?"side-work-ex":"side-work"} onClick={props.changeWork}>
      <p><h2>Work</h2></p>
    </div>
  )
}

export default Work;