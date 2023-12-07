import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div>
          <span className='nav-item-active'><FontAwesomeIcon icon={faCheckCircle} /></span>
          Form Selection
        </div>
        <div>
          <span className='nav-item'><FontAwesomeIcon icon={faCheckCircle} /></span>
          Setup
        </div>
        <div>
          <span className='nav-item'><FontAwesomeIcon icon={faCheckCircle} /></span>
          Creation
        </div>
        <div>
          <span className='nav-item'><FontAwesomeIcon icon={faCheckCircle} /></span>
          Review
        </div>
        <div>X</div>
      </div>
    </div>
  )
}

export default Navbar;
