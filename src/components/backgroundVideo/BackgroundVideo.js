import React from 'react';
import "./backgroundVideo.css";


export default class BackgroundVideo extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
		require("./api.js")
  }

  render() {
    return (
      <div className="tv">
		  	<div className="screen mute" id="tv"></div>
			</div>
    );
  }
}
