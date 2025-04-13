import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
          <Hero />
          <Ecosystem />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
