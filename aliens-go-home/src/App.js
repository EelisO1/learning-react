import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

function App({ message }) {
  return (
    <div className="App">
      <Canvas />
    </div>
  );
}
//<h1>{message}</h1>
App.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;
