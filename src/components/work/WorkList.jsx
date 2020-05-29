import React from 'react';
import PrevNext from './PrevNext';

import data from '../port/portfolio.json';

const testData = data.data[0];

const WorkList = () => {
  return (
    <div className="work-list">
      <div className="work-list-cover">
        <img src={testData.img} alt="current project cover" />
      </div>
      <PrevNext />
    </div>
  )
}

export default WorkList;
