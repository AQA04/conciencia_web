import { AlertTriangle, ShieldCheck, FileCode, Users, BrainCircuit, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Realidades = () => {
  const casos = [
    {
      icon: <FileCode className="h-8 w-8 text-red-500" />,
      title: "Secuestro de Código",
      description: "Los riesgos en la cadena de confianza de librerías de código abierto (Open Source). Un paquete comprometido puede afectar a miles de aplicaciones bancarias, gubernamentales y civiles. ¿De quién es la responsabilidad ética?",
      tag: "Ciberseguridad"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Suplantación de Identidad",
      description: "El impacto devastador de los deepfakes en la confianza digital. La creación de algoritmos generativos sin marcas de agua ni sistemas de trazabilidad erosiona la verdad como concepto colectivo.",
      tag: "Ingeniería Social"
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-purple-500" />,
      title: "Sesgos en Inteligencia Artificial",
      description: "Análisis de cómo los modelos predictivos pueden convertirse en 'armas de destrucción matemática'. Algoritmos de contratación o justicia penal entrenados con datos históricos perpetúan la discriminación sistemática.",
      tag: "Machine Learning"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm font-bold uppercase tracking-wider mb-8">
          <Link to="/" className="bg-brand-yellow text-brand-dark px-3 py-1 hover:bg-yellow-400 transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-brand-dark">/</span>
          <span className="text-gray-500">Vacíos Éticos</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight mb-6">
            Vacíos en la Infoesfera: Realidades Técnicas
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            El software ha devorado el mundo, pero nuestras estructuras de responsabilidad han quedado rezagadas. Analicemos las vulnerabilidades sistemáticas contemporáneas.
          </p>
        </div>

        {/* Casos de Estudio Críticos */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-brand-dark mb-8 flex items-center border-b-2 border-brand-dark/10 pb-4">
            <AlertTriangle className="mr-3 text-brand-dark h-7 w-7" />
            Casos de Estudio Críticos
          </h2>
          
          <div className="space-y-6">
            {casos.map((caso, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow group flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-gray-50 p-4 rounded-full border border-gray-100 group-hover:scale-110 transition-transform">
                  {caso.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-brand-dark">{caso.title}</h3>
                    <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-wide text-gray-600 rounded-full">
                      {caso.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {caso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brújula Normativa */}
        <section>
          <div className="bg-brand-yellow text-brand-dark p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-md border border-yellow-400">
            {/* Decors */}
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <ShieldCheck className="w-48 h-48" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-black mb-6 flex items-center">
                <ShieldCheck className="mr-4 h-8 w-8" />
                La Brújula Normativa
              </h2>
              <p className="text-brand-dark/80 text-lg mb-8 font-medium leading-relaxed">
                Frente a estos vacíos, la industria no está completamente a oscuras. Los códigos deontológicos internacionales actúan como nuestra primera línea de defensa para evitar el daño y respetar la integridad contextual.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/90 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                  <h3 className="font-black text-xl mb-2 tracking-tight">ACM (2018)</h3>
                  <p className="text-sm font-medium text-gray-700">
                    Association for Computing Machinery. Enfatiza que los profesionales deben considerar de forma proactiva si su trabajo puede resultar en impactos negativos y tomar medidas para mitigarlos.
                  </p>
                </div>
                <div className="bg-white/90 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                  <h3 className="font-black text-xl mb-2 tracking-tight">IEEE (2020)</h3>
                  <p className="text-sm font-medium text-gray-700">
                    Instituto de Ingenieros Eléctricos y Electrónicos. Centrado en la protección integral de la seguridad pública, la salud, el bienestar y el medio ambiente frente al desarrollo tecnológico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="mt-16 flex justify-between items-center border-t-2 border-brand-dark/10 pt-8">
          <Link to="/fundamentos" className="inline-flex items-center text-gray-500 font-bold hover:text-brand-dark transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Anterior: Fundamentos
          </Link>
          <Link to="/contacto" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow transition-colors text-lg">
            Siguiente: Nuestro Compromiso <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Realidades;
