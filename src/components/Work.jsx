import React from 'react';

const Work=(props)=> {
  return (
    <div className={props.isWorkExtended?"side-work-ex":"side-work"} onClick={props.changeWork}>
      <p>Work</p>
    </div>
  )
}

export default Work;