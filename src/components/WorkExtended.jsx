import React from 'react';

const WorkExtended = (props) => {
  const redirect = (ev) => { props.changeWorkItem(ev.target.dataset.id) };
  return (
    <div className="side-work-extended">
      <ul>
        <h2>Web App</h2>
        <li onClick={redirect} data-id="1">Life Is Elsewhere</li>
        <li onClick={redirect} data-id="2">Antipode Visualizer</li>
        <li onClick={redirect} data-id="3">Race Database</li>
      </ul>
      <ul>
        <h2>Illustartions</h2>
        <li onClick={redirect} data-id="4">Address Book</li>
        <li onClick={redirect} data-id="5">Lights & Music</li>
        <li onClick={redirect} data-id="6">Timeline</li>
      </ul>
      <ul>
        <h2>Misc</h2>
        <li onClick={redirect} data-id="7">White Elephant</li>
        <li onClick={redirect} data-id="8">Loaf Day</li>
        <li onClick={redirect} data-id="9">Refresh</li>
        <li onClick={redirect} data-id="10">Prom & Others</li>
      </ul>
    </div>
  )
}

export default WorkExtended;
