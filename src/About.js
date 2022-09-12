import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const { id } = useParams();
  return <div>
    <h4>About</h4>
    <p>This is About page.</p>
    {id ? <b>ID: {id}</b> : <i>ID is optional.</i>}
  </div>
}

export default About;