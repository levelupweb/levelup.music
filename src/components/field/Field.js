import React, { Component } from 'react';
import './field.css'

export default class Field extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
	}
	makeActive() {
		this.setState({
			isActive: true
		})
		this.input.focus()
	}
	makeUnactive() {
		if(!this.input.value) {
			this.setState({
				isActive: false
			})
		}
	}
	render() {
		const { isActive } = this.state;
		const { placeholder, name, type, onInput, fieldName, hidden } = this.props;
		if(!hidden) {
			switch(type) {
				case 'hidden':
				return null;
				case 'textarea':
				return (<div className="field">
					{!isActive &&
						<label onClick={() => {this.makeActive()}}>{placeholder}</label>
					}
					<textarea 
						onInput={(e) => {onInput(name, fieldName, e.target.value)}}
						ref={(e) => {this.input = e}} 
						onBlur={() => {this.makeUnactive()}} 
						onFocus={() => {this.makeActive()}} 
						name={name} 
						rows="4"
					></textarea>
				</div>)
				default:
				return (<div className={isActive ? 'field active' : 'field'}>
					<label onClick={() => {this.makeActive()}} >{placeholder}</label>
					<input 
						onInput={(e) => {onInput(name, fieldName, e.target.value)}}
						ref={(e) => {this.input = e}} 
						onBlur={() => {this.makeUnactive()}} 
						onFocus={() => {this.makeActive()}}  
						type={type || 'text'} 
						name={name} 
					/>
				</div>)
			}
		} else {
			return <div className="field hidden">
				<input 
					onInput={(e) => {onInput(name, fieldName, e.target.value)}}
					className="hidden"
					ref={(e) => {this.input = e}}   
					type="text"
					name={name} 
				/>
			</div>
		}
	}
}
