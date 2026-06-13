import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import PlatformPage from './PlatformPage';
import PlaceholderPage from './PlaceholderPage';
import Contact from './Contact';
import Signup from './Signup';
import Login from './Login';
import IndustrySolutions from './IndustrySolutions';
import { platformPages } from './platformPages';

const App = () => (
  <div className="app-layout">
    <Navbar />
    <main className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={platformPages.drafting.path}
          element={<PlatformPage page={platformPages.drafting} />}
        />
        <Route
          path={platformPages.research.path}
          element={<PlatformPage page={platformPages.research} />}
        />
        <Route
          path={platformPages.vault.path}
          element={<PlatformPage page={platformPages.vault} />}
        />
        <Route
          path={platformPages.security.path}
          element={<PlatformPage page={platformPages.security} />}
        />
        <Route path="/Industry-Solutions" element={<IndustrySolutions />} />
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
