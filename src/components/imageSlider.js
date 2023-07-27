import React from 'react';
import Flower from '../images/flower.jpeg';

export default function ImageSlider() {
  return (
    <div className="container-fluid slider-con" id="cont">
      <div className="row">
        <div className="col-md-12 px-0 content">
          <div className="col-md-2 px-0 img-content">
            <img src={Flower} alt="" style={{ width: '100%' }} className="image" />
            <div className="overlay"></div>
          </div>
          <div className="col-md-2 px-0 img-content">
            <img src={Flower} alt="" style={{ width: '100%' }} className="image" />
            <div className="overlay"></div>
          </div>
          <div className="col-md-2 px-0 img-content">
            <img src={Flower} alt="" style={{ width: '100%' }} className="image" />
            <div className="overlay"></div>
          </div>
          <div className="col-md-2 px-0 img-content">
            <img src={Flower} alt="" style={{ width: '100%' }} className="image" />
            <div className="overlay"></div>
          </div>
          <div className="col-md-2 px-0 img-content">
            <img src={Flower} alt="" style={{ width: '100%' }} className="image" />
            <div className="overlay"></div>
          </div>
          <div className="col-md-2 px-0 img-content">
            <img src={Flower} alt="" style={{ width: '100%' }} className="image" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
