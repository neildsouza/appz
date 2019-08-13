import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
	<p className="CursorPointer">Yo!</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
