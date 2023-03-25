import React from 'react';
import './App.css'
import Header from './Components/header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;