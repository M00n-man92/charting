import React from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className='navigation'>
            <div className="logo">
                <img src="/assets/cover.jpg" alt="" className="logoimg" />
            </div>
            <div className="info">
                <div className="single">
                    <span>
                        HOME
                    </span>
                </div>
                <div className="single">
                    
                    <span>
                        CHART
                    </span>
                </div>
                <div className="single">
                <Link to="/about">
                    <span>
                        ABOUT US
                    </span>
                    </Link>
                </div>
            </div>

        </div>

    )
}
