import React, { useState } from 'react';
import PrevNext from './PrevNext';

import data from '../port/portfolio.json';

import './WorkPage.css';


const WorkPage = (props) => {
  const [slide, setSlide] = useState(0);
  const testData = data.data[props.workItem - 1];
  const testSlides = testData.slides;
  const LENGTH = data.data.length;
  // 10
  
  setTimeout(() => {
    slide < testSlides.length - 1 ? setSlide(slide + 1) : setSlide(0);
  }, 10000);

  return (
    <div className="workpage">
      <div className="workpage-cover">
        {<img src={testData.img} alt="current project cover" />}
      </div>
      <div className="workpage-title">
        <h1>{testData.title}</h1>
      </div>
      {/* !!!!!!!below is project summary!!!!!!! */}
      <div className="workpage-summary">
        <div className="workpage-summary-tools">
          <div><ul>{testData.tools.map(t => <li key={t}>{t}</li>)}</ul></div>
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
        {testData.imgs && testData.imgs.map((i,a) => <img key={a} src={i} alt="more about current project" />)}
      </div>
      <div className="workpage-content">
        {testData.content && testData.content}
      </div>
      <div className="workpage-slides">
        {testSlides && <img src={testSlides[slide]} alt="on ratotation display" />}
      </div>
      <PrevNext
        workItem={props.workItem}
        prevName={props.workItem > 3 ? data.data[props.workItem - 2].title : data.data[LENGTH - 1].title}
        nextName={props.workItem < LENGTH ? data.data[props.workItem].title : data.data[0].title}
        changeWorkItem={props.changeWorkItem}
        length={LENGTH}
      />
    </div>
  )
}

export default WorkPage;
