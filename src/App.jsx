import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home/Home';
import Providers from './pages/Who-We-Serve/Providers';
import ChartReview from './pages/products/Chart-Review/Chart-Review';
import RiskAdjustments from './pages/products/Risk-Adjustments/RiskAdjustments';
import QualityManagement from './pages/products/Quality-Management/QualityManagement';
import Analytics from './pages/products/Analytics/Analytics';
import About from './Company/About/About';
import CoreTechnologies from './Company/CoreTechnology/CoreTechnology';




// Footer Component


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hospitals" element={< Providers/>} />
            <Route path="/chart-review" element={<ChartReview/>} />
            <Route path="/risk-adjustments" element={<RiskAdjustments/>} />
            <Route path="/quality-management" element={<QualityManagement/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/technologies" element={<CoreTechnologies/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;