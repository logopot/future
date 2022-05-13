import React from 'react';
import './TechTrends.scss'

import data from '../../Data/Data.json';

import trendImg1 from '../../../Img/TechTrends/robot-friendly-2.jpg';
import trendImg2 from '../../../Img/TechTrends/robot-friendly-3.jpg';
import trendImg3 from '../../../Img/TechTrends/robot-friendly-4.jpg';


const TechTrends = () => {
    
    
    return (

            <div className="techTrends bg-stripe">
                <div className="techTrends__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <h2 className="h2-title">{data.techTrends.title}</h2>
                            </div>
                            <div className="col-md-4 techTrends__margin">
                                <img className="w-100" src={trendImg1} alt={data.techTrends.title} />
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-5 techTrends__margin">
                                        <img className="w-100" src={trendImg2} alt={data.techTrends.title} />
                                    </div>
                                    <div className="col-md-7 techTrends__margin">
                                        <img className="w-100" src={trendImg3} alt={data.techTrends.title} />
                                    </div>
                                    <div className="col-md-12 techTrends__margin">
                                        <p>{data.techTrends.desc}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
               
            </div>
            
        
    )
}

export default TechTrends;