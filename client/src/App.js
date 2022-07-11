import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {

  const [ currentPage, setCurrentPage ] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'projects') {
      return <Projects />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    else if (currentPage === 'home') {
      return <Home />;
    }
    else {
      return <Home />
    }
}

  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div className='page-container'>
      <header>
        <div className='d-grid header-grid'>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      <main>
        <div className='main-wrap'>
          {renderPage()}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
