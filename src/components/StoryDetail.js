import React from 'react';

const StoryDetail = ({story}) => {
    return (
    <h3><a href={story.url}>{story.title}</a></h3>
    )
}

export default StoryDetail;
