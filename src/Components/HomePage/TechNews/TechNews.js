import React from 'react';
import './TechNews.scss'

import data from '../../Data/Data.json';
import robotArm from '../../../Img/TechNews/robot-arm.jpg';

import techImg1 from '../../../Img/TechNews/tech1.jpg';
import techImg2 from '../../../Img/TechNews/tech2.jpg';
import techImg3 from '../../../Img/TechNews/tech3.jpg';
import techImg4 from '../../../Img/TechNews/tech4.jpg';
import techImg5 from '../../../Img/TechNews/tech5.jpg';
import techImg6 from '../../../Img/TechNews/tech6.jpg';

import lines from '../../../Img/lines.png';


const TechNews = () => {
    
    
    return (
        <div className="container-fluid techNews">
            <div className="row">
                <div className="col-md-5 offset-md-6">
                    <div className="techNews__img-wrapp">
                        <div className="techNews__img">
                            <img className="w-100" src={robotArm} alt={data.techNews.subtitle} />
                        </div>  
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 offset-md-2">
                    <div className="techNews__content">
                        <div className="techNews__content-left">
                            <h4>{data.techNews.subtitle}</h4>
                            <h2 className="h2-title">{data.techNews.title}</h2>
                            <p>{data.techNews.desc1}</p>
                            <a href="/tech-news" className="btn btnFT">{data.techNews.btn}</a>
                            <div className="techNews__content-left-lines">
                                <img className="w-100" src={lines} alt={data.techNews.subtitle} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 offset-md-1">
                    <div className="techNews__content">
                        <div className="techNews__content-right">
                            <h3>{data.techNews.title2}</h3>
                            <p>{data.techNews.desc2}</p>
                            <div className="row">
                                <div className="col-md-6 techNews__content-right-img">
                                    <img className="w-100" src={techImg1} alt={data.techNews.title2} />
                                </div>
                                <div className="col-md-6 techNews__content-right-img">
                                    <img className="w-100" src={techImg2} alt={data.techNews.title2} />
                                </div>
                                <div className="col-md-6 techNews__content-right-img">
                                    <img className="w-100" src={techImg3} alt={data.techNews.title2} />
                                </div>
                                <div className="col-md-6 techNews__content-right-img">
                                    <img className="w-100" src={techImg4} alt={data.techNews.title2} />
                                </div>
                                <div className="col-md-6 techNews__content-right-img">
                                    <img className="w-100" src={techImg5} alt={data.techNews.title2} />
                                </div>
                                <div className="col-md-6 techNews__content-right-img">
                                    <img className="w-100" src={techImg6} alt={data.techNews.title2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechNews;