import React from 'react'
import "../WarehousePage.css"
import Warepage1 from "../images/warepage1.jpeg"
import Warepage2 from "../images/warepage2.jpeg";
import Warepage3 from "../images/warepage3.jpeg";
import Warepage4 from "../images/warepage4.jpeg";
import { Link } from 'react-router-dom';
import Warehouse_pic from "../images/warehouse2.png"
import Navbar from "./Navbar"
import Footer from "./footer"

export default function WarehousePage() {

    // const alwarVar = document.getElementById("alwar")
    // alwarVar.addEventListener("click",()=>{
    //     window.location.href="https://goo.gl/maps/x5EP8JZmTwmfr1yC8";
    // })

    const openMap=()=>{
        return(
      <div>
        <iframe src="https://goo.gl/maps/x5EP8JZmTwmfr1yC8" frameborder="0"></iframe>
      </div>
        )
    }

  return (
    
    <div>
<Navbar/>
      <div class="col-md-12 warehouse-main-container">
      <div className="row row1">
                <div className="col-md-6 firstCol">
                    <h3 className="aboutHeading">Warehouse</h3>

                    <div className="button1">
                        <a href="">Home<i className="far fa-angle-right"></i><span>Warehouse</span></a>
                    </div>
                </div>
                <div className="col-md-6 secondCol">
                    <img className="image" src={Warehouse_pic} alt="" />
                </div>
            </div>


        <div class="my-cards">
            <div class="row cards-container" style={{margin:0}}>
            
                <div class="col-md-3 first-context  alwar-container" id="alwar" >
                    <div class="header-section" style={{textAlign:'start'}}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x "></i>
                        <a href="https://goo.gl/maps/x5EP8JZmTwmfr1yC8"><h3>Alwar </h3></a>
                    </div>
                    <div class="address">
                        <p>200 foot road joyti nagar alwar rajasthan 301001</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-user "></i>
                        <p>mr.shubham sharma</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-phone "></i>
                        <p>+917073830702</p>
                    </div>
                </div>
                
                <div class="col-md-3  second-context jaipur-container">
                    <div class="header-section" style={{textAlign:'start'}}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x "></i>
                        <h3>Jaipur</h3>
                    </div>
                    <div class="address">
                        <p>200 foot road joyti nagar alwar rajasthan 301001</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-user "></i>
                        <p>mr.shubham sharma</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-phone "></i>
                        <p>+917073830702</p>
                    </div>
                </div>
                <div class="col-md-3 third-context ludhiana-container">
                    <div class="header-section" style={{textAlign:'start'}}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x "></i>
                        <h3>Ludhiana</h3>
                    </div>
                    <div class="address">
                        <p>200 foot road joyti nagar alwar rajasthan 301001</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-user "></i>
                        <p>mr.shubham sharma</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-phone "></i>
                        <p>+917073830702</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-cards mt-5">
            <div class="row cards-container" style={{margin:0}}>
                <div class="col-md-3 first-context ahmedabad-container ">
                    <div class="header-section" style={{textAlign:'start'}}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x "></i>
                        <h3>Ahemdabad</h3>
                    </div>
                    <div class="address">
                        <p>200 foot road joyti nagar alwar rajasthan 301001</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-user "></i>
                        <p>mr.shubham sharma</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-phone "></i>
                        <p>+917073830702</p>
                    </div>
                </div>
                <div class="col-md-3  second-context bhiwandi-container">
                    <div class="header-section" style={{textAlign:'start'}}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x "></i>
                        <h3>Bhiwandi</h3>
                    </div>
                    <div class="address">
                        <p>200 foot road joyti nagar alwar rajasthan 301001</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-user "></i>
                        <p>mr.shubham sharma</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-phone "></i>
                        <p>+917073830702</p>
                    </div>
                </div>
                <div class="col-md-3 third-context hyderabad-container">
                    <div class="header-section" style={{textAlign:'start'}}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x "></i>
                        <h3>Hyderabad</h3>
                    </div>
                    <div class="address">
                        <p>200 foot road joyti nagar alwar rajasthan 301001</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-user "></i>
                        <p>mr.shubham sharma</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-phone "></i>
                        <p>+917073830702</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-cards mt-5">
            <div class="row cards-container chennai-container" style={{margin:0}}>
                <div class="col-md-3 first-context ">
                    <div class="header-section" style={{textAlign:'start'}}>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x "></i>
                        <h3>Chennai</h3>
                    </div>
                    <div class="address">
                        <p>200 foot road joyti nagar alwar rajasthan 301001</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-user "></i>
                        <p>mr.shubham sharma</p>
                    </div>
                    <div class="person-name">
                        <i class="fa-solid fa-phone "></i>
                        <p>+917073830702</p>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
    <Footer/>
    </div>
   
  )
}
