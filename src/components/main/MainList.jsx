import React from 'react';
import Bio from './Bio';
import BioWork from './BioWork';

const MainList=(props)=> {
  return (
    <div className="main-list">
      <Bio />
      <BioWork
        changeToWorkPage={props.changeToWorkPage}
      />
    </div>
  )
}

export default MainList;
