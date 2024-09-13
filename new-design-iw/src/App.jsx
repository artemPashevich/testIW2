import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Preloader from './components/preloader/preloader.jsx';
import Cursor from './animations/cursor.jsx';
import PrivacyPolicy from './components/privacy/privacy.jsx';
import Terms from './components/privacy/terms.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/Header/header.jsx';
import MainPage from './components/pages/MainPage.jsx'

function App() {


  return (
    
    <>
    <Cursor/>
    <Preloader />

    <div className="App">

<Router>
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <MainPage />
            </>
          } />

          <Route path="/policyprivacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        
        <Footer />
      </Router>
      
    </div>
    </>
  );
}

export default App
