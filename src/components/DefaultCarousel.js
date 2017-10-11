import React from 'react';
import ACarousel from 'a-carousel';

export default class DefaultCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.showCodeBlock = this.showCodeBlock.bind(this);

    this.state = {
      show: false
    }
  }

	render() {
		return (
      <div style={parentStyle}>
        <ACarousel>
          <div style={childStyle}>
            <h1 style={headerStyle}> 1 </h1>
          </div>
          <div style={childStyle}>
            <h1 style={headerStyle}> 2 </h1>
          </div>
          <div style={childStyle}>
            <h1 style={headerStyle}> 3 </h1>
          </div>
          <div style={childStyle}>
            <h1 style={headerStyle}> 4 </h1>
          </div>
          <div style={childStyle}>
            <h1 style={headerStyle}> 5 </h1>
          </div>
        </ACarousel>

        <button onClick={this.showCodeBlock}> View Code </button>
        { this.state.show ? this.codeBlock() : '' }
      </div>
    );
	}

  showCodeBlock() {
    this.setState((prevState) => {
      return {show: !prevState.show}
    })
  }

  codeBlock() {
    return (
      <pre className='codeBlock'>
        <span className='title'>Default Carousel</span>
        <span className='line'>import ACarousel from 'a-carousel';</span>
        <span className='line'>&lt;ACarousel&gt;</span>
        <span className='line'>&lt;/ACarousel&gt;</span>
      </pre>
    );
  }
}
const parentStyle = {width: '50%', margin: '0 auto'};
const childStyle= {backgroundColor: '#285878', padding: '25px 0'};
const headerStyle = {textAlign: 'center', color: 'white'}