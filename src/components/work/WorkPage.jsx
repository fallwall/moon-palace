import React from 'react';
import PrevNext from './PrevNext';

import data from '../port/portfolio.json';

import './WorkPage.css';

const testData = data.data[0];

const WorkPage = () => {
  return (
    <div className="work-page">
      <div className="work-page-cover">
        <img src={testData.img} alt="current project cover" />
      </div>
      <PrevNext />
    </div>
  )
}

export default WorkPage;
