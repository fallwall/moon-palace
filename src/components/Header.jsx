import React, { useState } from 'react';

const coordinates = [
  { "city": "nyc", "coord": "40°39′N 73°56′W" },
  { "city": "yvr", "coord": "49°15′N 123°6′W" },
  { "city": "hgh", "coord": "30°16′N 120°9′E" }
]

const Header = () => {
  const [location, setLocation] = useState("40°39′N 73°56′W");
  setTimeout(() => {
    setLocation(coordinates[Math.floor(Math.random() * 3)].coord)
  }, 3000);
  return (
    <div className="header">
      <div className="header-left">
        Tibby Xu
      </div>
      <div className="header-right">
        - {location}
      </div>
    </div>
  )
}

export default Header;