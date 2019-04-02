import React from 'react';
import VideoItem from './VideoItem';

//const VideoList = props => {
const VideoList = ({ videos, onVideoSelect }) => {
  //console.log(props.videos.length);
  console.log(videos.length);
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
  // return <div>{renderedList}</div>
};

export default VideoList;
