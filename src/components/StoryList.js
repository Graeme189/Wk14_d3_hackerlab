import React, {Component} from 'react';
import StoryDetail from './StoryDetail.js';

const StoryList = (props) => {
  const stories = props.stories.map((story, index) => {
    return(
        <StoryDetail key={index} title={story.title}/>
    )
  })
  return(
    <div>
    {stories}
    </div>
  )

}

export default StoryList;
