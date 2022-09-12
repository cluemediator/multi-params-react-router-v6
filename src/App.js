import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import ContactLocation from './ContactLocation';
import Demo from './Demo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h3>Multiple parameters with React Router v6 - <a href="https://cluemediator.com" target="_blank">Clue Mediator</a></h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about/1">About 1</Link></li>
          <li><Link to="/about/2">About 2</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/demo">Demo</Link></li>
          <li><Link to="/demo/p1">Demo/p1</Link></li>
          <li><Link to="/demo/p1/p2">Demo/p1/p2</Link></li>
        </ul>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="about">
            <Route index element={<About />} />
            <Route path=":id" element={<About />} />
          </Route>
          <Route path="contact" element={<Contact />}>
            <Route path="location/:id" element={<ContactLocation />} />
          </Route>
          <Route path="demo">
            <Route index element={<Demo />} />
            <Route path=":param1" element={<Demo />} />
            <Route path=":param1/:param2" element={<Demo />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
