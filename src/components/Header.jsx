import React, { useState } from 'react';

const coordinates = [
  { "city": "nyc", "coord": "40°39′N 73°56′W" },
  { "city": "yvr", "coord": "49°15′N 123°6′W" },
  { "city": "hgh", "coord": "30°16′N 120°9′E" }
]

const Header = () => {
  const [location, setLocation] = useState(0);
  setTimeout(() => {
    location < 2 ? setLocation(location + 1) : setLocation(0);
  }, 10000);
  return (
    <div className="header">
      <div className="header-left">
        Tibby Xu
      </div>
      <div className="header-right">
        - {coordinates[location].coord}
      </div>
    </div>
  )
}

export default Header;