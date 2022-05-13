import React from 'react';
import './Works.scss'

import data from '../../Data/Data.json';
import worksImg from '../../../Img/Works/works.png';


const Works = () => {
    
    
    return (

            <div className="works">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="works__content">
                                <div className="works__content-img">
                                    <img className="w-100" src={worksImg} alt={data.works.title} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="works__content">
                                <div className="works__content-desc">
                                    <h2 className="h2-title">{data.works.title}</h2>
                                    <p>{data.works.desc}</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            
        
    )
}

export default Works;