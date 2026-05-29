import { BookOpen, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

const voces = [
  {
    num: '01',
    autor: 'Aristóteles',
    concepto: 'Phrónesis',
    color: 'border-amber-400',
    accent: 'text-amber-400',
    bg: 'bg-amber-400',
    cita: 'Ética nicomáquea, trad. 1985',
    resumen: 'La prudencia práctica como facultad deliberativa ante lo particular.',
    desarrollo: `Aristóteles inaugura la tradición occidental de la ética de la virtud al sostener que el bien humano consiste en una actividad del alma conforme a la excelencia, desarrollada a lo largo de una vida (Aristóteles, trad. 1985). Su concepto central, phrónesis o prudencia práctica, designa la capacidad de deliberar correctamente sobre lo que conviene hacer en situaciones particulares donde las reglas generales resultan insuficientes.

La phrónesis no es la aplicación mecánica de principios: es el juicio que reconoce cuándo un principio no alcanza y exige razonamiento situado. Para el ingeniero informático, esto tiene una traducción directa: cada arquitectura de software, cada decisión sobre el tratamiento de datos, cada elección entre eficiencia y transparencia, se produce en un contexto que ningún manual puede anticipar completamente. La phrónesis es, en términos clásicos, lo que hoy se enfrenta cada vez que un dilema técnico carece de protocolo: decidir sin algoritmo.`,
  },
  {
    num: '02',
    autor: 'Kant y Mill',
    concepto: 'Deber vs. Consecuencia',
    color: 'border-blue-400',
    accent: 'text-blue-400',
    bg: 'bg-blue-400',
    cita: 'Kant, trad. 2012; Mill, trad. 2014',
    resumen: 'La tensión irresuelta entre deontología y consecuencialismo en el diseño técnico.',
    desarrollo: `Kant desplaza el eje de la virtud al deber. Su imperativo categórico ordena actuar según máximas que puedan universalizarse y tratar a la humanidad —en uno mismo y en los demás— siempre como fin y nunca meramente como medio (Kant, trad. 2012). La corrección moral de una acción no depende de sus resultados sino de su conformidad con el deber racional.

Frente a esta posición, Mill (trad. 2014) sostiene que la corrección de una acción se mide por el saldo de felicidad que produce: el principio de utilidad maximiza el bienestar del mayor número. Esta divergencia no es académica: es la estructura profunda de buena parte de los dilemas que enfrenta la ingeniería informática.

El utilitarismo es, de hecho, la lógica implícita de la optimización algorítmica: maximizamos el rendimiento para la mayoría, aceptamos falsos positivos como costo estadístico, priorizamos la precisión agregada sobre el caso individual. La dignidad kantiana, en cambio, sustenta los discursos contemporáneos de derechos digitales, consentimiento informado y no discriminación: hay personas que no pueden ser tratadas como variables de ajuste, independientemente de cuánto mejore el promedio.

Esta tensión no se resuelve eligiendo un bando. Un profesional formado en ambas tradiciones reconoce cuándo está calculando consecuencias y cuándo está violando un principio, y puede articular esa diferencia ante su equipo y sus clientes.`,
  },
  {
    num: '03',
    autor: 'Maquiavelo y Nietzsche',
    concepto: 'Crítica',
    color: 'border-red-400',
    accent: 'text-red-400',
    bg: 'bg-red-400',
    cita: 'Maquiavelo, trad. 2010; Nietzsche, trad. 2011',
    resumen: 'La sospecha genealógica sobre los universalismos morales y el costo real de decidir.',
    desarrollo: `Tanto Kant como Mill asumen que existe un suelo moral compartido desde el cual argumentar. Maquiavelo (trad. 2010) y Nietzsche (trad. 2011) cuestionan ese supuesto desde ángulos complementarios.

Maquiavelo, leído con rigor y no como manual de cinismo, muestra que quien ejerce responsabilidad sobre otros se enfrenta a situaciones donde toda opción disponible tiene costo moral. La virtù del gobernante —y por extensión, del líder técnico— consiste en asumir esa tragedia sin refugiarse en ilusiones de neutralidad. El líder de un equipo de desarrollo que decide entre plazo, calidad y seguridad raramente elige entre bien y mal; elige entre males de distinta magnitud y debe ser capaz de reconocerlo. Pretender que existe una opción "técnicamente correcta" exenta de consecuencias morales es, en términos maquiavelianos, una forma de irresponsabilidad.

Nietzsche (trad. 2011), por su parte, realiza una genealogía que desenmascara las pretensiones universalistas de la moral moderna: los valores no son evidentes ni eternos, son construcciones históricas que expresan relaciones de poder. La pregunta nietzscheana es incómoda pero necesaria en contextos corporativos: ¿son los valores éticos declarados en los documentos institucionales expresión de convicción profesional o dispositivos de legitimación y marketing? ¿Quién define, en cada organización, qué cuenta como "ético"?

Estas voces no suministran un código de conducta; ofrecen algo más valioso: entrenamiento en la sospecha crítica ante toda moral que se presenta como natural u obvia.`,
  },
  {
    num: '04',
    autor: 'Epicteto',
    concepto: 'Dicotomía del Control',
    color: 'border-emerald-400',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-400',
    cita: 'Epicteto, trad. 2013',
    resumen: 'La disciplina estoica como fundamento de la agencia ética bajo presión organizacional.',
    desarrollo: `Frente a la sospecha nietzscheana y la tragedia maquiaveliana, el estoicismo ofrece un suelo operativo. Epicteto (trad. 2013) formuló con precisión la dicotomía del control: existen cosas que dependen de nosotros —nuestras decisiones, nuestros juicios, nuestro trabajo bien hecho— y cosas que no dependen de nosotros —cómo será usado nuestro código, qué políticas adoptará la organización, qué hará el mercado con la herramienta que construimos.

Esta distinción tiene consecuencias prácticas directas para el ejercicio profesional. Un ingeniero que confunde lo que controla con lo que no controla opera en dos errores simétricos: o se paraliza ante consecuencias que no puede determinar, o se desresponsabiliza de decisiones que sí dependen de él. La dicotomía estoica libera al profesional para ejercer rigor ético máximo en su propio ámbito de agencia sin pretender controlar el ecosistema completo.

Aplicado al desarrollo de software: el ingeniero controla la documentación de los sesgos conocidos en su modelo, la claridad del código que escribe, la honestidad con que comunica los riesgos a sus superiores. No controla si la organización acepta esa comunicación ni si el usuario final lee los términos de privacidad. La responsabilidad ética habita precisamente en esa zona que sí depende de nosotros, y el estoicismo es el nombre clásico de la disciplina que la mantiene activa bajo presión organizacional.`,
  },
  {
    num: '05',
    autor: 'Shannon Vallor',
    concepto: 'Virtudes Tecnomorales',
    color: 'border-purple-400',
    accent: 'text-purple-400',
    bg: 'bg-purple-400',
    cita: 'Technology and the Virtues, 2016',
    resumen: 'La recuperación contemporánea de la ética de la virtud para un mundo mediado por tecnología emergente.',
    desarrollo: `Shannon Vallor (2016) construye el puente más directo entre la tradición filosófica clásica y los desafíos contemporáneos de la ingeniería informática. Recuperando explícitamente la ética aristotélica de la virtud, Vallor propone un conjunto de virtudes tecnomorales —entre ellas la honestidad, la humildad, el cuidado, la flexibilidad, la perspectiva y el coraje cívico— como disposiciones cultivables necesarias para habitar éticamente un mundo mediado por inteligencia artificial, redes sociales, biotecnología y sistemas de vigilancia.

La propuesta de Vallor corrige un déficit de los enfoques deontológicos y consecuencialistas: estos presuponen un agente ya formado que aplica principios o calcula resultados. Vallor pregunta, en cambio, cómo se forma ese agente, qué hábitos necesita desarrollar para que su juicio sea confiable cuando las reglas no alcancen y las consecuencias sean inciertas.

Para la formación del ingeniero informático, esto implica que la ética no es un módulo del plan de estudios sino una práctica continua: la humildad epistémica ante los límites de un modelo, el coraje cívico para reportar una vulnerabilidad o disentir de una decisión arquitectónica éticamente comprometida, el cuidado como orientación profesional que no reduce al usuario a un dato de comportamiento. La obra de Vallor demuestra que los clásicos no son piezas de museo sino herramientas vivas, y que la distancia entre Aristóteles y una auditoría de sesgos algorítmicos es menor de lo que parece.`,
  },
];

const referencias = [
  'Aristóteles. (1985). Ética nicomáquea (J. Pallí Bonet, Trad.). Gredos. (Obra original ca. 340 a.C.)',
  'Epicteto. (2013). Enquiridión (J. Lara Nava, Trad.). Gredos. (Obra original ca. 125 d.C.)',
  'Kant, I. (2012). Fundamentación de la metafísica de las costumbres (R. R. Aramayo, Trad.). Alianza. (Obra original 1785)',
  'Maquiavelo, N. (2010). El príncipe (M. Á. Granada, Trad.). Alianza. (Obra original 1532)',
  'Mill, J. S. (2014). El utilitarismo (E. Guisán, Trad.). Alianza. (Obra original 1863)',
  'Nietzsche, F. (2011). La genealogía de la moral (A. Sánchez Pascual, Trad.). Alianza. (Obra original 1887)',
  'Vallor, S. (2016). Technology and the virtues: A philosophical guide to a future worth wanting. Oxford University Press.',
];

// ─── Subcomponents ────────────────────────────────────────────────────────────

const VozCard = ({ voz, isOpen, onClick }) => (
  <div
    className={`border-l-4 ${voz.color} bg-white rounded-r-xl shadow-sm transition-all duration-300`}
  >
    <button
      onClick={onClick}
      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
    >
      <div className="flex items-center gap-5">
        <span className={`font-black text-3xl ${voz.accent} opacity-60 tabular-nums leading-none`}>
          {voz.num}
        </span>
        <div>
          <p className="font-black text-brand-dark text-lg leading-tight">{voz.autor}</p>
          <p className={`text-sm font-semibold ${voz.accent}`}>{voz.concepto}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-xs text-gray-400 font-medium hidden sm:block italic">{voz.cita}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? voz.bg + ' text-white' : 'bg-gray-100 text-gray-400'}`}>
          <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </button>

    {isOpen && (
      <div className="px-6 pb-6">
        <p className="text-sm text-gray-500 italic border-l-2 border-gray-200 pl-3 mb-4">{voz.resumen}</p>
        {voz.desarrollo.split('\n\n').map((p, i) => (
          <p key={i} className="text-gray-700 leading-relaxed text-[0.95rem] mb-3 last:mb-0">{p}</p>
        ))}
      </div>
    )}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Fundamentos = () => {
  const [openVoz, setOpenVoz] = useState(0);
  const [refOpen, setRefOpen] = useState(false);

  const toggle = (i) => setOpenVoz(openVoz === i ? null : i);

  const isOpen = (i) => openVoz === 'all' || openVoz === i;

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

        {/* Título */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight mb-8">
          El Horizonte Ético: Fundamentos filosóficos y profesionales del diseño tecnológico consciente
        </h1>

        {/* Autor/Fecha */}
        <div className="flex items-center text-sm font-bold text-brand-dark border-b-2 border-brand-dark/10 pb-6 mb-10">
          <span className="uppercase">Por: <span className="text-blue-600">Equipo Editorial IUE</span></span>
          <span className="mx-4 text-brand-dark/20">|</span>
          <span>Mayo 2026</span>
        </div>

        {/* Introducción */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            A continuación, cada posición filosófica se presenta en su densidad propia, en tensión productiva con las demás, y con aplicación directa a situaciones reales del ejercicio profesional. La polifonía no es debilidad teórica: es el instrumento adecuado para un dominio donde la certeza moral es, precisamente, lo que está en disputa.
          </p>
        </section>
        
        {/* ── Referente 1 ────────────────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
            {/*<span className="text-xs font-black uppercase tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Referente 1</span>*/}
            
          </div>
          <h2 className="text-3xl font-black text-brand-dark mb-3">
            Fundamentos Filosóficos de la Ética
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Cinco voces en tensión productiva. Selecciona cada autor para desplegar el desarrollo completo.
          </p>

          <div className="space-y-3">
            {voces.map((voz, i) => (
              <VozCard
                key={i}
                voz={voz}
                isOpen={isOpen(i)}
                onClick={() => toggle(i)}
              />
            ))}
          </div>

          {/* Síntesis */}
          <div className="mt-10 bg-brand-dark text-white p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute -top-8 -right-8 opacity-5">
              <Scale className="w-48 h-48" />
            </div>
            <h3 className="text-xl font-black mb-4 relative z-10">Síntesis aplicada</h3>
            <p className="text-gray-300 leading-relaxed relative z-10 mb-3">
              La utilidad de este mapa filosófico no reside en elegir una tradición y descartar las demás, sino en disponer de un repertorio crítico que permita leer un mismo dilema desde múltiples ángulos simultáneamente. Ante el despliegue de un modelo de IA con sesgos conocidos pero con buen rendimiento promedio, el profesional formado puede preguntarse:
            </p>
            <ul className="space-y-2 relative z-10">
              {[
                ['Aristóteles', '¿Qué haría un profesional prudente en este contexto particular?'],
                ['Kant / Mill', '¿Estoy respetando la dignidad individual o calculando saldo agregado de utilidad?'],
                ['Maquiavelo', '¿Qué costo moral estoy asumiendo y tengo la honestidad de reconocerlo?'],
                ['Nietzsche', '¿Quién define en esta organización qué es "aceptable" y con qué intereses?'],
                ['Epicteto', '¿Qué parte de esta decisión realmente controlo y dónde reside mi responsabilidad ética?'],
                ['Vallor', '¿Qué virtud profesional estoy ejerciendo —o dejando de cultivar— al tomar esta decisión?']
              ].map(([a, q]) => (
                <li key={a} className="flex gap-3 text-sm">
                  <span className="text-brand-yellow font-bold flex-shrink-0 w-24">{a}</span>
                  <span className="text-gray-300">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Referencias ────────────────────────────────────────────────── */}
        <section className="mb-16">
  <button
    onClick={() => setRefOpen(prev => !prev)}
    className="flex items-center gap-3 mb-4 group w-full text-left"
  >
    <BookOpen className="w-5 h-5 text-brand-dark" />
    <h2 className="text-2xl font-black text-brand-dark">Referencias</h2>
    <div className={`ml-auto w-7 h-7 rounded-full flex items-center justify-center transition-colors ${refOpen ? 'bg-brand-dark text-white' : 'bg-gray-100 text-gray-400'}`}>
      <svg className={`w-3 h-3 transition-transform duration-300 ${refOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </button>

  {refOpen && (
    <>
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
    </>
  )}
</section>

        {/* Footer Link */}
        <div className="mt-12 flex justify-between items-center border-t-2 border-brand-dark/10 pt-8">
          <Link to="/" className="inline-flex items-center text-gray-400 font-bold hover:text-brand-dark transition-colors">
            ← Inicio
          </Link>
          <Link to="/fundamentos2" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow transition-colors text-lg">
            Siguiente: Ética Profesional y Responsabilidad Social <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Fundamentos;