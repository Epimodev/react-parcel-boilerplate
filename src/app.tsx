import { createElement } from 'react';
import { render } from 'react-dom';
import Application from './Application';

const appContainer = document.getElementById('app');

if (appContainer) {
  render(<Application />, appContainer);
}
