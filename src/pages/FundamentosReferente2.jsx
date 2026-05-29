import { BookOpen, Scale, ArrowRight, Cpu, Users, Eye, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const eticaProfesional = [
  {
    icon: <Users className="w-6 h-6" />,
    titulo: 'La Promesa Social de la Profesión',
    autor: 'Adela Cortina (2013)',
    color: 'border-amber-400',
    accent: 'text-amber-500',
    texto: `Adela Cortina ha sostenido que toda profesión encierra una promesa social implícita: provee un bien específico —la salud, la justicia, la información confiable, el software seguro— y a cambio recibe legitimidad, confianza y, en muchos casos, monopolio de ejercicio (Cortina, 2013). Esta concepción desplaza el centro de gravedad de la relación laboral: el profesional no responde únicamente ante su empleador sino ante la sociedad que le otorgó la confianza de ejercer.

Para la ingeniería informática, la promesa social es la de construir sistemas que funcionen con integridad, que no comprometan la seguridad de quienes los usan, y que sean honestos sobre sus limitaciones. Incumplir esa promesa no es simplemente un error técnico: es una ruptura del contrato que legitima el ejercicio profesional. Los códigos deontológicos son la formalización pública de esa promesa.`,
  },
  {
    icon: <Globe className="w-6 h-6" />,
    titulo: 'Teoría de los Stakeholders',
    autor: 'R. Edward Freeman (1984/2010)',
    color: 'border-blue-400',
    accent: 'text-blue-500',
    texto: `La responsabilidad social profesional no se agota en la relación bilateral con el cliente o empleador. Freeman (1984/2010) desarrolló la teoría de los stakeholders para mostrar que toda decisión organizacional afecta —y debe responder ante— un conjunto amplio de partes interesadas: usuarios, comunidades, trabajadores, entorno natural, generaciones futuras.

Trasladada a la ingeniería informática, esta perspectiva exige que el profesional mapee sistemáticamente quiénes son afectados por un sistema antes de diseñarlo, no solo quién lo paga. Un algoritmo de contratación tiene stakeholders que van mucho más allá del departamento de Recursos Humanos que lo solicitó: incluye a los candidatos evaluados, a las comunidades históricamente discriminadas cuyos sesgos el modelo puede amplificar, y a la cultura organizacional que el sistema contribuye a moldear. Cortina (2008) refuerza esta perspectiva al insistir en que la responsabilidad social profesional exige considerar el impacto sobre todos los afectados, no solo sobre los contratantes.`,
  },
  {
    icon: <Scale className="w-6 h-6" />,
    titulo: 'Marcos Normativos Internacionales',
    autor: 'ACM (2018) · IEEE (2020)',
    color: 'border-emerald-400',
    accent: 'text-emerald-600',
    texto: `Los referentes normativos más consolidados para la ingeniería informática son el Código de Ética y Conducta Profesional de la ACM (Association for Computing Machinery, 2018) y el Código de Ética de la IEEE (Institute of Electrical and Electronics Engineers, 2020). Ambos documentos articulan principios como evitar el daño, respetar la privacidad, actuar con honestidad y reconocer la responsabilidad pública del trabajo técnico.

Sin embargo, un código es una herramienta, no una garantía. Su valor depende de la capacidad del profesional para interpretarlo en situaciones no previstas, lo que remite directamente a la phrónesis aristotélica. El código ACM (2018) establece explícitamente que los profesionales deben considerar de forma proactiva los impactos negativos potenciales de su trabajo; el IEEE (2020) subordina la lealtad organizacional al bienestar público cuando entran en conflicto. Estas disposiciones solo cobran vida si el ingeniero ha cultivado el juicio necesario para aplicarlas cuando la presión organizacional empuja en dirección contraria.`,
  },
];

const dilemmas = [
  {
    icon: <Cpu className="w-5 h-5" />,
    nombre: "Cathy O'Neil",
    obra: 'Weapons of Math Destruction, 2016',
    color: 'bg-red-50 border-red-200',
    accentText: 'text-red-700',
    descripcion: `O'Neil documentó cómo modelos predictivos empleados en justicia penal, educación y crédito reproducen y amplifican desigualdades existentes. Su noción de armas de destrucción matemática designa sistemas que combinan tres características: opacidad (no son auditables), escala (afectan a millones) y daño (perjudican sistemáticamente a poblaciones vulnerables). La apariencia de objetividad matemática los vuelve políticamente difíciles de impugnar, lo que amplifica su poder de daño.`,
  },
  {
    icon: <Eye className="w-5 h-5" />,
    nombre: 'Helen Nissenbaum',
    obra: 'Privacy in Context, 2010',
    color: 'bg-blue-50 border-blue-200',
    accentText: 'text-blue-700',
    descripcion: `Nissenbaum propuso el concepto de integridad contextual para redefinir la privacidad: esta no consiste en ocultar información sino en que la información fluya conforme a las normas del contexto social en que fue originalmente compartida. Una violación de privacidad ocurre cuando datos entregados en un contexto —médico, educativo, íntimo— circulan en otro —publicitario, policial, comercial— sin autorización. Esta definición tiene implicaciones directas para el diseño de APIs, la gestión de consentimiento y la arquitectura de bases de datos.`,
  },
  {
    icon: <Zap className="w-5 h-5" />,
    nombre: 'Luciano Floridi',
    obra: 'The Ethics of Information, 2013',
    color: 'bg-purple-50 border-purple-200',
    accentText: 'text-purple-700',
    descripcion: `Floridi ha propuesto pensar el entorno digital como una infoesfera: un ambiente informacional donde los agentes —humanos y artificiales— mantienen relaciones que exigen principios éticos propios, no reducibles a los marcos tradicionales diseñados para agentes puramente humanos. En la infoesfera, acciones como recopilar datos, entrenar modelos o diseñar interfaces tienen consecuencias morales que van más allá del daño físico directo y exigen nuevos criterios de evaluación ética.`,
  },
];

const referencias = [
  'Association for Computing Machinery. (2018). ACM code of ethics and professional conduct. https://www.acm.org/code-of-ethics',
  'Cortina, A. (2008). Ética de la empresa: claves para una nueva cultura empresarial (8.ª ed.). Trotta.',
  'Cortina, A. (2013). ¿Para qué sirve realmente la ética? Paidós.',
  'Floridi, L. (2013). The ethics of information. Oxford University Press.',
  'Freeman, R. E. (2010). Strategic management: A stakeholder approach. Cambridge University Press. (Obra original publicada en 1984)',
  'Institute of Electrical and Electronics Engineers. (2020). IEEE code of ethics. https://www.ieee.org/about/corporate/governance/p7-8.html',
  'Nissenbaum, H. (2010). Privacy in context: Technology, policy, and the integrity of social life. Stanford University Press.',
  "O'Neil, C. (2016). Weapons of math destruction: How big data increases inequality and threatens democracy. Crown.",
];


// ─── Page ─────────────────────────────────────────────────────────────────────

const Fundamentos = () => {


  return (
    <div className="min-h-screen bg-brand-light pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center text-sm font-bold uppercase tracking-wider mb-8">
          <Link to="/" className="bg-brand-yellow text-brand-dark px-3 py-1 hover:bg-yellow-400 transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-brand-dark">/</span>
          <span className="text-gray-500">Fundamentos</span>
        </div>

        {/* ── Referente 2 ────────────────────────────────────────────────── */}
        <section className="mb-16">
          
          <h2 className="text-3xl font-black text-brand-dark mb-3">
            Ética Profesional y Responsabilidad Social
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Si el Referente 1 preguntó qué significa actuar bien, este pregunta qué significa <em>ejercer bien una profesión</em>. La ética profesional no es la simple aplicación de principios generales a un oficio: es un ámbito con lógica propia donde convergen el contrato social implícito de una profesión, las normativas vigentes y el juicio del agente individual.
          </p>

          {/* Tarjetas de pilares */}
          <div className="space-y-6 mb-12">
            {eticaProfesional.map((item, i) => (
              <div key={i} className={`bg-white border ${item.color} border-l-4 rounded-r-xl p-6 md:p-8 shadow-sm`}>
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-gray-50 ${item.accent} flex-shrink-0 mt-1`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-brand-dark text-lg mb-1">{item.titulo}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wide mb-4 ${item.accent}`}>{item.autor}</p>
                    {item.texto.split('\n\n').map((p, j) => (
                      <p key={j} className="text-gray-700 leading-relaxed text-[0.95rem] mb-3 last:mb-0">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dilemas contemporáneos */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-black text-brand-dark mb-2">
              Tres dilemas que ponen a prueba el marco
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Los principios de Cortina, Freeman y los códigos ACM/IEEE adquieren su verdadera dimensión frente a dilemas contemporáneos concretos que los ponen bajo tensión.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {dilemmas.map((d, i) => (
                <div key={i} className={`${d.color} border rounded-xl p-5`}>
                  <div className={`flex items-center gap-2 mb-3 ${d.accentText}`}>
                    {d.icon}
                    <span className="font-black text-sm">{d.nombre}</span>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-3">{d.obra}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{d.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cierre Ref. 2 */}
          <div className="mt-8 bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed text-[0.95rem]">
              Frente a estos dilemas, la identidad profesional del ingeniero no puede reducirse al cumplimiento técnico. Se requiere <strong className="text-brand-dark">phrónesis</strong> para deliberar ante lo no reglado, <strong className="text-brand-dark">firmeza kantiana</strong> para no instrumentalizar al usuario, <strong className="text-brand-dark">lucidez maquiaveliana</strong> para reconocer los costos reales de cada decisión arquitectónica, y <strong className="text-brand-dark">disciplina estoica</strong> para sostener criterio donde la presión organizacional empuja en sentido contrario. El código deontológico, en este marco, funciona menos como jaula normativa que como brújula: orienta sin eximir del juicio.
            </p>
          </div>
        </section>

        {/* ── Referencias ────────────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-brand-dark" />
            <h2 className="text-2xl font-black text-brand-dark">Referencias</h2>
          </div>
          <p className="text-xs text-gray-400 mb-6 italic">
            Formato APA 7.
          </p>
          <ol className="space-y-3">
            {referencias.map((ref, i) => (
              <li
                key={i}
                className="text-sm text-gray-600 leading-relaxed pl-8 -indent-8"
              >
                {ref}
              </li>
            ))}
          </ol>
        </section>

        {/* Footer Link */}
        <div className="mt-12 flex justify-between items-center border-t-2 border-brand-dark/10 pt-8">
          <Link to="/fundamentos" className="inline-flex items-center text-gray-400 font-bold hover:text-brand-dark transition-colors">
            ← Fundamentos Filosóficos de la Ética
          </Link>
          <Link to="/realidades" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow transition-colors text-lg">
            Siguiente: Vacíos en la Infoesfera <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Fundamentos;