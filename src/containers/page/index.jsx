import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../components/footer';
import Header from '../../components/header';
import './styles.css';

const RoutePageContainer = ({ component }) => (
  <Route
    render={() => (
      <div className="page-container">
        <NotificationContainer />
        <div className="site-content">
          <div className="container text blocks inner-content">
            <Header />
            {React.createElement(component)}
            <Footer page />
          </div>
        </div>
      </div>
		)}
  />
);

RoutePageContainer.propTypes = {
  component: PropTypes.func.isRequired,
};

export default RoutePageContainer;
