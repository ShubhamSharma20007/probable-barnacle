import React, { useState } from 'react'
import  { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, product, contact, message }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setEmail('');
        setName('');
        setProduct('');
        setContact('');
        setMessage('');
      } else {
        console.log('Failed to send email');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-us">
      <div className="section-title section-title-new" data-aos="zoom-in" data-aos-once="true">
        <div className='introduction'>
          <h5>Have any Project in Mind?</h5>
        </div>
        <div class="header-title col-md-6" style={{width:'100%', display:'flex',justifyContent:"center"}}>
          <h2>Contact Us
          </h2>
          </div>
      </div>
      <div className="contact-details">
        <div className="row" style={{justifyContent:'center'}} >
          <div className="col-md-3 contact-address" data-aos="flip-left" data-aos-once="true">
            <h3>Details</h3>
            <div className="col-md-12 mt-5 lefts-container ">
            <i class="fa-solid fa-envelope fa-3x"></i>
            <div className=''>
              <h3 style={{textAlign:"start"}}>Email</h3>
              <a href="mailto:sales@oneklick.in">sales@oneklick.in</a>
            </div>
            </div> 
            <div className="col-md-12 mt-5 lefts-container ">
            <i class="fa-sharp fa-solid fa-square-phone fa-3x"></i>
            <div className=''>
            <h3 style={{textAlign:"start"}}>Phone</h3>
                <a href="tel:+919511568993">+91-9511568993</a><br />
                <a href="tel:+919358589005">+91-9358589005</a>
            </div>
            </div> 

          </div>
          <div className="col-md-8 address-form-section" data-aos="flip-right" data-aos-once="true">
            <div className="contact-form">
              <p>While we are good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</p>
              <form>
                <div class="row" style={{ margin: 0 }}>
                  <div class="col-md-12">
                    <input type="text" class="form-control" name='name' onChange={(e) => setName(e.target.value)} placeholder="NAME" />
                  </div>
                  <div class="col-md-12">
                    <input type="text" class="form-control" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="E-MAIL" />
                  </div>
                  <div class="col-md-12">
                    <input type="text" class="form-control" name='product' onChange={(e) => setProduct(e.target.value)} placeholder="PRODUCT REQUIRED" />
                  </div>
                  <div class="col-md-12">
                    <input type="text" class="form-control" name='contact' onChange={(e) => setContact(e.target.value)} placeholder="CONTACT NUMBER" />
                  </div>
                  <div class="col-md-12">
                    <input type="text" class="form-control" name='message' onChange={(e) => setMessage(e.target.value)} placeholder="MESSAGE" />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" class="btn text-light " onClick={sendEmail}>SUBMIT</button>
                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
