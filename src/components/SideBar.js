import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function SideBar() {
  const location = useLocation();
  return (
    <div className='sidebar'>
      <ul>
        <li className='section' style={{backgroundColor:"grey",color:"white"}}>
          <Link className='link' to='/'>
            <h4>New Form</h4>
            <p style={{color:"white"}}>Start creating a new form with the wide option of fields available</p>
          </Link>
        </li>
        <li className='li-text'>Explore the following template</li>
        <li className={`section ${location.pathname === '/' ? 'active' : ''}`}>
          <Link className='link' to='/'>
            <h4>Details Collection</h4>
            <p>Collect information from candidates on their education, work experience, contact no,etc. </p>
          </Link>
        </li>
        <li className={`section ${location.pathname === '/document' ? 'active' : ''}`}>
          <Link className='link' to='/document'>
            <h4>Document Collection</h4>
            <p>Save time and efforts explore this template to find a set of questions required for document collection</p>
          </Link>
        </li>
        <li className={`section ${location.pathname === '/sop' ? 'active' : ''}`}>
          <Link className='link' to='/sop'>
            <h4>Statement Of Propuse</h4>
            <p>Start creating a new form with the wide option of fields available</p>
          </Link>
        </li>
        <li className={`section ${location.pathname === '/interview' ? 'active' : ''}`}>
          <Link className='link' to='/interview'>
            <h4>Interview Availability</h4>
            <p>Check candidate for interview availability</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;
