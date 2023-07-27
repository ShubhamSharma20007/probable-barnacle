import React, { useEffect } from "react";
import Axitec from "../images/waxitec.png";
import Jinko from "../images/wjinko.png";
import Nova from "../images/wnova.png";
import "../Product.css"
import Navbar from "../components/Navbar"
import Productsheet from "./productsheet"

export default function Product() {
  useEffect(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      }, false);
    });
  }, []);

  return (
    <div>
      <React.Fragment>
      <Navbar/>
        <div className="col-md-12 product-main-container">
          <div className="row product-row">
            <div className="col-md-8 product-left-container">
              <h1 className="product-title">Authorised Distributor of:</h1>
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={Jinko}
                    alt=""
                    className="productimg image-animation1"
                  />
                </div>
                <div className="col-md-12 py-3">
                  <img
                    src={Axitec}
                    alt=""
                    className="productimg image-animation2"
                  />
                </div>
                <div className="col-md-12 py-3">
                  <img
                    src={Nova}
                    alt=""
                    className="productimg image-animation3 novasys"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 product-right-container">
              <div className="product-right-content">
                <form className="needs-validation" noValidate>
                  <h1 className="head-title text-center mb-5">Query Form</h1>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control product-form-control"
                      id="validationCustom01"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group product-form-group">
                    <input
                      type="text"
                      className="form-control product-form-control"
                      id="validationCustom02"
                      aria-describedby="emailHelp"
                      placeholder="Organization Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group product-form-group">
                    <input
                      type="email"
                      className="form-control product-form-control"
                      id="validationCustom03"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group w-75">
                    <select
                      className="form-control product-form-control"
                      id="validationCustom04"
                      placeholder="Select Module"
                      required
                    >
                      <option value="">Select Module</option>
                      <option>Jinko - 550Wp</option>
                      <option>Jinko - 470Wp</option>
                      <option>Axitec - 550Wp</option>
                      <option>Axitec - DCR - 335WP</option>
                      <option>Axitec - Non DCR - 335WP</option>
                      <option>Novasys - 540Wp</option>
                      <option>Novasys - DCR - 335Wp</option>
                      <option>Novasys - Non DCR - 335Wp</option>
                    </select>
                  </div>
                  <div className="form-group product-form-group">
                    <input
                      type="tel"
                      className="form-control product-form-control"
                      id="validationCustom05"
                      placeholder="Number"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-dark btn-md mt-3 product-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Productsheet/>

      </React.Fragment>
    </div>
  );
}