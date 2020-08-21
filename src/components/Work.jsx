import React from 'react';

const Work = (props) => {
  return (
    <div className={props.isWorkExtended ? "side-work-ex" : "side-work"} onClick={props.changeWork}>
      <h2 className="clickable">Work</h2>
    </div>
  )
}

export default Work;