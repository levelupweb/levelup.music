import React, { Component } from 'react';
import './styles.css';

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.makeUnactive = this.makeUnactive.bind(this);
    this.makeActive = this.makeActive.bind(this);
    this.handleFieldRef = this.handleFieldRef.bind(this);

    this.state = {
      isActive: false,
    };
  }

  handleFieldRef(e) {
    this.input = e;
  }

  makeActive() {
    this.setState({
      isActive: true,
    }, () => this.input.focus());
  }

  makeUnactive() {
    if (!this.input.value) {
      this.setState({
        isActive: false,
      });
    }
  }

  render() {
    const {
      isActive,
    } = this.state;

    const {
      placeholder,
      type,
      onInput,
      fieldName,
      hidden,
    } = this.props;

    if (!hidden) {
      switch (type) {
        case 'hidden':
          return null;

        case 'textarea':
          return (
            <div className="field">
              {!isActive &&
              <label onClick={this.makeActive}>
                {placeholder}
              </label>
							}
              <textarea
                className="field-textarea-element"
                onInput={({ target }) => onInput(target.value)}
                ref={this.handleFieldRef}
                onBlur={this.makeUnactive}
                onFocus={this.makeActive}
                name={fieldName}
                rows="4"
              />
            </div>
          );

        default:
          return (
            <div className={isActive ? 'field active' : 'field'}>
              <label onClick={this.makeActive}>
                {placeholder}
              </label>
              <input
                className="field-input-element"
                autoComplete="off"
                onInput={({ target }) => onInput(target.value)}
                ref={this.handleFieldRef}
                onBlur={this.makeUnactive}
                onFocus={this.makeActive}
                type={type || 'text'}
                name={fieldName}
              />
            </div>
          );
      }
    } else {
      return (
        <div className="field hidden">
          <input
            className="field-input-element"
            autoComplete="off"
            onInput={({ target }) => onInput(target.value)}
            className="hidden"
            ref={this.handleFieldRef}
            type="text"
            name={fieldName}
          />
        </div>
      );
    }
  }
}
