import React from 'react'

export default function Contact() {
  return (
  <>
  <div className="container">
    <div className="row">
        <div className="col-md-12 my-3">
            <label htmlFor="">userName :</label>
            <input type="text"className='form-control'placeholder='userName' />
        </div>

        <div className="col-md-12 my-3">
            <label htmlFor="">userAge :</label>
            <input type="text"className='form-control'placeholder='userAge' />
        </div>
        <div className="col-md-12 my-3">
            <label htmlFor="">userEmail :</label>
            <input type="email"className='form-control'placeholder='userEmail' />
        </div>
        <div className="col-md-12 my-3">
            <label htmlFor="">userPassword :</label>
            <input type="password"className='form-control'placeholder='userPassword' />
        </div>
        <button type="button" class="btn btn-success w-25">Success</button>    </div>
  </div>
  
  </>
  )
}
