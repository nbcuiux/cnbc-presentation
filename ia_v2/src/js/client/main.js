import React from 'react'
import { render } from 'react-dom'
import $ from "jquery";

import App from '../components/App'


window.$ = $;


render(
	<App />,
  document.getElementById('root')
)