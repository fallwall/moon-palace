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
          <img src={e.img} className={e.id === hover ? "hidden":""}/>
          <div className={e.id === hover ? "centered":"hidden"}>
            {e.title}
          </div>
        </div>)}
    </div>
  )
}

export default BioWork;