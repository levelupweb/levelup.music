import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Project extends React.Component {
  render() {
  	const { id, title, description, image } = this.props.project;
    return (
      <div className="project">
      	<div className="project-image">
      		<img src={image} alt={title} width="100%" />
      		<div className="image-border"></div>
      		<div className="image-action inverted">
      			<button className="button">Перейти к кейсу</button>
      		</div>
      	</div>
      	<div className="project-title">
      		<h5 className="super title">{title}</h5>
      		<div className="description">{description}</div>
      	</div>
      </div>
    );
  }
}


Project.propTypes = {
	project: PropTypes.object
}

export default Project;
