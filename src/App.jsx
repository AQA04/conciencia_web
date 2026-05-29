import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './pages/Landing';

import Fundamentos from './pages/FundamentosReferente1';
import Fundamentos2 from './pages/FundamentosReferente2';

import Realidades from './pages/Realidades';
import Contacto from './pages/Contacto';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/fundamentos" element={<Fundamentos />} />
            <Route path="/fundamentos2" element={<Fundamentos2 />} />
            <Route path="/realidades" element={<Realidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
