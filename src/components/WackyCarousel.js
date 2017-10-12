import React from 'react';
import ACarousel from 'a-carousel';

export default class WackyCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
      <div className='parentStyle'>
        <ACarousel
          arrowPosition='bottom'
          dots={false}
          autoplay={true}
          autoplaySpeed={2}
          speed={0.5}
          timing='cubic-bezier(0.05, 0.99, 0.96, 0.04)'
          arrowStyleForward='wackyForward'
          arrowStyleBackward='wackyBackward'
        >
          <div className='childStyle'>
            <h1 className="headerStyle"> 1 </h1>
          </div>
          <div className='childStyle'>
            <h1 className="headerStyle"> 2 </h1>
          </div>
          <div className='childStyle'>
            <h1 className="headerStyle"> 3 </h1>
          </div>
          <div className='childStyle'>
            <h1 className="headerStyle"> 4 </h1>
          </div>
          <div className='childStyle'>
            <h1 className="headerStyle"> 5 </h1>
          </div>
        </ACarousel>
      </div>
    );
	}
}