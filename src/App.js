import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import News from './components/News';

function App() {
  React.useEffect(() => {
    // Initialize Bootstrap's JavaScript plugins
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Router>
      <div className="App dark-main">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Ecosystem />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
