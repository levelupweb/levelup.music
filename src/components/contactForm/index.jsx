import React from 'react';
import 'react-notifications/lib/notifications.css';
import PropTypes from 'prop-types';
import Field from '../field';
import sendemail from '../../services/mail';
import './styles.css';

const renderField = onUpdate => (field, i) => (
  <Field
    key={i}
    fieldName={field.fieldName}
    onInput={newValue => onUpdate(field.name, newValue)}
    placeholder={field.placeholder}
    name={field.name}
    type={field.type}
    hidden={field.hidden || false}
  />
);

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    const values = props.getDefaultValues();

    this.updateForm = this.updateForm.bind(this);
    this.submit = this.submit.bind(this);
    this.bindFormDefaults = this.bindFormDefaults.bind(this);
    this.renderFields = this.renderFields.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleFormRef = this.handleFormRef.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleValidationErrors = this.handleValidationErrors.bind(this);

    this.state = {
      message: { ...values },
      errors: [],
      error: null,
    };
  }

  componentDidMount() {
    this.bindFormDefaults();
  }

  handleFormRef(e) {
    this.form = e;
  }

  handleError(error) {
    if (error.response) {
      if (error.response.status === 422) {
        return this.handleValidationErrors(Object
          .values(error.response.data.errors)
          .map(err => err.msg));
      }
      return this.setState({ error: 'Сервер вернул непредвиденную ошибку. Попробуйте позже' });
    }
    return this.setState({ error: 'Не удалось соединиться с сервером' });
  }

  handleSuccess() {
    this.setState({ message: {} }, () => this.form.reset());
  }

  handleValidationErrors(errors) {
    this.setState({ errors });
  }

  bindFormDefaults() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      return false;
    });
  }

  updateForm(fieldName, value) {
    this.setState(state => ({
      message: {
        ...state.message,
        [fieldName]: value,
      },
    }));
  }

  submit() {
    this.setState({
      error: null,
      errors: [],
    }, () => sendemail(this.state.message, this.props.url)
      .then(this.handleSuccess)
      .catch(this.handleError));
  }

  renderErrors() {
    const { errors, error } = this.state;

    if (error) {
      return (
        <div style={{ paddingLeft: '20px' }} className="contact-form-error">
          {error}
        </div>
      );
    }

    if (errors.length > 0) {
      return (
        <ul className="contact-form-errors">
          {errors.map(err => (
            <li className="contact-form-errors-single" key={err}>
              {err}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  }

  renderFields() {
    const { fields } = this.props;

    return fields.map(renderField(this.updateForm));
  }

  renderSubmit() {
    return (
      <button
        className="button ghost"
        onClick={this.submit}
      >
        Отправить
      </button>
    );
  }

  render() {
    const { isFluid } = this.props;

    return (
      <form
        className={isFluid && 'fluid'}
        ref={this.handleFormRef}
      >
        {this.renderErrors()}
        {this.renderFields()}
        {this.renderSubmit()}
      </form>
    );
  }
}

ContactForm.defaultProps = {
  isFluid: false,
  fields: [],
  getDefaultValues: () => ({}),
};

ContactForm.propTypes = {
  isFluid: PropTypes.bool,
  getDefaultValues: PropTypes.func,
  url: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  })),
};

export default ContactForm;
