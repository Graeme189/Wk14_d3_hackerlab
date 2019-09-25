import React from 'react';

const StoryDetail = ({story}) => {
  return (
    <>
      <h3><a href={story.url}>{story.title}</a></h3>
      <p>Score: {story.score} &#128293;</p>
    </>
  )
}

export default StoryDetail;
