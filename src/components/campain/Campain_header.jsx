import React from "react";
import glow from "../../images/logo.svg"
import { useEffect,useState } from 'react';

import img1 from "../../images/Axitec-Copy.png"
import img2 from "../../images/Jinko.png"
import img3 from "../../images/Nova.png"
import img4 from "../../images/Solex - Copy.png"
import Campain_container from "./Campain_firstcontainer"
import Navbar from "../Navbar"
import Footer from "../footer";

export default function Header(props) {
    const {value} = props
   
    useEffect(()=>{  
      const titlehead = document.getElementById("title-head");
        window.addEventListener('scroll',()=>{
        const screen = window.scrollY;
        titlehead.style.top = 1.0 * screen + "px";
      })
    })

     const values =[
    {
      image1:img1,
    },
    {
      image1:img2,
    },
    {
      image1:img3,
    },
    {
      image1:img4,
    },
    {
      image1:img1,
    },
    {
      image1:img2,
    },
    {
      image1:img3,
    },
    {
      image1:img4,
    }

  ]

  
  
  
  return (
    <>
    <Navbar/>
      <div className="col-md-12 header-container">
        <div className="main-container col-md-12  img-fluid">
        <div className="small-icon  col-md-1 d-flex justify-content-start align-items-center ">
         /  <a href="#"><img src={glow} alt="" /></a>
        </div>
        <div className="title-contact-fix">
          <div className="titles col-md-6">
            <div className="title-header" id="title-head" >
              <h1>Welcome to Virtual World</h1>
              <p className="top-para">
                Virtual world is always the opposite of human beings.
              </p>
              <p>Nowadays, people are living in the virtual world.</p>
            </div>
          </div>
          <div className="col-md-4  contact-from-container" >
         <div className="contact col-md-12 d-flex justify-content-end align-items-center min-vh-100" >
        <div className="second-container"></div>
        <form className="form-data">
        <h2 className="text-center h2-content">Contact Form</h2>
          <div class="form-row">
            
            <div class="form-group col-md-12">
              <label for="inputEmail4">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="enter the name"
              />
            </div>
            <div class="form-group col-md-12">
              <label for="inputPassword4">number</label>
              <input
                type="len"
                class="form-control"
                id="inputPassword4"
                placeholder="enter the number"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="enter the address"
            />
          </div>
         
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" placeholder="enter the city" />
            </div>
            
          </div>
          <button type="submit" class="btn btn-primary long-btn">
            Submit
          </button>
        </form>
      </div>
      </div>

          </div>
          </div>
          


          <div className="bubbles">
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 78 }}></span>
            <span style={{ "--i": 68 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 61 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 92 }}></span>
            <span style={{ "--i": 97 }}></span>
            <span style={{ "--i": 32 }}></span>
            <span style={{ "--i": 83 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 40 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 58 }}></span>
            <span style={{ "--i": 43 }}></span>
            <span style={{ "--i": 38 }}></span>
            <span style={{ "--i": 82 }}></span>
            <span style={{ "--i": 96 }}></span>
            <span style={{ "--i": 87 }}></span>
            <span style={{ "--i": 92 }}></span>
            <span style={{ "--i": 99 }}></span>     
          </div>
          <div className="bubble">
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 78 }}></span>
            <span style={{ "--i": 68 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 61 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 92 }}></span>
            <span style={{ "--i": 97 }}></span>
            <span style={{ "--i": 32 }}></span>
            <span style={{ "--i": 83 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 40 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 58 }}></span>
            <span style={{ "--i": 43 }}></span>
            <span style={{ "--i": 38 }}></span>
            <span style={{ "--i": 82 }}></span>
            <span style={{ "--i": 96 }}></span>
            <span style={{ "--i": 87 }}></span>
            <span style={{ "--i": 92 }}></span>
            <span style={{ "--i": 99 }}></span>     
          </div>

          {/* second section */}
          <div className="second-containers col-md-12 px-0" style={{ width: '100%' }}>
              <marquee className="marquee-tag" onstart scrollamount="30" scrolldelay="61" truespeed >
                <div className="slider-value">
               {values.map((items,index)=>(
                    <img src={items.image1} key={index} alt="" width={'200px'} className="img-fluid"/>
                ))}
                </div>
              </marquee>
            </div>
            
         
 

          </div>
          <Campain_container/>
          <Footer/>
           
           
      </>
    
  )
};
