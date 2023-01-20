import React from 'react'

import "./Contact.scss"

function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='Enter Email' />
                <button>Join Us</button>
            </div>
           
        </div>
    </div>
  )
}

export default Contact