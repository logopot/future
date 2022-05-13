import React from 'react';
import './Hero.scss'

import data from '../../Data/Data.json';
import heroImg from '../../../Img/Hero/robot.jpg';

    const Hero = () => {
      
     
        return (
            <div className="container-fluid bg-stripe">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="w-100" src={heroImg} alt={data.title} />
                            </div>
                            <div className="col-md-7 d-flex align-items-center">
                                <div className="hero__content-wrapp">
                                    <h1 className="h1-title p-3">{data.hero.title}</h1>
                                    <p className="p p-3">{data.hero.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

export default Hero;