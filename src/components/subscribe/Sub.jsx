import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './sub.scss'
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
export default function Sub({open, setOpen}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [lastName, setLastName] = useState("")
    return (
        <div className={'subscribe '+(open && "active")}>
            
            <div className='sub'>
                <div className="borderd">
                    <div className="first">
                        <span>Subscribe to EMC</span>
                        
                    </div>
                    <div className="second">
                        <div className="textarea">
                            <TextField className='texting' label="First Name"
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                type="text" 
                                />
                        </div>
                        <div className="textarea">
                            <TextField className='texting' label="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                fullWidth
                                type="text" />
                        </div>
                        <div className="textarea">
                            <TextField className='texting' label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                type="email" />
                        </div>
                    </div>
                    <div className="third">
                        <button onClick={() => {setOpen(!open)}}>
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
         
        </div>
    )
}
