import React from 'react'
import "../Contactpage.css"
import Navbar from "./Navbar"
import lady_img from "../images/contact_us_image.png"
import Footer from "./footer"

export default function contact_page() {
  return (
    <>
    <Navbar/>
      <div className="contact_page">
      <div className="row row1">
                <div className="col-md-6 firstCol">
                    <h3 className="aboutHeading">Contact Us</h3>

                    <div className="button1">
                        <a href="">Home<i className="far fa-angle-right"></i><span>Contact Us</span></a>
                    </div>
                </div>
                <div className="col-md-6 secondCol">
                    <img className="image" src={lady_img} alt="" />
                </div>
            </div>
        <div className="container container-for-input">
        <h4 className='contact_page_subtitle'>Get in contact</h4>
          <div className="row">
            <div className="col-md-8">
            <div className="row">
              <div className="col-md-8">
              <h3>Feel free to get in touch <br /> contact with us.</h3>
              <p>Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.</p>
              </div>
              <div className="col-md-4">
              <i className='fa fa-comments fa-4x' style={{color:"#525784" , margin:"30px 0px"}} ></i>
              </div>
            </div>
             
              
              <div className="contact_page_form">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder='Your Name' />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder='Your Email' />
                    </div>
                    <div className="col-md-12">
                      <textarea name="" placeholder='Message' id="" cols="82" rows="8"></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 content-content">
              <div className="contact_page_right">
                <div className="row contact_right">
                  <div className="col-md-6 contact_page_icon">
                    <i className='fa fa-phone fa-2x'></i>
                  </div>
                  <div className="col-md-6">
                    <div className="page_right_content">
                      <h4>Call us now!</h4>
                      <a href="tel:+919511568993">+91 – 9511568993</a><br />
                      <a href="tel:+919358589005">+91 – 9358589005</a>
                    </div>
                  </div>
                </div>
                <div className="row contact_right">
                  <div className="col-md-6 contact_page_icon">
                    <i className='fa-solid fa-envelope fa-2x'></i>
                  </div>
                  <div className="col-md-6">
                    <div className="page_right_content">
                      <h4>Message us!</h4>
                      <a href="mailto:sales@oneklick.in">sales@oneklick.in</a><br />
                      <a href="mailto:saurabh@oneklick.in">saurabh@oneklick.in</a>
                    </div>
                  </div>
                </div>
                <div className="row contact_right">
                  <div className="col-md-6 contact_page_icon">
                    <i className='fa fa-location-dot fa-2x'></i>

                  </div>
                  <div className="col-md-6">
                    <div className="page_right_content">
                      <h4>Our location!</h4>
                      <p>A-154 H K M Nagar, Alwar, Rajasthan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="button-30 btn-btn mt-3" role="button">Send Request</button>
          </div>
         
        </div>
      </div>

<Footer/>
    </>
  )
}
