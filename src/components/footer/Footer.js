import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {
	render() {
		if(!this.props.page) {
			return (
				<div className="footer">
					<div className="footer-wrapper">
						<p className="spacing">Created with love</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="block">
					<div className="footer onPage">
						<div className="footer-wrapper">
							<div className="left">
								Created in <a href="http://web.levelupworlds.com">Levelup Web</a> with love
							</div>
							<div className="right">
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

