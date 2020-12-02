import React from 'react'           
import '/home/bhubesh/react-redux/src/App.css'
import { Button } from './Button'
import './HeroSection.css'
import video from '../videos/video-1.mp4'

function HeroSection() {
    return (
        <div className = 'hero-container'>
            {/* <video src={video} autoPlay loop muted ></video> */}
            <h1>
                Adventure For Us
            </h1>
            <h1>
                why are you waiting for??
            </h1>
            <div>
                <Button className ='btns' 
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large' >
                    Get Started
                </Button>

                <Button className ='btns' 
                buttonStyle = 'btn--primary'
                buttonSize = 'btn--large' >
                    Watch movie <i className = 'far fa-play-circle'>
                    </i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
