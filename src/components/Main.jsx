import React from 'react';
import MainList from './main/MainList';
import WorkPage from './work/WorkPage';

const Main = (props) => {
  return (
    <div className="main">
      {props.isMainPage && <MainList
        changeToWorkPage={props.changeToWorkPage}
      />}
      {props.isWorkPage &&
        <WorkPage
          changeToWorkPage={props.changeToWorkPage}
          workItem={props.workItem}
        />}
    </div>
  )
}

export default Main;
