import React from 'react'
import '../Footer.css'
import  { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import footer_logo from "../images/blacklogo.png"
import { useLocation } from "react-router-dom";
export default function Footer() {

	useEffect(() => {
		AOS.init({ duration: 1000 });
	  }, []);


	  const location = useLocation();
	  const currentroute = location.pathname;
	  var footerContent;
	  if(currentroute === "/"){
		footerContent = <p>Customers don't expect you to be perfect <br /> <br />
		They do expect you to fix things when they go wrong</p>;
	  }
	  else if (currentroute === "/AboutPage"){
		footerContent =  <p> Step into Our World of Solar Panels:<br/> <br />
		Where Innovation Meets Vision and Positive Impact. </p>
	  }
	  else if(
		currentroute === "/Contact_page"
	  ){
		footerContent = <p>Connect with us today ,<br/> <br />and
		let's start a conversation that sparks progress and possibilities!</p>
	  }
	  else if(currentroute === "/newblog"){
		footerContent = <p>Explore, Engage, and Enlighten: <br /> <br />
		Our Blog is a Journey of Knowledge and Inspiration </p>
	  }
	  else if(currentroute == '/WarehousePage'){
		footerContent = <p>Your Solar Products' Safe Haven: <br /> <br />
			 Our Warehouse, Where Quality Meets Care.</p>
	  }
	  else{ 
		footerContent = <p>This is the default footer content.</p>;
	  }


  return (
    <>
  <section class="deneb_cta">
	<div class="container">
		<div class="cta_wrapper data-content" data-aos="zoom-out-up" data-aos-once="true" data-aos-duration="1000">
			<div class="row align-items-center ">
				<div class="col-lg-12 ">
					<div class="cta_content" >
						<h3>{footerContent} </h3>
					</div>
				</div>
			
			</div>
		</div>
	</div>
</section>
<footer class="deneb_footer">
	<div class="widget_wrapper">
		<div class="container">
			<div class="row">
				
				<div class="col-lg-4 col-md-6 col-12">
					<div class="widget widegt_about">
						<div class="widget_title">
							<img src="assets/images/logo_1.png" class="img-fluid" alt=""/>
							<img src={footer_logo} style={{width:"35%", marginBottom:"5px"}} data-aos="zoom-out" data-aos-once="true"></img>
							<p>All we need is <strong>OneKlick</strong></p>
						</div>
						<ul class="social">
							<li><a href="https://www.facebook.com/OneKlickTechnoRenewable" data-aos="zoom-out" data-aos-once="true"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="https://twitter.com/OneklickTechno" data-aos="zoom-out" data-aos-once="true"><i class="fab fa-twitter"></i></a></li>
							<li><a href="https://www.instagram.com/oneklicktechno/" data-aos="zoom-out" data-aos-once="true"><i class="fab fa-instagram"></i></a></li>
							<li><a href="https://www.linkedin.com/company/oneklicktechno" data-aos="zoom-out" data-aos-once="true"><i className="fa-brands fa-linkedin-in "></i></a></li>

						</ul>
					</div>
				</div>
				
				<div class="col-lg-4 col-md-6 col-sm-12 footer-second-container">
					<div class="widget widget_link">
						<div class="widget_title">
							<h4>Links</h4>
						</div>
						<ul data-aos="zoom-out" data-aos-once="true">
							<li><a href="#">About Us</a></li>
							<li><a href="#">Products</a></li>
							<li><a href="#">Warehouse</a></li>
							<li><a href="#">Contact Us</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 footer-third-container">
					<div class="widget widget_contact">
						<div class="widget_title">
							<h4 data-aos="zoom-out" data-aos-once="true">Contact Us</h4>
						</div>
						<div class="contact_info">
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-phone " style={{color:"#524a6f"}}></i>
								</div>
								<div class="info">
									<p data-aos="zoom-out" data-aos-once="true"><a href="tel:+919511568993">+91-9511568993</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-envelope "></i>
								</div>
								<div class="info">
									<p data-aos="zoom-out" data-aos-once="true"><a href="mailto:sales@oneklick.in">sales@oneklick.in</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-map-marker-alt "></i>
								</div>
								<div class="info">
									<p data-aos="zoom-out" data-aos-once="true">A-154 H K M nagar, <br />Alwar Rajasthan</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				

			</div>
		</div>
	</div>
	<div class="copyright_area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="copyright_text">
						<p>Copyright &copy; 2020 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
    </>
  
  )
}
