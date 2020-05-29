import React from 'react';

const Work=(props)=> {
  return (
    <div className={props.isWorkExtended?"side-work-ex":"side-work"} onClick={props.changeWork}>
      <h2>Work</h2>
    </div>
  )
}

export default Work;