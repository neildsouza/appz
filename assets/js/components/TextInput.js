import React from 'react';
import ReactDOM from 'react-dom';
import './TextInput.css';

export default class TextInput extends React.Component {
  render() {
    return (
      <div className="TextInput">
	<input
	  type="text" />
      </div>
    );
  }
}
