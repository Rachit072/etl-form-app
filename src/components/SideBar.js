import React from 'react'
import Sectioncard from './Sectioncard'

function SideBar() {
  return (
    <div>
      <ul>
        <li className='section'>
          <h3>New Form</h3>
          <p>start creating a new form with the wide option of fields available</p>
        </li>
        <li style={{listStyle:'none'}}><hr/></li>
        <li className='section'>Details Collection</li>
        <li className='section'>Document Collection</li>
        <li className='section'>Statement Of Purpose</li>
        <li className='section'>Interview Availability</li>
      </ul>
    </div>
  )
}

export default SideBar
