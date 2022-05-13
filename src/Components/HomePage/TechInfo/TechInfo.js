import React from 'react';
import './TechInfo.scss'

import data from '../../Data/Data.json';

import imgBehind from '../../../Img/TechInfo/rb.jpg';
import imgTop from '../../../Img/TechInfo/person.jpg';
import lines from '../../../Img/lines.png';

import robot from '../../../Img/TechInfo/Services/robot.svg';
import engineering from '../../../Img/TechInfo/Services/engineering.svg';
import construction from '../../../Img/TechInfo/Services/construction.svg';


const TechInfo = () => {
    
    
    return (

            <div className="techInfo bg-stripe">
                <div className="techInfo__wrapp">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="techInfo__content-left">
                                <img className="w-100" src={imgBehind} alt={data.techInfo.title} />
                                <div className="techInfo__content-left-lines">
                                    <img className="w-100" src={lines} alt={data.techNews.subtitle} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="techInfo__content-right">
                                <div className="techInfo__content-right-imgTop">
                                    <img className="w-100" src={imgTop} alt={data.techInfo.title} />
                                </div>
                                <div className="techInfo__content-right-title">
                                    <h2 className="h2-title mb-5">{data.techInfo.title}</h2>
                                </div>
                                <p>{data.techInfo.desc}</p>
                                <a href="/ces" className="btn btnFT">{data.techInfo.btn}</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container techInfo__service">
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <div className="techInfo__service-icon">
                                        <img src={robot} alt={data.techInfo.services.service1.title} />
                                    </div>
                                    <h3>{data.techInfo.services.service1.title}</h3>
                                    <p>{data.techInfo.services.service1.desc}</p>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="techInfo__service-icon">
                                        <img src={engineering} alt={data.techInfo.services.service2.title} />
                                    </div>
                                    <h3>{data.techInfo.services.service2.title}</h3>
                                    <p>{data.techInfo.services.service2.desc}</p>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="techInfo__service-icon">
                                        <img src={construction} alt={data.techInfo.services.service3.title} />
                                    </div>
                                    <h3>{data.techInfo.services.service3.title}</h3>
                                    <p>{data.techInfo.services.service3.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
    )
}

export default TechInfo;