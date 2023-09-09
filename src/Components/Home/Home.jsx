import React from 'react'
import style from"./Home.module.css"
import logo from"../../smeal.svg"
export default function Home() {
  return (<>
    <div className={`${style.home}  bg-success `}>
       <div>
       <div className='logo'><img src={logo} alt="" /></div>
        <div>
            <h2>START FRAMEWORK</h2>
        </div>
        <div>
            <div></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div></div>
        </div>
        <span>Graphic Artist - Web Designer - Illustrator</span>

       </div>
    </div>
    </>
  )
}
