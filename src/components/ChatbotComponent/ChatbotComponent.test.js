import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from './ChatBot';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatBot />, div);
  ReactDOM.unmountComponentAtNode(div);
});