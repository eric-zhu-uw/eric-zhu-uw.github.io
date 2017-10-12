import React from 'react';
import ACarousel from 'a-carousel';

export default class AutoplayCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
      <div className='parentStyle'>
        <ACarousel autoplay={true} arrow={false} dots={false}>
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