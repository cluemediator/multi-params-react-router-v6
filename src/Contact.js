import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  return <div>
    <h4>Contact</h4>
    <p>This is Contact page.</p>
    <p>Select location from the list.</p>
    <ul>
      <li><Link to="location/1">Location 1</Link></li>
      <li><Link to="location/2">Location 2</Link></li>
      <li><Link to="/contact/location/3">Location 3</Link></li>
    </ul>
    <Outlet />
  </div>
}

export default Contact;