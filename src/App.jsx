import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PlaceholderPage from './PlaceholderPage';
import Contact from './Contact';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what-we-do" element={<PlaceholderPage title="What we do" />} />
      <Route path="/Industry-Solutions" element={<PlaceholderPage title="Industry Solutions" />} />
      <Route path="/contact" element={<Contact title="Contact" />} />
    </Routes>
  </>
);

export default App;
