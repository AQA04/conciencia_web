import { BookOpen, Scale, ArrowRight, Activity, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fundamentos = () => {
  return (
    <div className="min-h-screen bg-brand-light pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Estilo referencia editorial */}
        <div className="flex items-center text-sm font-bold uppercase tracking-wider mb-8">
          <Link to="/" className="bg-brand-yellow text-brand-dark px-3 py-1 hover:bg-yellow-400 transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-brand-dark">/</span>
          <span className="text-gray-500">Fundamentos</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight mb-8">
          El Horizonte Ético: La base filosófica del diseño tecnológico consciente
        </h1>

        {/* Autor/Fecha - Estilo editorial */}
        <div className="flex items-center text-sm font-bold text-brand-dark border-b-2 border-brand-dark/10 pb-6 mb-10">
          <span className="uppercase">Por: <span className="text-blue-600">Equipo Editorial IUE</span></span>
          <span className="mx-4 text-brand-dark/20">|</span>
          <span>Mayo 2026</span>
        </div>

        {/* Justificación: El Corazón del Proyecto */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-brand-dark mb-6 flex items-center">
            El Corazón del Proyecto
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-dark"></div>
              <h3 className="text-xl font-bold mb-4">¿Qué buscamos?</h3>
              <p className="text-gray-600 leading-relaxed">
                Desarrollar una plataforma de <strong className="text-brand-dark">"Diseño Consciente de la Ética"</strong> que permita aterrizar conceptos filosóficos abstractos en decisiones técnicas y de arquitectura reales.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-yellow"></div>
              <h3 className="text-xl font-bold mb-4">¿Por qué ahora?</h3>
              <p className="text-gray-600 leading-relaxed">
                Existe una peligrosa desconexión entre la eficiencia técnica y la integridad de la investigación. Los ingenieros deciden diariamente entre velocidad/costo y justicia/privacidad, a menudo sin un marco ético claro.
              </p>
            </div>
          </div>
        </section>

        {/* Voces de la Filosofía */}
        <section>
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Acento decorativo */}
            <div className="absolute -top-10 -right-10 text-brand-yellow opacity-10">
              <Scale className="w-64 h-64" />
            </div>

            <h2 className="text-3xl font-black mb-8 relative z-10 flex items-center">
              Voces de la Filosofía
            </h2>
            <p className="text-gray-300 mb-10 text-lg relative z-10">
              ¿Cómo abordamos los dilemas algorítmicos actuales utilizando los referentes teóricos clásicos?
            </p>

            <div className="space-y-8 relative z-10">
              {/* Aristóteles */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-start">
                  <div className="bg-brand-yellow text-brand-dark p-3 rounded-lg mr-4 mt-1">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Aristóteles: La Phrónesis</h3>
                    <p className="text-gray-300 leading-relaxed">
                      La <span className="text-brand-yellow font-medium">prudencia</span> para decidir cuando no hay un algoritmo o manual estricto que dicte la respuesta correcta. Es la habilidad del ingeniero para juzgar el contexto de cada implementación.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kant vs Mill */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-start">
                  <div className="bg-brand-yellow text-brand-dark p-3 rounded-lg mr-4 mt-1">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Kant vs. Mill</h3>
                    <p className="text-gray-300 leading-relaxed">
                      El contraste entre el <span className="text-brand-yellow font-medium">imperativo categórico</span> (los derechos digitales inquebrantables de los usuarios) frente al cálculo utilitarista (la optimización y el bien mayor algorítmico).
                    </p>
                  </div>
                </div>
              </div>

              {/* Estoicismo */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-start">
                  <div className="bg-brand-yellow text-brand-dark p-3 rounded-lg mr-4 mt-1">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Estoicismo (Epicteto)</h3>
                    <p className="text-gray-300 leading-relaxed">
                      La <span className="text-brand-yellow font-medium">dicotomía del control</span> aplicada al desarrollo de software: enfocarnos en las decisiones técnicas que realmente dependen de nosotros, como la transparencia de nuestro propio código, frente a sistemas de terceros que no controlamos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Link */}
        <div className="mt-16 flex justify-end">
          <Link to="/realidades" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow transition-colors text-lg">
            Siguiente: Vacíos en la Infoesfera <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Fundamentos;
