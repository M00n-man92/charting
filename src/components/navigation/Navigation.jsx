import React, { useState } from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (

        <div className='navigation'>
            <div className="inside">
                <div className="logo">
                    <img src="/assets/cover.jpg" alt="" className="logoimg" />
                </div>
                <div className="info">

                    <div className="single">
                        <Link to="/" className='link'>
                            <span>
                                CHART
                            </span>
                        </Link>

                    </div>
                    <div className="single">
                        <Link className='link' to="/about">
                            <span>
                                ABOUT US
                            </span>
                        </Link>
                    </div>
                    <div className="sub">
                        <Link to="subscribe">
                            <button >
                                Subscribe
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>



    )
}
