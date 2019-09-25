import React, {Component} from 'react';
import StoryDetail from './StoryDetail.js';

const StoryList = (props) => {
  const stories = props.stories.map((story, index) => {
    return(
        <StoryDetail key={index} story={story}/>
    )
  })
  return(
    <div>
    {stories}
    </div>
  )

}

export default StoryList;
