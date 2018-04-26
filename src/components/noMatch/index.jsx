import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => (
  <div className="Container no-match fullpage">
    <h1 className="title super">Oops..</h1>
    <p className="primary">404. Возможно, этой страницы больше не существует или никогда не существовала</p>
    <Link to="/"><button className="button">На главную</button></Link>
  </div>
);
