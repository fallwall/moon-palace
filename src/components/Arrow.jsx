import React from 'react';
const toTop = () => {
  window.scrollTo(0, 0);
}

const Arrow = (props) => {
  return (
    <div className={props.arrowVisible?"arrow-container":"arrow-container-hidden"} onClick={toTop}>
      <svg class="arrow" x="0px" y="0px" width="106px" height="40px" viewBox="0 0 53 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" /></svg>
    </div>
  )
}

export default Arrow;
