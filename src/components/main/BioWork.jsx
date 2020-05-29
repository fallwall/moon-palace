import React, { useState } from 'react';

import data from '../port/portfolio.json';

const BioWork = () => {
  const [hover, setHover] = useState(null);
  return (
    <div className="bio-work">
      {data.data.map(e =>
        <div
          key={e.id}
          onMouseOver={()=>setHover(e.id)}
          className="bio-work-each">
          <img src={e.img} className={e.id === hover ? "hidden":""} alt="redirect to project page"/>
          <div className={e.id === hover ? "centered":"hidden"}>
            <h1>{e.title}</h1>
          </div>
        </div>)}
    </div>
  )
}

export default BioWork;