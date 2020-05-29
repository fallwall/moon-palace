import React, { useState} from 'react';
import PrevNext from './PrevNext';

import data from '../port/portfolio.json';

import './WorkPage.css';

const testData = data.data[0];
const testSlides = testData.slides;

const WorkPage = () => {
  const [slide, setSlide] = useState(0);
  setTimeout(() => {
    slide < testSlides.length-1 ? setSlide(slide + 1) : setSlide(0);
  }, 10000);

  return (
    <div className="workpage">
      <div className="workpage-cover">
        <img src={testData.img} alt="current project cover" />
      </div>
      <div className="workpage-title">
        <h1>{testData.title}</h1>
      </div>
      {/* !!!!!!!below is project summary!!!!!!! */}
      <div className="workpage-summary">
        <div className="workpage-summary-tools">
          <div><ul>{testData.tools.map(t => <li>{t}</li>)}</ul></div>
          <div><p>{testData.cat}</p></div>
        </div>
        <div className="workpage-summary-desc">
          <div>
            {testData.desc}
          </div>
        </div>
      </div>
      {/* !!!!!!!above is project summary!!!!!!! */}
      <div className="workpage-imgs">
        {testData.imgs.map(i => <img src={i} alt="more about current project" />)}
      </div>
      <div className="workpage-content">
        {testData.content}
      </div>
      <div className="workpage-slides">
        <img src={testSlides[slide]} alt="on ratotation display" />
      </div>
      <PrevNext />
    </div>
  )
}

export default WorkPage;
