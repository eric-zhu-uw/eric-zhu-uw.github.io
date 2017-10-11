import React from 'react';

// css
import 'a-carousel/build/styles.css';
import '../css/styles.css';

// components
import DefaultCarousel from './DefaultCarousel.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
      <div>
        <DefaultCarousel />
      </div>
    );
	}
}