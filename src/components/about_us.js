import React from 'react'
import { useEffect } from 'react';
import img4 from '../images/about.png'


export default function about_us() {
  return (
    <>
      <div className='About_us'>
        <div className='section-title fade-in'>
           <div className='introduction'>
           <h5>ABOUT US</h5>
           </div>
          <h1>ABOUT US</h1>
        </div>
        <div className='section-content'>
          <p className='fade-in intro'>OneKlick Techno Renewable Pvt. Ltd is a pan-India authorized distributor for solar modules of Jinko Solar, Axitec Solar and Novasys Green. With our partner factories in China, Germany and India, we are able to provide quality solar modules at competitive prices across the country.</p>
          <div className='row'>
            <div className='col-md-6 fade-in'>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i class="fa-solid fa-plus"></i>Highest quality products at Cost Effective price
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">We know that it can be hard to find the right products for your projects from such wide variety of choices, especially when you need quality and price both. That’s why we make sure that we advise you best suited product which are always delivered 100% in time and at an affordable price—and we’re committed to making it happen.</div>
                  </div>
                </div>
                <div class="accordion-item mt-1">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <i class="fa-solid fa-plus"></i> Professional anf Ethusiastic team
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">We strive to stay on top of new technologies and techniques so that we can deliver the best possible outcomes. Our team members are always willing to help — from advice on best suited products on your projects to technical support.</div>
                  </div>
                </div>
                <div class="accordion-item mt-1">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <i class="fa-solid fa-plus"></i> Reliability
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">OneKlick is committed to quality so we deliver whatever you want, whenever you want and wherever you want. We are available 24/7/365 to answer any questions you may have.</div>
                  </div>
                </div>
                <div class="accordion-item mt-1">
                  <h2 class="accordion-header" id="flush-headingFour">
                    <button class="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <i class="fa-solid fa-plus"></i>Transparency
                    </button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">OneKlick ensures that our customers receive accurate information and all the relevant details that they need in order to find the product they are looking for.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-1 ">
                  <h2 class="accordion-header" id="flush-headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <i class="fa-solid fa-plus"></i> Premium Range
                    </button>
                  </h2>
                  <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">From World’s most sold Solar module to German standard practices. We make sure that we deliver you the best.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 text-center'>
              <img src={img4} width="50%" className="image-animation"></img>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
