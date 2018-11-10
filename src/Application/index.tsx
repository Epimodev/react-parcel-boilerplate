import { createElement, Component } from 'react';
import { hot } from 'react-hot-loader';
import Page1 from 'src/pages/Page1';
import 'assets/fonts/fonts.css';
import './style.scss';

class Application extends Component {
  render() {
    return (
      <div>
        <Page1 />
      </div>
    );
  }
}

export default hot(module)(Application);
