import React from 'react'
import style from "./Footer.module.css"
export default function Footer() {
  return (
    <>
    <div className={`${style.footer}  container `}>
        <div className="row">
            <div className="col-md-4">
                <h2>Location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <div className="div">
                    <h2>AROUND THE WEB</h2>
                </div>
                <div className="div">
                <i _ngcontent-pti-c21="" class="fa-brands fa-facebook mx-1 icon"></i>
                <i _ngcontent-pti-c21="" class="fa-brands fa-twitter mx-1 icon"></i>
                <i _ngcontent-pti-c21="" class="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i _ngcontent-pti-c21="" class="fa-solid fa-globe mx-1 icon"></i>
                </div>
            </div>
            <div className="col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}
