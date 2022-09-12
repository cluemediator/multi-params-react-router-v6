import React from 'react';
import { useParams } from 'react-router-dom';

const ContactLocation = () => {
  const { id } = useParams();
  return <div style={{ marginTop: 10 }}>
    <b>Selected Location: {id}</b>
  </div>
}

export default ContactLocation;