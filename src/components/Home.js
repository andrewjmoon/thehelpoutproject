import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="App">
      <h1>The Helpout Project Home Page</h1>
      <Link className="Link" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="Link" to="/helpout">
        <h2>Helpout</h2>
      </Link>
      <Link className="Link" to="/useful-steps">
        <h2>Useful tips/info</h2>
      </Link>
    </div>
  );
};
