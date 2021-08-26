import React from 'react';
import {Button} from './Button';

function hero() {
    return (
        <div className="hero-container">
        <video src='./video/video-2.mp4' autoPlay loop muted />
      <h1>Let's Get Started</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('CONTACT ME BUTTON =====')}
        >
          Contact Me <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    )
}

export default hero;
