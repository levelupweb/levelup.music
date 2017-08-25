import React, { Component } from 'react';
import './footer.css'
import Field from '../field/Field.js';
import Modal from '../modal/Modal.js';

const subscribeModalConfiguration = {
	title: 'Извините, в данный момент рассылка недоступна',
	description: 'Но скоро всё обязательно вернётся! :)',
}


export default class Footer extends Component {

	render() {
			console.log(this.props.page)
		if(!this.props.page) {
			return (
				<div className="Footer">
					<div className="Footer-Wrapper">
						<p className="spacing">Создано с <img alt="Любовь" src="img/like.png" width="16px" /></p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="footer page">
					<div className="block">
						<div className="left">
							Создано в <a href="http://web.levelupworlds.com">Levelup Web</a> с любовью
						</div>
						<div className="right">
						</div>
					</div>
				</div>
			)
		}
	}
}

