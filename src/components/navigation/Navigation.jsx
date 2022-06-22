import React, { useState } from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

export default function Navigation({ open, setOpen }) {
  return (

    <div className={'navigation ' + (open && "active")}>
      <div className="inside">
        <div className="logo">
          <img src="/assets/Ethiopian_Music_Chart_Logo_Design-11.png" alt="" className="logoimg" />
          <img src="/assets/Ethiopian_Music_Chart_Logo_Design-15.png" alt="" className="logoimg" />
        </div>
        <div className="info">

          <div className="single">
            <Link to="/" className='link'>
              <span>
                Chart
              </span>
            </Link>

          </div>
          <div className="single">
            <Link className='link' to="/about">
              <span>
                About Us
              </span>
            </Link>
          </div>
          <div className="sub">

            <button onClick={() => setOpen(!open)}>
              Subscribe
            </button>

          </div>
        </div>
      </div>
    </div>



  )
}
