import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Princing from './pages/Princing';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-slate-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Princing" element={<Princing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
