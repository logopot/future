import React from 'react';
import './Testimonials.scss'

import data from '../../Data/Data.json';

import testimonialQuote from '../../../Img/Testimonials/quote.svg';

const Testimonials = () => {
    
    
    return (

           
            <div className="testimonials">
                <div className="container">
                    <img className="testimonials__icon" src={testimonialQuote} alt={data.testimonials.title} />
                    <p>{data.testimonials.desc}</p>
                    <p>- {data.testimonials.name}</p>
                </div>
               
            </div>
            
    )
}

export default Testimonials;