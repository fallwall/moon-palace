import React from 'react';

const PrevNext = (props) => {
  return (
    <div className="workpage-prevnext">
      <div className="prev" onClick={() => props.changeWorkItem(props.workItem - 1)}>
        <div><p>Previous</p></div>
        <div><h1>Name of prev</h1></div>
      </div>
      <div className="next" onClick={() => props.changeWorkItem(props.workItem + 1)}>
        <div><h1>Name of next</h1></div>
        <div><p>Next</p></div>
      </div>
    </div>
  )
}

export default PrevNext;