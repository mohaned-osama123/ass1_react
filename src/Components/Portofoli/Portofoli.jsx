import React from 'react'
import img1 from "../../image/poert1.png"
import img2 from "../../image/port2.png"
import img3 from "../../image/port3.png"
export default function Portofoli() {
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-md-12 ">
            <h2>PORTFOLIO COMPONENT</h2>
        </div>
        <div className="col-md-12">
        <div></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div></div>
        </div>

        <div className="col-md-4 my-3">
            <img src={img1} className='w-100'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img2} className='w-100'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img3} className='w-100'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img1} className='w-100'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img2} className='w-100'  alt="" />
        </div>

        <div className="col-md-4 my-3">
            <img src={img3} className='w-100'  alt="" />
        </div>


    </div>
   </div>
   </>
  )
}
