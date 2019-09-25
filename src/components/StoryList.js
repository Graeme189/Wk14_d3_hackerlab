import React from 'react';
import StoryDetail from './StoryDetail.js';

const StoryList = (props) => {
  const stories = props.stories.map((story, index) => {
    return(
      <div key={index}>
        <StoryDetail story={story}/>
      </div>
    )
  })
  return(
    <div>
    {stories}
    </div>
  )

}

export default StoryList;
