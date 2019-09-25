import React from 'react';
import './ScoreSlider.css';

const ScoreSlider = (props) => {
  function changeSlider(event){
    props.handleChange(event.target.value);
  
  }
  return(
    <>
      <div className="slidecontainer">
        <input type="range" min="1" max="500" value={props.scoreLimit} className="slider" id="myRange"
        onChange={changeSlider}/>
      </div>
    </>
  )
}

export default ScoreSlider;
