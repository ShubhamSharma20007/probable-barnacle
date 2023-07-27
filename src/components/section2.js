import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"


const distributorData = [
  {
    title: 'Jinko Solar',
    description: 'World Most Bankable & Reliable Solar Module, with a track record of Quality, Reliability, Durability & Consistent performance. #Most sold solar module.',
  },
  {
    title: 'Solex',
    description: 'NSE listed company with leading global practices, UV protected backsheet, PID free EVA, and 25 years of reliability.',
  },
  {
    title: 'Axitec',
    description: 'Energy for a better world #German brand now made in India. Dependable Modules for your solar project.',
  },
  {
    title: 'Novasys Green',
    description: 'Made with German Stringer TT 2100 machine with utmost transparency ensuring trustworthy and dependable Modules for your project.',
  }
];



export default function Section2() {
  
  useEffect(()=>{
    AOS.init({duration:1000})
    
  }
  
  )

  return (

    <>
       <div>
      <div className='Authorized_distributor fade-in'>
          <div>
            <h1 className='authorized' data-aos="zoom-in" data-aos-once="true">AUTHORIZED DISTRIBUTOR</h1>
          </div>

          <div className="section-content">
          <div className='row'>
            {distributorData.map((item, index) => (
              <div className='col-md-3  my-col' data-aos="flip-left" data-aos-once="true" key={index}>
               
                 <h3>{item.title}</h3>
                <h6>{item.description}</h6>
                <a href='#'>
                  Learn More <i className='fa-sharp fa-solid fa-angles-right'></i>
                </a>
              </div>
            ))}
          </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
}
