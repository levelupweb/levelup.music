import React, { Component } from 'react';
import './styles.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.reveal = this.reveal.bind(this);

    this.state = {
      isRevealed: false,
    };
  }

  reveal() {
    this.setState(state => ({ isRevealed: !state.isRevealed }), () => {
      toggleBlurOnBody();
    });
  }

  render() {
    const { isRevealed } = this.state;

    const {
      render,
      options,
      children,
    } = this.props;

    const {
      content,
      title,
      description,
    } = options;

    return (
      <div>
        <div className={isRevealed ? 'modal open' : 'modal'}>
          <div className="modal-wrapper inverted">
            <div className="modal-closer">
              <button className="button ghost" onClick={this.reveal}>Закрыть</button>
            </div>
            <div className="modal-title">
              <div className="block">
                <h1>{title} <small>{description}</small></h1>
              </div>
            </div>
            <div className="modal-content">
              <div className="block">
                <p>{content}</p>
              </div>
              <div className="block">
                {render}
              </div>
            </div>
          </div>
        </div>
        <span>
          {React.cloneElement(children, {
            onClick: this.reveal,
          })}
        </span>
      </div>
    );
  }
}

const toggleBlurOnBody = () => {
  document
    .querySelector('body').classList
    .toggle('blocked');
};

export default Modal;
