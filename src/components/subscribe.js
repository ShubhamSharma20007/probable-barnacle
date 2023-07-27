import React from 'react'

export default function subscribe() {
  return (
     <div className="col-md-10 sub-container mx-auto">
        <div className='subscribes_from'>
            <form action="">
                <div className="row subscribe-con">
                <div className="col-lg-3 d-bloc ">
                    <h3>Subscribe for latest Update</h3>
                </div>
                <div className="col-lg-3 d-bloc">
                    <input type="text" name="" id=""  placeholder='Name' className='input w-75'/>
                </div>
                <div className="col-lg-3 d-bloc">
                <input type="email" name="" id=""  placeholder='Email' className='input w-75 '/>
                </div>
                <div className="col-lg-3 d-bloc">
                <button type="button" class="btn btn-secondary btn-sm rounded-0 px-4">Submit</button>
                </div>  
                </div>
            </form>

        </div>
     </div>
  )
}
