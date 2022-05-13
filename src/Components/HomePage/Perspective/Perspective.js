import React from 'react';
import './Perspective.scss'

import data from '../../Data/Data.json';
import perspectiveImg from '../../../Img/Perspective/perspective.jpg';
import lines from '../../../Img/lines.png';


const Perspective = () => {
    
    
    return (

            <div className="perspective">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-6">
                            <div className="perspective__content">
                                <div className="perspective__content-lines">
                                    <img className="w-100" src={lines} alt={data.perspective.subtitle} />
                                </div>
                                <div className="perspective__content-wrapp">
                                    <h4 className="text-uppercase">{data.perspective.subtitle}</h4>
                                    <h2 className="h2-title">{data.perspective.title}</h2>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="perspective__content-descWrapp">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="perspective__content-desc">
                                    <p>{data.perspective.desc}</p>
                                    <a href="/perspective" className="btn btnFT">{data.perspective.btn}</a>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="perspective__content">
                                    <div className="perspective__content-img">
                                        <img className="w-100" src={perspectiveImg} alt={data.perspective.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
    )
}

export default Perspective;