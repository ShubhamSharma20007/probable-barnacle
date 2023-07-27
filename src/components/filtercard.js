import React from 'react'

export default function filter() {
  return (
    <div className="col-md-10 sub-filter mx-auto">
    <div className='filter-container'>
        <form action="">
          <div className="row">
            <div className="col-md-8 left-filter">
            <div className="container">
            <a href="#" className="subtitle">
            <h5><span>J</span>inko Solar </h5>
                </a>
                <a href="#">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
                    <p>Posted on March 20,2022</p>
                </a>
            </div>
            </div>
            <div className="col-md-4 right-filter-container">
              <div className="row-md-4 right-filter">
              <input type="email" class="form-control  rounded-0 w-75"  aria-describedby="emailHelp" placeholder="Keyword..."/>
              <button type="button" class="btn btn-secondary btn-md rounded-0 w-75 filter-btn">Search</button>
              </div> 

            </div>
            </div>
        </form>

    </div>
 </div>
  )
}
