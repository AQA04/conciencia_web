import { Link } from 'react-router-dom';
import { Mail, UserCircle, Code, Send, Zap, Shield, Users, ArrowLeft } from 'lucide-react';

const Contacto = () => {
  const team = [
    {
      name: "Alejandro Quintero",
      role: "Especialista Front-end",
      focus: "Front-end ético, accesibilidad universal y eliminación de patrones oscuros.",
      icon: <Zap className="w-6 h-6 text-brand-yellow" />,
      image: "/AlejandroQuinteroArbelaez.png",
      linkedin: "https://www.linkedin.com/in/miguel-angel-herrera-7429b4295/"
    },
    {
      name: "David Santiago Aguirre",
      role: "Especialista IA & Analítica",
      focus: "Mitigación y combate directo del sesgo algorítmico en modelos predictivos.",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      image: "/DavidSantiagoAguirre.png",
      linkedin: "https://www.linkedin.com/in/david-aguirre-13a911325/"
    },
    {
      name: "Miguel Angel Herrera Jaramillo",
      role: "Investigación Digital",
      focus: "Liderazgo en investigación, transparencia algorítmica y arquitectura de datos.",
      icon: <Users className="w-6 h-6 text-green-500" />,
      linkedin: "https://www.linkedin.com/in/miguel-angel-herrera-7429b4295/"
    },
    {
      name: "Juan Jose",
      role: "Pseudo-investigador",
      focus: "Debia hacer la interfaz pero nos retraso. Pero realizo parte de la investigacion.",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      linkedin: ""
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm font-bold uppercase tracking-wider mb-8">
          <Link to="/" className="bg-brand-yellow text-brand-dark px-3 py-1 hover:bg-yellow-400 transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-brand-dark">/</span>
          <span className="text-gray-500">Nuestro Compromiso</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight mb-6">
            Liderazgo Ético: Nuestro Compromiso
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-brand-yellow pl-4 max-w-4xl">
            Definimos la ética no como un obstáculo regulatorio, sino como la principal ventaja competitiva y motor de empleabilidad del futuro ingeniero de la IUE.
          </p>
        </div>

        {/* Tarjetas del Equipo */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-brand-dark mb-8">El Equipo Editorial</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform group flex flex-col h-full">
                {member.image ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-gray-100 group-hover:border-brand-yellow transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border-2 border-gray-100 group-hover:bg-brand-dark group-hover:border-brand-dark transition-colors">
                    <div className="group-hover:text-white transition-colors">{member.icon}</div>
                  </div>
                )}
                
                <h3 className="text-lg font-bold text-brand-dark mb-1 leading-tight">{member.name}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {member.focus}
                </p>
                
                <div className="mt-6 border-t border-gray-100 pt-4 flex space-x-3">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold text-gray-500 hover:text-[#0A66C2] transition-colors">
                      <UserCircle className="w-5 h-5 mr-1" /> LinkedIn
                    </a>
                  ) : (
                    <span className="flex items-center text-sm font-bold text-gray-300 cursor-not-allowed">
                      <UserCircle className="w-5 h-5 mr-1" /> No disponible
                    </span>
                  )}
                  <button className="text-gray-400 hover:text-brand-dark transition-colors"><Code className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-16">
          {/* Liderazgo Transformador */}
          <section>
             <h2 className="text-2xl font-black text-brand-dark mb-6 text-center">El Futuro es Consciente</h2>
             <div className="bg-brand-dark text-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden text-center max-w-4xl mx-auto">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow opacity-10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow opacity-10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                <p className="text-gray-300 leading-relaxed relative z-10 text-lg md:text-xl font-medium">
                  Un ingeniero informático posee un poder inmenso: el de construir la infraestructura digital de la sociedad. Con ese poder viene la obligación de actuar no sólo como un técnico, sino como un guardián. Integrar la conciencia con la profesión significa entender que el código es también una forma de legislación. Si construimos sistemas sin un norte ético, corremos el riesgo de automatizar nuestras peores fallas humanas. Por ello, la ética no es un obstáculo para la innovación; es la brújula que asegura que el progreso tecnológico realmente signifique un avance para la humanidad y no solo un incremento en la capacidad de procesamiento.
                </p>
             </div>
          </section>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-start items-center border-t-2 border-brand-dark/10 pt-8">
          <Link to="/realidades" className="inline-flex items-center text-gray-500 font-bold hover:text-brand-dark transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Anterior: Vacíos Éticos
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contacto;
