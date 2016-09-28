import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';

import App from '../components/app/app';

/**
 * Renders the application on the client-side
 */
{
  var model = JSON.parse(document.getElementById('model').innerHTML);
  render(<BrowserRouter><App model={model} /></BrowserRouter>, document.getElementById('root'))
}