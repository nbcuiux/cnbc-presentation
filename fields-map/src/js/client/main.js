import React from 'react'
import { render } from 'react-dom'
import $ from "jquery"

import App from '../components/App'
import init from '../vendor/jquery.elevatezoom.js'

console.log(init);

window.$ = $;
window.jQuery = $;


init($, window, document);

render(
	<App />,
  document.getElementById('root')
)