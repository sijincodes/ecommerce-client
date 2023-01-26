import React from 'react'

import "./Contact.scss"

function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>SUBSCRIBE   TO   OUR   NEWSLETTER</span>
            <div className="mail">
                <input type="text" placeholder='Enter Email' />
                <button>Join Us</button>
            </div>
           
        </div>
    </div>
  )
}

export default Contact