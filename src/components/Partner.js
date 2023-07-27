import  { useEffect } from 'react'
import React from 'react'
import "../Partner.css"
import AOS from "aos";
import "aos/dist/aos.css"

const Partner = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  return (
  <>

<div className="background1">
    
<h2 className='partner partner-main' data-aos="zoom-in" data-aos-once="true">Partner with OneKlick.</h2>
<p className='partner' data-aos="zoom-in" data-aos-once="true">Select and Get the Right Solar Module</p>
<p className='partner-description' data-aos="zoom-in" data-aos-once="true">Let our team work on your exciting new project together.</p>

<div style={{paddingBottom:"40px",paddingTop:"25px"}} className="vc_btn3-container wpb_animate_when_almost_visible wpb_bounceInUp bounceInUp vc_btn3-center wpb_start_animation animated">
	<a  className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-modern vc_btn3-color-grey" data-aos="zoom-out" data-aos-once="true" href="https://oneklick.in/#contactForm" title="">Get in Touch with us</a></div>

</div>
  </>
  )
}

export default Partner
