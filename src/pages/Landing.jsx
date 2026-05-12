import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const phrases = [
  "La arquitectura de software no es neutral; es una decisión de valores.",
  "La eficiencia técnica nunca debe comprometer la justicia social.",
  "Diseño consciente: de lo abstracto a las decisiones reales.",
  "Combatamos el sesgo algorítmico y la exclusión digital."
];

const Landing = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Ticker animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // fade out duration
    }, 4500); // display duration
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for tech/neural network background */}
        <img
          src="https://images.unsplash.com/photo-1620825937374-87fc1d620f8d?q=80&w=2070&auto=format&fit=crop"
          alt="Neural Network Background"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Conciencia <br />
            y <span className="relative inline-block">
              Profesión
              {/* Yellow organic circle accent from the reference image */}
              <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -z-10 text-brand-yellow/90" viewBox="0 0 300 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M 15 50 Q 50 10 150 15 T 285 50 Q 280 90 150 85 T 15 50" className="animate-[dash_3s_ease-in-out_forwards]" strokeDasharray="1000" strokeDashoffset="0" />
              </svg>
            </span>.
          </h1>

          <h2 className="text-xl md:text-3xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed">
            Ética aplicada para la vida laboral y social en la era digital.
          </h2>

          {/* Interactive Component & CTA */}
          <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center max-w-3xl mb-8 space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex-grow flex items-center w-full px-4 h-14">
              <Cpu className="text-gray-400 mr-3 h-5 w-5 flex-shrink-0" />
              <div className="overflow-hidden relative h-6 w-full">
                <p
                  className={`absolute inset-0 text-sm sm:text-base text-gray-600 font-medium transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                >
                  {phrases[currentPhrase]}
                </p>
              </div>
            </div>
            <Link
              to="/fundamentos"
              className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-400 text-brand-dark px-8 h-14 flex items-center justify-center rounded-lg font-bold text-lg transition-colors group"
            >
              Lectura Rápida
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logos Strip */}
      <div className="absolute bottom-0 w-full bg-brand-dark/80 backdrop-blur-md border-t border-white/10 py-6">
        <div className="w-[90%] max-w-7xl mx-auto flex flex-wrap justify-between items-center opacity-70 gap-y-4">
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="block p-3 text-gray-400 hover:text-white font-bold text-sm md:text-base uppercase tracking-widest transition-colors">IEEE</a>
          <a href="https://www.acm.org/" target="_blank" rel="noopener noreferrer" className="block p-3 text-gray-400 hover:text-white font-bold text-sm md:text-base uppercase tracking-widest transition-colors">ACM</a>
          <a href="https://www.iue.edu.co/" target="_blank" rel="noopener noreferrer" className="block p-3 text-gray-400 hover:text-white font-bold text-sm md:text-base uppercase tracking-widest transition-colors">IUE</a>
          <a href="https://dle.rae.es/ético" target="_blank" rel="noopener noreferrer" className="block p-3 text-gray-400 hover:text-white font-bold text-sm md:text-base uppercase tracking-widest transition-colors">Ética</a>
          <a href="https://dle.rae.es/ingenier%C3%ADa" target="_blank" rel="noopener noreferrer" className="block p-3 text-gray-400 hover:text-white font-bold text-sm md:text-base uppercase tracking-widest transition-colors">Ingeniería</a>
        </div>
      </div>

    </div>
  );
};

export default Landing;
