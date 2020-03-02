import React from 'react';
import Page1 from 'src/pages/Page1';
import 'src/styleUtils/fonts.css';
import './style.scss';

function Application(): React.ReactElement {
  return (
    <div>
      <Page1 />
    </div>
  );
}

export default Application;
