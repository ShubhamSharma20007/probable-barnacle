import React from "react";
import Wallpaper1 from "../images/wallpaper1.jpeg";
import Wallpaper2 from "../images/wallpaper2.jpeg";
import Wallpaper3 from "../images/wallpaper3.jpeg";
import Subscribe from './subscribe';
import ImageSlider from './imageSlider';
import Filter from './filtercard';
import Navbar from "./Navbar";


export default function Blog(props) {
  const {title} = props
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm px-0 img-con">
            <div className="img-container" style={{ height: "70vh", backgroundImage: `url(${Wallpaper1})`}}>
            <div className="container">
                <a href="#" className="subtitle">
                    <h5><span>J</span>inko Solar </h5>
                </a>
                <a href="#">
                    <h2>{title[0].name}</h2>
                    <p>{title[0].para}</p>
                </a>
            </div>
            </div>
          </div>
          <div className="col-sm px-0 img-con">
            <div className="img-container " style={{ height: "70vh", backgroundImage: `url(${Wallpaper2})` }} >
            <div className="container">
            <a href="#" className="subtitle">
            <h5><span>J</span>inko Solar </h5>
                </a>
                <a href="#">
                    <h2>{title[0].name}</h2>
                    <p>{title[0].para}</p>
                </a>
            </div>
            </div>
         </div>
          <div className="col-sm px-0">
            <div className="img-container" style={{ height: "70vh", backgroundImage: `url(${Wallpaper3})`,backgroundSize: "cover", }}>
            <div className="container">
            <a href="#" className="subtitle">
            <h5><span>J</span>inko Solar </h5>
                </a>
                <a href="#">
                    <h2>{title[0].name}</h2>
                    <p>{title[0].para}</p>
                </a>
                
                </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
      <ImageSlider/>
      <Filter/>
    </>
  );
}
