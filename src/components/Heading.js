import React from 'react'
import '../style/Heading.css'

function Heading() {
  return (
   <>
   <header className='header'>

    <div className='company-logo'>MagsWay</div>

    <ul className='links'>
       <li>Home</li>
       <li>Discover Element</li>
       <li>Pricing</li>
       <li>Contact Us</li>
    </ul>

    <button className='sign-in-button'>Sign In</button>
    </header>
   </>
  )
}

export default Heading