import React from 'react';

const WorkExtended = (props) => {
  const redirect = (ev) => { props.changeWorkItem(ev.target.dataset.id) };
  return (
    <div className="side-work-extended">
      <ul>
        <h2>Web App</h2>
        <li onClick={redirect} data-id="1" className="clickable">Life Is Elsewhere</li>
        <li onClick={redirect} data-id="2" className="clickable">Antipode Visualizer</li>
        <li onClick={redirect} data-id="3" className="clickable">Race Database</li>
      </ul>
      <ul>
        <h2>Illustartions</h2>
        <li onClick={redirect} data-id="4" className="clickable">Address Book</li>
        <li onClick={redirect} data-id="5" className="clickable">Lights & Music</li>
        <li onClick={redirect} data-id="6" className="clickable">Timeline</li>
      </ul>
      <ul>
        <h2>Misc</h2>
        <li onClick={redirect} data-id="7" className="clickable">White Elephant</li>
        <li onClick={redirect} data-id="8" className="clickable">Loaf Day</li>
        <li onClick={redirect} data-id="9" className="clickable">Refresh</li>
        <li onClick={redirect} data-id="10" className="clickable">Prom & Others</li>
      </ul>
    </div>
  )
}

export default WorkExtended;
