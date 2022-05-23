import React from 'react';
import Calculator from './components/Calculator';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.StrictMode>
        <Calculator />
      </React.StrictMode>
    );
  }
}

export default App;
