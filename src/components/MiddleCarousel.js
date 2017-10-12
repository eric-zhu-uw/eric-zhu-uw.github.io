import React from 'react';
import ACarousel from 'a-carousel';

export default class MiddleCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
      <div className='parentStyle'>
        <ACarousel initialSlide={1} dots={false}>
          <div className='childStyle'>
            <h1 className="headerStyle"> 1 </h1>
          </div>
          <div className='childStyle'>
            <h1 className="headerStyle"> 2 </h1>
          </div>
          <div className='childStyle'>
            <h1 className="headerStyle"> 3 </h1>
          </div>
        </ACarousel>
      </div>
    );
	}
}