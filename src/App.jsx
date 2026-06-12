import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import PlaceholderPage from './PlaceholderPage';
import Contact from './Contact';
import Signup from './Signup';
import Login from './Login';

const App = () => (
  <div className="app-layout">
    <Navbar />
    <main className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<PlaceholderPage title="What we do" />} />
        <Route path="/Industry-Solutions" element={<PlaceholderPage title="Industry Solutions" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
        <Route path="/terms" element={<PlaceholderPage title="Terms and Conditions" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
