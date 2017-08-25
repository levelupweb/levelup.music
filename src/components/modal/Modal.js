import React, { Component } from 'react';
import Field from '../field/Field.js'
import axios from 'axios'
import './modal.css'

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRevealed: false
		}
	}
	reveal = () => {
		this.setState({
			isRevealed: !this.state.isRevealed
		})
		toggleBlurOnBody()
	}
	render() {
		const { isRevealed, message } = this.state;
		const { render } = this.props;
		const { title, description, content } = this.props.options;
		return (
			<div>
				<div className={isRevealed ? 'Modal open' : 'Modal'}>
					<div className="Modal-wrapper inverted">
						<div className="Modal-closer">
							<button className="button ghost" onClick={this.reveal}>Закрыть</button>
						</div>
						<div className="Modal-title">
							<div className="block">
								<h1>{title} <small>{description}</small></h1>
							</div>
						</div>
						<div className="Modal-content">
							<div className="block">
								<p>{content}</p>
							</div>
							<div className="block">
								<div>{render}</div>
							</div>
						</div>
					</div>
				</div>
				<span>{React.cloneElement(this.props.children, { 
					onClick: this.reveal
				})}</span>
			</div>
		);
	}
}


function toggleBlurOnBody() {
	document.querySelector('body').classList.toggle('blocked')
}

export default Modal