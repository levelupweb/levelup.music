import React from 'react';
import Video from './api';
import "./styles.css";

const getWidth = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

export default class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (getWidth() > 700) {
      this.loadVideo();
    }
  }

  loadVideo() {
    const video = new Video({
      'videoId': 'xvU3nEK_0mg',
      'startSeconds': 18,
      'endSeconds': 60,
      'suggestedQuality': 'large',
    }, "tv", ".tv .screen");
    video.init();
  }

  render() {
    return (
      <div className="tv">
		  	<div className="screen mute" id="tv"></div>
			</div>
    );
  }
}
