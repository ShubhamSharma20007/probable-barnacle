import React from "react";
import Navbar from "./Navbar";
import newblogimg from "../images/newblog.jpg"
import icon1 from "../images/icon1.jpeg"
import Footer from "./footer"
import blog_img from "../images/blog2.png"
import post_img from "../images/Authorized Distributor.png"
import "./newblog.css";
export default function newblog() {
  return (
    <>
      <Navbar />
      <div class="col-md-12 warehouse-main-container">
        <div className="row row1">
          <div className="col-md-6 firstCol">
            <h3 className="aboutHeading">Blog</h3>
            <div className="button1">
              <a href="">
                Home<i className="far fa-angle-right"></i>
                <span>Blog</span>
              </a>
            </div>
          </div>
          <div className="col-md-6 secondCol">
            <img
              className="image"
              src={blog_img}
              alt=""
            />
          </div>
        </div>
      </div>

        <div className="newblog-parent col-md-12">
      <div className="newblog-container col-md-10">
        <div className="row ">
          <div className="left-newblog-container col-md-8">
            {/* <img src={newblogimg} alt="" />

            <div className="blog-header-title">
                <h3>Service Construct deals physical damage with his basic attack in the match.</h3>
                <p>There are many variations of passages agency we have covered many special events such as fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte.</p>
            </div> */}
            <img src={post_img} alt="" />
            <div className="blog-header-title">
                <h3>Service Construct deals physical damage with his basic attack in the match.</h3>
                <p>There are many variations of passages agency we have covered many special events such as fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte.</p>
            </div>
            {/* <img src={newblogimg} alt="" /> */}

            {/* <div className="numbers">
                <div className="row order-list">
                    <ul className="unorder">
                        <li><i class="fa-solid fa-arrow-left m-auto"></i></li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li> 
                        <li><i class="fa-solid fa-arrow-right m-auto "></i></li>
                    </ul>
                </div>
            </div> */}
          </div>
          

          <div className="right-newblog-container col-md-4">
            <div className="inner-container">
                <div class="input-group search-bar-container">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control blog-search" placeholder="   Search" />
                   
                </div>
                <button type="button" class="btn btn-primary blog-btn">
                    <i class="fas fa-search"></i>
                </button>
                </div>  
               
                {/* <div className="post-icon-container">
                <h4 className="mb-4">Recent</h4>
                    <div className="row ">
                       
                        <div className="col-md-3 img-containers">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="context-value col-md-9">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illum in nesciunt tempora porro asperiores veritatis eos facilis corrupti dicta.</p>
                        </div>

                        <div className="col-md-3 img-containers">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="context-value col-md-9">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illum in nesciunt tempora porro asperiores veritatis eos facilis corrupti dicta.</p>
                        </div>

                        <div className="col-md-3 img-containers">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="context-value col-md-9">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illum in nesciunt tempora porro asperiores veritatis eos facilis corrupti dicta.</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="post-icon-container">
                    <div className="row">
                    <h4 className="mb-4">Categories</h4>
                        <div className="context-value col-md-9 second-context-value">
                           <a href=""><i class="fal fa-angle-right"></i>Technology</a>
                           <a href=""><i class="fal fa-angle-right"></i>Software</a>
                           <a href=""><i class="fal fa-angle-right"></i>hardware</a>
                           <a href=""><i class="fal fa-angle-right"></i>Tech industrial</a>
                           <a href=""><i class="fal fa-angle-right"></i>Marketing</a>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
}
