import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer({open}) {
  return (
    <div className={'footer '+ (open && "active") } >
        <div className="inside">
        <div className="logo">
        <img src="/assets/Ethiopian_Music_Chart_Logo_Design-11.png" alt="" className="logoimg" />
                    <img src="/assets/Ethiopian_Music_Chart_Logo_Design-15.png" alt="" className="logoimg"/>
            </div>
            <div className="info">
                
                <div className="single">
                    
                    <span>
                        FOLLOW
                    </span>
                </div>
                <div className="sub">
                <InstagramIcon className='icons'/>
                </div>
                <div className="sub">
                    <FacebookIcon className='icons'/>
                </div>
                <div className="sub">
                <TwitterIcon className='icons' />
                </div>
            </div>
        </div>
    </div>
  )
}
