import React from 'react';

// css
import 'a-carousel/build/styles.css';
import '../css/styles.css';

// components
import DefaultCarousel from './DefaultCarousel.js';
import AutoplayCarousel from './AutoplayCarousel.js';
import MiddleCarousel from './MiddleCarousel.js';
import WackyCarousel from './WackyCarousel.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
      <div>
        <div className='titleContainer'>
          <h1 className='title'> a-carousel Demo Page </h1>
          <p className='subtitle'>Simplifying UI</p>
        </div>
        <div className='bodyContainer'>
          <div className='carouselContainer'>
            <h3 className='carouselTitle'> Default Carousel </h3>
            <DefaultCarousel />
          </div>
          <div className='carouselContainer'>
            <h3 className='carouselTitle'> Barebone Carousel </h3>
            <AutoplayCarousel />
          </div>
          <div className='carouselContainer'>
            <h3 className='carouselTitle'> Middle Carousel </h3>
            <MiddleCarousel />
          </div>
          <div className='carouselContainer'>
            <h3 className='carouselTitle'> Wacky Carousel </h3>
            <WackyCarousel />
          </div>
        </div>
      </div>
    );
	}
}