import React from "react";
import "./about.css";

const About = props => {
	return (
		<div className="page-about page">
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						About This Boilerplate
					</h5>
					<p className="description">What's this?</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					An boilerplate for creating static web applicatios. Based on create-react-app. This boilerplate includes:
				</p>
			</div>
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Default CSS Theme
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							React
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							ES6
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Nice folder structure
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Npm scripts for your workflow
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Gulp
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							ESLint
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Start Editing this project with this page. If you want to become an contributor or read some instructions, follow these links:	
				</p>
			</div>
			<div className="block">
				<div className="button-group">
					<a href="https://github.com/kv9991/levelup.boilerplate.static" className="button">Github <i className="fa fa-github"></i></a>
					<button className="button disabled">Story Book (Soon) <i className="fa fa-book"></i></button>
				</div>	
			</div>
		</div>
	)
}

export default About;
