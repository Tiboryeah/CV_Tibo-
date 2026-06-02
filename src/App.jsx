import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Globe,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  MessageSquare,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Target,
  Users,
  Wrench,
  X
} from 'lucide-react';
import './App.css';

const ASCII_ART = `  ██████╗ ███████╗██████╗  █████╗ ██████╗ ██████╗  ██████╗
 ██╔════╝ ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
 ██║  ███╗█████╗  ██████╔╝███████║██████╔╝██║  ██║██║   ██║
 ██║   ██║██╔══╝  ██╔══██╗██╔══██║██╔══██╗██║  ██║██║   ██║
 ╚██████╔╝███████╗██║  ██║██║  ██║██║  ██║██████╔╝╚██████╔╝
  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝`;

const ALIASES = {
  whoami: 'about',
  perfil: 'about',
  exp: 'experience',
  work: 'experience',
  trayectoria: 'experience',
  edu: 'education',
  formacion: 'education',
  study: 'education',
  stack: 'skills',
  habilidades: 'skills',
  portfolio: 'projects',
  proyectos: 'projects',
  servicios: 'services',
  hire: 'services',
  cert: 'certs',
  certificaciones: 'certs',
  contacto: 'contact',
  ayuda: 'help',
  cls: 'clear',
  limpiar: 'clear'
};

const ORDER = ['about', 'experience', 'education', 'skills', 'projects', 'services', 'certs', 'contact'];
const SUGGEST = ['about', 'skills', 'projects', 'services', 'contact', 'help'];

const content = {
  es: {
    meta: {
      tagline: 'Full Stack Developer · México',
      available: 'Disponible · contratando',
      systemStatus: 'system_status',
      langToggleLabel: 'Switch to English',
    },
    nav: {
      overview: 'Inicio',
      value: 'Perfil',
      experience: 'Experiencia',
      education: 'Formación',
      skills: 'Habilidades',
      projects: 'Proyectos',
      services: 'Servicios',
      certs: 'Certificaciones',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Actualmente trabajando como desarrollador de software',
      titleLead: 'Desarrollo software profesional con foco en',
      titleAccent: 'web, sistemas bajo demanda e integraciones inteligentes',
      subtitle: 'Gerardo Esteban Martínez López',
      description:
        'Construyo aplicaciones web, APIs, automatizaciones y sistemas internos con una base técnica seria: React, Node.js, Python, bases de datos, cloud y documentación clara. Si necesitas una página web o un sistema a medida, puedo ayudarte a convertir la idea en una solución funcional.',
      primary: 'Ver soluciones',
      secondary: 'Cotizar proyecto',
      download: 'Descargar CV',
      quickFacts: [
        'Webs profesionales, dashboards y sistemas internos',
        'APIs, automatizaciones y flujos con enfoque AI-ready',
        'Agenda limitada para proyectos bajo demanda',
      ],
    },
    recruiter: {
      eyebrow: 'PROPUESTA DE VALOR',
      title: 'Software claro, usable y preparado para crecer',
      intro:
        'Trabajo con una mezcla práctica de desarrollo, criterio de producto y documentación. La idea es simple: entregar soluciones que se puedan usar, mantener y mejorar sin fricción.',
      cards: [
        {
          title: 'Ejecución de punta a punta',
          text: 'Puedo participar desde el levantamiento de requerimientos hasta el frontend, backend, base de datos, despliegue y documentación.',
          icon: Rocket,
        },
        {
          title: 'Criterio técnico moderno',
          text: 'Combino desarrollo web, cloud, APIs y fundamentos de redes con una visión AI-ready para integrar automatización cuando el proyecto lo justifica.',
          icon: Server,
        },
        {
          title: 'Disponibilidad enfocada',
          text: 'Actualmente trabajo como desarrollador de software, por eso tomo pocos proyectos externos a la vez para cuidar tiempos, calidad y comunicación.',
          icon: Users,
        },
      ],
    },
    highlights: {
      title: 'Resumen ejecutivo',
      items: [
        { label: 'Perfil objetivo', value: 'Desarrollador de software / Web / Sistemas a medida' },
        { label: 'Ubicación', value: 'Ciudad de México, México' },
        { label: 'Idiomas', value: 'Español nativo, inglés técnico-profesional' },
        { label: 'Fortalezas', value: 'Producto, automatización, documentación y resolución' },
      ],
      metrics: [
        { n: '4+', l: 'AÑOS DEV' },
        { n: '<24h', l: 'RESPUESTA' },
        { n: '100%', l: 'A MEDIDA' },
        { n: '∞', l: 'GANAS' }
      ]
    },
    strengths: {
      eyebrow: 'FORTALEZAS',
      title: 'Cómo puedo ayudarte en un proyecto real',
      items: [
        {
          title: 'Desarrollo web y sistemas internos',
          text: 'Landing pages, paneles administrativos, formularios, catálogos, dashboards y herramientas para operar mejor un negocio.',
          icon: Code2,
        },
        {
          title: 'Automatización e integraciones',
          text: 'APIs, bots, procesos repetitivos, conexión entre servicios y flujos preparados para sumar IA de forma útil.',
          icon: Cpu,
        },
        {
          title: 'Entrega profesional',
          text: 'Trabajo con estructura, claridad técnica, comunicación de avances y decisiones documentadas para mantener el proyecto ordenado.',
          icon: ShieldCheck,
        },
      ],
    },
    stack: {
      eyebrow: 'STACK',
      title: 'Tecnologías con las que puedo aportar',
      groups: [
        {
          title: 'Lenguajes y frameworks',
          icon: Code2,
          items: ['JavaScript', 'React', 'Node.js', 'Python', 'C', 'C++', 'C#', '.NET', 'FastAPI'],
        },
        {
          title: 'Datos y backend',
          icon: Database,
          items: ['MongoDB', 'PostgreSQL', 'SQL', 'MERN Stack', 'Diseño de APIs', 'Sockets TCP/UDP'],
        },
        {
          title: 'Cloud, tooling y trabajo técnico',
          icon: Globe,
          items: ['Google Cloud', 'Compute Engine', 'BigQuery', 'Docker', 'Git', 'GitHub', 'UML', 'ISO/IEEE SRS'],
        },
      ],
    },
    experience: {
      eyebrow: 'EXPERIENCIA',
      title: 'Experiencia relevante',
      items: [
        {
          role: 'Desarrollador de software',
          place: 'Rol actual y proyectos bajo demanda',
          period: 'Enero 2022 - Actualidad',
          bullets: [
            'Desarrollo de aplicaciones web, sistemas cliente-servidor, APIs y soluciones internas con tecnologías modernas.',
            'Construcción de interfaces, lógica backend, manejo de datos y automatizaciones con criterio de producto.',
            'Actualmente acepto proyectos externos seleccionados para páginas web, sistemas a medida e integraciones.',
          ],
        },
        {
          role: 'Soporte técnico y mantenimiento',
          place: 'ESCOM - Servicio social',
          period: 'Experiencia práctica',
          bullets: [
            'Diagnóstico de fallas, reemplazo de componentes y mejora del rendimiento de equipos.',
            'Atención directa a usuarios, seguimiento de incidencias y trabajo operativo confiable.',
            'Aplicación de criterios técnicos y orden documental para soporte de hardware.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'PROYECTOS',
      title: 'Proyectos que demuestran criterio técnico',
      items: [
        {
          title: 'Kuxipilli (TT 2026)',
          url: 'https://kuxipilli.com/',
          summary: 'Plataforma preventiva orientada a madres y padres de familia, enfocada en seguridad digital y experiencia de uso clara.',
          impact: 'Muestra capacidad para trabajar producto, frontend, documentación formal y privacidad.',
          stack: ['React', 'MERN', 'UX/UI', 'ISO/IEEE SRS'],
        },
        {
          title: 'Discord Server Admin Bot',
          summary: 'Bot desplegado en Google Cloud para automatizar tareas administrativas, comandos y control operativo del servidor.',
          impact: 'Demuestra despliegue real, automatización, APIs y mantenimiento de servicios.',
          stack: ['Python', 'Google Cloud', 'APIs', 'Automation'],
        },
        {
          title: 'Sistemas cliente-servidor con sockets',
          summary: 'Implementaciones con TCP/UDP para reforzar fundamentos de comunicación en red y lógica distribuida.',
          impact: 'Refuerza bases sólidas en networking, backend y resolución técnica.',
          stack: ['Python', 'C', 'TCP', 'UDP'],
        },
        {
          title: 'Kokoro Souls',
          url: 'https://tiboryeah.github.io/kokoro-3-souls/index.html',
          summary: 'Videojuego interactivo en desarrollo, combinando narrativa, lógica de juego estructurada y una experiencia inmersiva.',
          impact: 'Demuestra habilidades en desarrollo de lógica de juego, scripting de historia y control de estado complejo.',
          stack: ['Python', 'Ren\'Py', 'Game Design', 'Scripting'],
        },
      ],
    },
    services: {
      eyebrow: 'SERVICIOS',
      title: 'Soluciones bajo demanda',
      items: [
        { title: 'Páginas web a medida', text: 'Sitios rápidos, responsivos y a tu marca, listos para producción.' },
        { title: 'Sistemas a medida', text: 'Aplicaciones cliente-servidor y paneles internos según tu operación.' },
        { title: 'APIs & integraciones', text: 'Conecto servicios, pasarelas y datos entre tus plataformas.' },
        { title: 'Automatizaciones', text: 'Elimino tareas repetitivas con procesos automáticos confiables.' }
      ]
    },
    education: {
      eyebrow: 'FORMACIÓN',
      title: 'Base académica',
      items: [
        {
          name: 'IPN - ESCOM',
          detail: 'Ingeniería en Sistemas Computacionales',
          period: '2022 - Actualidad',
        },
      ],
    },
    educationExtra: {
      eyebrow: 'FORMACIÓN Y CURSOS',
      title: 'Credenciales destacadas',
      items: [
        { t: 'Ingeniería en Sistemas Computacionales', m: 'ESCOM IPN · En curso', yr: '2022 - Presente' },
        { t: 'Curso de Cloud Computing', m: 'Google Cloud · Especialización', yr: '2024' },
        { t: 'Desarrollo Web Full Stack', m: 'Autodidacta / Proyectos Reales', yr: '2023' }
      ]
    },
    contact: {
      eyebrow: 'CONTACTO',
      title: 'Hablemos antes de que se cierre la agenda',
      description:
        'Estoy trabajando actualmente, pero abro espacios limitados para proyectos web y sistemas bajo demanda. Si tienes una idea clara o un problema operativo que quieres resolver, contáctame y revisamos alcance, tiempos y viabilidad.',
      location: 'Ciudad de México, México',
      availability: 'Cupo limitado para proyectos externos',
    },
  },
  en: {
    meta: {
      tagline: 'Full Stack Developer · Mexico',
      available: 'Available · hiring',
      systemStatus: 'system_status',
      langToggleLabel: 'Cambiar a Español',
    },
    nav: {
      overview: 'Home',
      value: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      certs: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      badge: 'Currently working as a software developer',
      titleLead: 'Professional software development focused on',
      titleAccent: 'web, custom systems, and intelligent integrations',
      subtitle: 'Gerardo Esteban Martínez López',
      description:
        'I build web apps, APIs, automations, and internal systems with a serious technical base: React, Node.js, Python, databases, cloud, and clear documentation. If you need a website or a custom system, I can help turn the idea into a functional solution.',
      primary: 'View solutions',
      secondary: 'Quote a project',
      download: 'Download CV',
      quickFacts: [
        'Professional websites, dashboards, and internal tools',
        'APIs, automations, and AI-ready workflows',
        'Limited availability for custom projects',
      ],
    },
    recruiter: {
      eyebrow: 'VALUE PROPOSITION',
      title: 'Clear, usable software designed to grow',
      intro:
        'I work with a practical mix of development, product judgment, and documentation. The goal is simple: deliver solutions that people can use, maintain, and improve without friction.',
      cards: [
        {
          title: 'End-to-end execution',
          text: 'I can contribute from requirements and frontend to backend, databases, deployment, and technical documentation.',
          icon: Rocket,
        },
        {
          title: 'Modern technical judgment',
          text: 'I combine web development, cloud, APIs, and networking fundamentals with an AI-ready mindset when automation can create real value.',
          icon: Server,
        },
        {
          title: 'Focused availability',
          text: 'I currently work as a software developer, so I take on a limited number of external projects to protect quality, timelines, and communication.',
          icon: Users,
        },
      ],
    },
    highlights: {
      title: 'Executive summary',
      items: [
        { label: 'Target role', value: 'Software developer / Web / Custom systems' },
        { label: 'Location', value: 'Mexico City, Mexico' },
        { label: 'Languages', value: 'Native Spanish, professional technical English' },
        { label: 'Strengths', value: 'Product thinking, automation, documentation, problem solving' },
      ],
      metrics: [
        { n: '4+', l: 'YEARS DEV' },
        { n: '<24h', l: 'RESPONSE TIME' },
        { n: '100%', l: 'CUSTOM MADE' },
        { n: '∞', l: 'PASSION' }
      ]
    },
    strengths: {
      eyebrow: 'STRENGTHS',
      title: 'How I can help with a real project',
      items: [
        {
          title: 'Web development and internal systems',
          text: 'Landing pages, admin panels, forms, catalogs, dashboards, and tools that help businesses operate better.',
          icon: Code2,
        },
        {
          title: 'Automation and integrations',
          text: 'APIs, bots, repetitive processes, service connections, and workflows ready to add useful AI where it makes sense.',
          icon: Cpu,
        },
        {
          title: 'Professional delivery',
          text: 'I work with structure, technical clarity, progress communication, and documented decisions to keep projects organized.',
          icon: ShieldCheck,
        },
      ],
    },
    stack: {
      eyebrow: 'STACK',
      title: 'Technologies I can contribute with',
      groups: [
        {
          title: 'Languages and frameworks',
          icon: Code2,
          items: ['JavaScript', 'React', 'Node.js', 'Python', 'C', 'C++', 'C#', '.NET', 'FastAPI'],
        },
        {
          title: 'Data and backend',
          icon: Database,
          items: ['MongoDB', 'PostgreSQL', 'SQL', 'MERN Stack', 'API design', 'TCP/UDP sockets'],
        },
        {
          title: 'Cloud, tooling, and engineering work',
          icon: Globe,
          items: ['Google Cloud', 'Compute Engine', 'BigQuery', 'Docker', 'Git', 'GitHub', 'UML', 'ISO/IEEE SRS'],
        },
      ],
    },
    experience: {
      eyebrow: 'EXPERIENCE',
      title: 'Relevant experience',
      items: [
        {
          role: 'Software developer',
          place: 'Current role and custom projects',
          period: 'January 2022 - Present',
          bullets: [
            'Build web applications, client-server systems, APIs, and internal solutions with modern technologies.',
            'Work across interfaces, backend logic, data handling, and automations with product judgment.',
            'Currently accepting selected external projects for websites, custom systems, and integrations.',
          ],
        },
        {
          role: 'Technical support and maintenance',
          place: 'ESCOM - Social service',
          period: 'Hands-on experience',
          bullets: [
            'Diagnosed failures, replaced components, and improved computer performance.',
            'Provided direct user support, issue follow-up, and reliable operational execution.',
            'Applied technical judgment and documentation discipline to hardware support work.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'PROJECTS',
      title: 'Projects that demonstrate technical judgment',
      items: [
        {
          title: 'Kuxipilli (TT 2026)',
          url: 'https://kuxipilli.com/',
          summary: 'Preventive web platform for families focused on digital safety and a clear user experience.',
          impact: 'Shows product thinking, frontend execution, formal documentation, and privacy awareness.',
          stack: ['React', 'MERN', 'UX/UI', 'ISO/IEEE SRS'],
        },
        {
          title: 'Discord Server Admin Bot',
          summary: 'A Google Cloud deployed bot used to automate admin tasks, commands, and server operations.',
          impact: 'Demonstrates real deployment, automation, APIs, and service maintenance.',
          stack: ['Python', 'Google Cloud', 'APIs', 'Automation'],
        },
        {
          title: 'Client-server socket systems',
          summary: 'TCP/UDP implementations built to strengthen networking and distributed-logic fundamentals.',
          impact: 'Reinforces solid networking, backend, and technical problem-solving skills.',
          stack: ['Python', 'C', 'TCP', 'UDP'],
        },
        {
          title: 'Kokoro Souls',
          url: 'https://tiboryeah.github.io/kokoro-3-souls/index.html',
          summary: 'Interactive video game currently under development, combining storytelling, structured game logic, and immersive gameplay.',
          impact: 'Demonstrates game logic design, narrative scripting, and complex state management.',
          stack: ['Python', 'Ren\'Py', 'Game Design', 'Scripting'],
        },
      ],
    },
    services: {
      eyebrow: 'SERVICES',
      title: 'On-demand solutions',
      items: [
        { title: 'Custom websites', text: 'Fast, responsive websites customized to your brand, ready for production.' },
        { title: 'Custom systems', text: 'Custom client-server applications and internal panels tailored to your operations.' },
        { title: 'APIs & integrations', text: 'I connect services, payment gateways, and data across your platforms.' },
        { title: 'Automations', text: 'I eliminate repetitive tasks with reliable automated processes.' }
      ]
    },
    education: {
      eyebrow: 'EDUCATION',
      title: 'Academic foundation',
      items: [
        {
          name: 'IPN - ESCOM',
          detail: 'Systems Engineering',
          period: '2022 - Present',
        },
      ],
    },
    educationExtra: {
      eyebrow: 'CREDENTIALS & COURSES',
      title: 'Key certifications',
      items: [
        { t: 'Systems Engineering', m: 'ESCOM IPN · In progress', yr: '2022 - Present' },
        { t: 'Cloud Computing Course', m: 'Google Cloud · Specialization', yr: '2024' },
        { t: 'Full Stack Web Development', m: 'Self-taught / Real Projects', yr: '2023' }
      ]
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Let us talk before the calendar fills up',
      description:
        'I am currently working, but I open limited slots for web projects and custom systems. If you have a clear idea or an operational problem to solve, contact me and we can review scope, timing, and feasibility.',
      location: 'Mexico City, Mexico',
      availability: 'Limited availability for external projects',
    },
  },
};

const SectionTitle = ({ eyebrow, title, align = 'left' }) => (
  <div className={`section-title ${align === 'center' ? 'center' : ''}`}>
    <span>{eyebrow}</span>
    <h2>{title}</h2>
  </div>
);

// Interactive CLI Terminal embedded in the Hero
const TerminalCLI = ({ lang, t }) => {
  const [termLines, setTermLines] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [booting, setBooting] = useState(true);
  const termBodyRef = useRef(null);
  const inputRef = useRef(null);

  const scrollBottom = () => {
    if (termBodyRef.current) {
      const prompts = termBodyRef.current.querySelectorAll('.prompt-line');
      if (prompts.length > 0) {
        const lastPrompt = prompts[prompts.length - 1];
        termBodyRef.current.scrollTop = lastPrompt.offsetTop;
      } else {
        termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollBottom();
  }, [termLines]);

  useEffect(() => {
    let isMounted = true;
    const runBoot = async () => {
      setTermLines([]);
      setBooting(true);
      const seq = [
        { id: 0, color: 'd' },
        { id: 1, color: 'mut' },
        { id: 2, color: 'g' }
      ];

      for (let i = 0; i < seq.length; i++) {
        if (!isMounted) return;
        setTermLines(prev => [...prev, { type: 'boot', id: seq[i].id, color: seq[i].color }]);
        await new Promise(r => setTimeout(r, 200));
      }

      if (!isMounted) return;
      setTermLines(prev => [
        ...prev,
        { type: 'system', name: 'banner' },
        { type: 'prompt', content: 'whoami' },
        { type: 'command', name: 'about' }
      ]);
      setBooting(false);
    };

    runBoot();
    return () => { isMounted = false; };
  }, []);

  const runCommand = (raw) => {
    const clean = raw.trim();
    if (!clean) return;

    const cmd = clean.toLowerCase();
    const newHistory = [...history, clean];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length);

    const resolved = ALIASES[cmd] || cmd;

    if (resolved === 'clear') {
      setTermLines([]);
      return;
    }

    setTermLines(prev => [
      ...prev,
      { type: 'prompt', content: clean },
      { type: 'command', name: resolved, raw: clean }
    ]);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      runCommand(inputValue);
      setInputValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex > 0 ? historyIndex - 1 : 0;
        setHistoryIndex(nextIdx);
        setInputValue(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputValue(history[nextIdx] || '');
      } else {
        setHistoryIndex(history.length);
        setInputValue('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = inputValue.toLowerCase();
      const match = [...ORDER, 'help', 'all', 'clear'].find(c => c.startsWith(val));
      if (match) {
        setInputValue(match);
      }
    }
  };

  const getCommandOutput = (name, rawText) => {
    const labelAbout = lang === 'es' ? 'sobre mí' : 'about me';
    const labelExp = lang === 'es' ? 'experiencia' : 'experience';
    const labelEdu = lang === 'es' ? 'educación' : 'education';
    const labelSkills = lang === 'es' ? 'habilidades' : 'skills';
    const labelProj = lang === 'es' ? 'proyectos' : 'projects';
    const labelServ = lang === 'es' ? 'servicios' : 'services';
    const labelCerts = lang === 'es' ? 'certificaciones' : 'certs';
    const labelContact = lang === 'es' ? 'contacto' : 'contact';

    switch (name) {
      case 'about':
        return (
          <div className="block">
            <div className="hd"><span className="ix">01</span>{labelAbout}</div>
            <div className="line">
              <span className="vb" style={{ fontSize: '15px' }}>{t.hero.subtitle}</span>  
              <span className="dim"> // {lang === 'es' ? 'Desarrollador de Software' : 'Software Developer'}</span>
            </div>
            <div className="line mut" style={{ marginTop: '8px', maxWidth: '72ch' }}>
              {t.hero.description}
            </div>
            <div className="line" style={{ marginTop: '10px' }}>
              <span className="key">{lang === 'es' ? 'Estado:' : 'Status:'}</span>{' '}
              <span className="gr">●</span> {t.contact.availability}
            </div>
            <div className="line">
              <span className="key">{lang === 'es' ? 'Ubicación:' : 'Location:'}</span>{' '}
              <span className="muted">{t.contact.location}</span>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="block">
            <div className="hd"><span className="ix">02</span>{labelExp}</div>
            {t.experience.items.map((job, i) => (
              <div key={i} className="job">
                <div className="t">{job.role} <span className="dim">·</span> <span className="v">{job.place}</span></div>
                <div className="when">{job.period}</div>
                <ul>
                  {job.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="block">
            <div className="hd"><span className="ix">03</span>{labelEdu}</div>
            {t.education.items.map((edu, i) => (
              <div key={i} className="job">
                <div className="t">{edu.name}</div>
                <div className="meta">{edu.detail}</div>
                <div className="when">{edu.period}</div>
                <ul>
                  <li>{lang === 'es' ? 'Formación computacional e ingeniería de software estructurada.' : 'Core engineering studies and computer systems program.'}</li>
                </ul>
              </div>
            ))}
          </div>
        );
      case 'skills':
        const skillValues = [
          { n: 'JavaScript / TypeScript', p: 90 },
          { n: 'Frontend · React · CSS', p: 88 },
          { n: 'Backend & APIs · Node.js', p: 85 },
          { n: 'Bases de datos · SQL / NoSQL', p: 80 },
          { n: 'Automatización & integraciones', p: 82 }
        ];
        return (
          <div className="block">
            <div className="hd"><span className="ix">04</span>{labelSkills}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px 20px' }}>
              {skillValues.map((s, idx) => (
                <div key={idx} className="skbar">
                  <div className="row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '3px' }}>
                    <span className="n" style={{ color: 'var(--txt)' }}>{s.n}</span>
                    <span className="p" style={{ color: 'var(--violet-soft)' }}>{s.p}%</span>
                  </div>
                  <div className="track" style={{ height: '5px', background: '#1a1430', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                    <div className="fill" style={{ height: '100%', background: 'linear-gradient(90deg, var(--violet), var(--magenta))', width: `${s.p}%`, boxShadow: '0 0 10px rgba(168,85,247,0.5)' }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px 20px' }} className="term-skills">
              {t.stack.groups.map((group, idx) => (
                <div key={idx}>
                  <div className="cat" style={{ fontSize: '10px', color: 'var(--magenta)', textTransform: 'uppercase', marginBottom: '6px' }}>{group.title.split(' ')[0]}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {group.items.map((c, i) => <span key={i} className="chip" style={{ fontSize: '11.5px', color: 'var(--violet-soft)' }}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="block">
            <div className="hd"><span className="ix">05</span>{labelProj}</div>
            <div className="cards">
              {t.projects.items.map((proj, i) => (
                <div key={i} className="card">
                  <div className="pt">
                    <span className="mag">◆</span>{' '}
                    {proj.url ? (
                      <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)', textDecoration: 'underline' }}>
                        {proj.title}
                      </a>
                    ) : (
                      proj.title
                    )}
                  </div>
                  <div className="pd">{proj.summary}</div>
                  <div className="tags">
                    {proj.stack.map((s, idx) => <span key={idx}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="block">
            <div className="hd"><span className="ix">06</span>{labelServ}</div>
            <div className="svc">
              {t.services.items.map((svc, i) => (
                <div key={i} className="s">
                  <div className="ic">
                    {i === 0 && '❯_'}
                    {i === 1 && '⟁'}
                    {i === 2 && '⇄'}
                    {i === 3 && '⚙'}
                  </div>
                  <div>
                    <div className="st">{svc.title}</div>
                    <div className="sd">{svc.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certs':
        return (
          <div className="block">
            <div className="hd"><span className="ix">07</span>{labelCerts}</div>
            {t.educationExtra.items.map((c, i) => (
              <div key={i} className="line">
                <span className="v">▸</span> <span className="muted">{c.t} · {c.m} · {c.yr}</span>
              </div>
            ))}
          </div>
        );
      case 'contact':
        return (
          <div className="block">
            <div className="hd"><span className="ix">08</span>{labelContact}</div>
            <div className="contact">
              <div className="c"><span className="v">@</span><div><div className="l">Email</div><div className="val">tiboryeahrock@gmail.com</div></div></div>
              <div className="c"><span className="v">⌥</span><div><div className="l">GitHub</div><div className="val">github.com/Tiboryeah</div></div></div>
              <div className="c"><span className="v">in</span><div><div className="l">LinkedIn</div><div className="val">gerardo-esteban-martinez-lopez</div></div></div>
              <div className="c"><span className="v">✆</span><div><div className="l">Phone</div><div className="val">+52 56 4000 6312</div></div></div>
            </div>
            <div className="line" style={{ marginTop: '12px' }}>
              <span className="mag">❯</span> <span className="vb">{lang === 'es' ? '¿Tienes un proyecto?' : 'Have a project?'}</span>{' '}
              <span className="muted">{t.contact.description}</span>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="block">
            <div className="hd">{lang === 'es' ? 'comandos' : 'commands'}</div>
            <div className="help">
              <div className="h"><b>about</b> <span>· bio</span></div>
              <div className="h"><b>skills</b> <span>· stack</span></div>
              <div className="h"><b>projects</b> <span>· portfolio</span></div>
              <div className="h"><b>services</b> <span>· details</span></div>
              <div className="h"><b>contact</b> <span>· info</span></div>
              <div className="h"><b>clear</b> <span>· clean</span></div>
            </div>
          </div>
        );
      case 'all':
        return (
          <div>
            {getCommandOutput('about')}
            {getCommandOutput('skills')}
            {getCommandOutput('projects')}
            {getCommandOutput('services')}
            {getCommandOutput('contact')}
          </div>
        );
      default:
        return (
          <div className="line" style={{ margin: '6px 0 14px' }}>
            <span className="mag">zsh:</span> {lang === 'es' ? 'no se encontró' : 'command not found'}: <span className="cmd">{rawText}</span> — {lang === 'es' ? 'prueba' : 'try'} <span className="key">help</span>
          </div>
        );
    }
  };

  const handleSuggestClick = (cmd) => {
    runCommand(cmd);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="termwin" onClick={() => inputRef.current && inputRef.current.focus()}>
      <div className="tbar">
        <div className="dots"><i></i><i></i><i></i></div>
        <div className="tt"><b>gerardo@fullstack</b>:<span style={{ color: 'var(--cyan)' }}> ~/cv</span> — live_terminal</div>
        <div className="live"><i></i> live</div>
      </div>
      <div className="term" ref={termBodyRef}>
        {termLines.map((line, i) => {
          if (line.type === 'boot') {
            const bootTexts = lang === 'es' ? [
              '[ boot ] cargando perfil de Gerardo...',
              '[ ok ] stack full-stack listo',
              '[ ok ] estado: disponible para proyectos'
            ] : [
              '[ boot ] loading Gerardo\'s profile...',
              '[ ok ] full-stack stack ready',
              '[ ok ] status: available for hire'
            ];
            return (
              <div key={i} className="line">
                <span className={line.color}>{bootTexts[line.id]}</span>
              </div>
            );
          }
          if (line.type === 'system' && line.name === 'banner') {
            return (
              <div key={i}>
                <pre className="ascii" style={{ fontSize: 'clamp(5px, 0.8vw, 8px)', overflowX: 'hidden' }}>{ASCII_ART}</pre>
                <div className="line" style={{ marginTop: '8px' }}><span className="vb">{t.hero.subtitle}</span> <span className="dim">— Full Stack Developer</span></div>
                <div className="line muted" style={{ marginBottom: '12px' }}>Terminal CV · v1.0 · {lang === 'es' ? 'escribe help o click en chips' : 'type help or click on suggestion chips'}</div>
              </div>
            );
          }
          if (line.type === 'prompt') {
            return (
              <div key={i} className="line prompt-line" style={{ margin: '12px 0 2px' }}>
                <span className="prompt">gerardo@cv <span className="path">~/cv</span> <span className="arrow">❯</span></span> <span className="cmd">{line.content}</span>
              </div>
            );
          }
          if (line.type === 'command') {
            return <div key={i}>{getCommandOutput(line.name, line.raw)}</div>;
          }
          return null;
        })}
      </div>

      {!booting && (
        <div className="tchips">
          {SUGGEST.map(c => (
            <button key={c} type="button" onClick={(e) => { e.stopPropagation(); handleSuggestClick(c); }}>
              <span className="k">❯</span> {c}
            </button>
          ))}
        </div>
      )}

      <div className="tinput">
        <span className="pre">gerardo <span className="arr">❯</span></span>
        <input
          ref={inputRef}
          type="text"
          id="tcmd"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSubmit}
          autoComplete="off"
          spellCheck="false"
          placeholder={lang === 'es' ? 'escribe un comando... (help)' : 'type a command... (help)'}
          disabled={booting}
        />
        {!inputValue && <span className="cur"></span>}
      </div>
    </div>
  );
};

function App() {
  const [lang, setLang] = useState('es');
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const t = content[lang];

  // Scroll reveal & scroll progress observer
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      setScrollPercent(pct);

      const sections = ['hero', 'about', 'exp', 'edu', 'skills', 'projects', 'services', 'certs', 'contact'];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll elements with .rv
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          const fills = entry.target.querySelectorAll('.track i');
          fills.forEach(fill => {
            const pct = fill.getAttribute('data-pct');
            if (pct) {
              fill.style.width = `${pct}%`;
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

    const els = document.querySelectorAll('.rv');
    els.forEach(el => observer.observe(el));

    // Force triggers for visible elements on load
    setTimeout(() => {
      const visibleFills = document.querySelectorAll('.rv.in .track i');
      visibleFills.forEach(fill => {
        const pct = fill.getAttribute('data-pct');
        if (pct) fill.style.width = `${pct}%`;
      });
    }, 250);

    return () => observer.disconnect();
  }, [lang]);

  // Contact list dataset
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tiboryeahrock@gmail.com',
      href: 'mailto:tiboryeahrock@gmail.com',
      k: '@'
    },
    {
      icon: Phone,
      label: lang === 'es' ? 'Teléfono' : 'Phone',
      value: '+52 56 4000 6312',
      href: 'tel:+525640006312',
      k: '✆'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'gerardo-esteban-martinez-lopez',
      href: 'https://www.linkedin.com/in/gerardo-esteban-mart%C3%ADnez-l%C3%B3pez-4326b2288/',
      k: 'in'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Tiboryeah',
      href: 'https://github.com/Tiboryeah',
      k: '</>'
    },
  ];

  return (
    <div className="theme-wrapper">
      <div className="bg"><div className="g1"></div><div className="g2"></div><div className="grid"></div><div className="scan"></div></div>
      <div className="prog" style={{ width: `${scrollPercent}%` }} />

      <div className="shell">
        {/* ===== SIDEBAR ===== */}
        <aside className="side">
          <div className="brand">
            <div className="avatar"><div className="ring"></div><div className="in">GM</div></div>
            <div className="col">
              <div className="nm">Gerardo Martínez</div>
              <div className="rl">FULL_STACK_DEV</div>
            </div>
          </div>
          <div className="statusbox">
            <div className="t">{t.meta.systemStatus}</div>
            <div className="v"><span className="d"></span> {t.meta.available}</div>
          </div>
          <nav className="snav">
            <a href="#hero" className={activeSection === 'hero' ? 'on' : ''}><span className="ic">⌂</span> {t.nav.overview} <span className="no">00</span></a>
            <a href="#about" className={activeSection === 'about' ? 'on' : ''}><span className="ic">✦</span> {t.nav.value} <span className="no">01</span></a>
            <a href="#exp" className={activeSection === 'exp' ? 'on' : ''}><span className="ic">❯</span> {t.nav.experience} <span className="no">02</span></a>
            <a href="#edu" className={activeSection === 'edu' ? 'on' : ''}><span className="ic">◇</span> {t.nav.education} <span className="no">03</span></a>
            <a href="#skills" className={activeSection === 'skills' ? 'on' : ''}><span className="ic">▤</span> {t.nav.skills} <span className="no">04</span></a>
            <a href="#projects" className={activeSection === 'projects' ? 'on' : ''}><span className="ic">◈</span> {t.nav.projects} <span className="no">05</span></a>
            <a href="#services" className={activeSection === 'services' ? 'on' : ''}><span className="ic">⚙</span> {t.nav.services} <span className="no">06</span></a>
            <a href="#certs" className={activeSection === 'certs' ? 'on' : ''}><span className="ic">❖</span> {t.nav.certs} <span className="no">07</span></a>
            <a href="#contact" className={activeSection === 'contact' ? 'on' : ''}><span className="ic">@</span> {t.nav.contact} <span className="no">08</span></a>
          </nav>
          <div className="sfoot">
            <a className="dl" href="#contact">{t.hero.secondary}</a>
            <div className="switch">
              <a onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
                {t.meta.langToggleLabel}
              </a>
            </div>
          </div>
        </aside>

        {/* ===== MAIN ===== */}
        <main>
          {/* HERO */}
          <section className="hero" id="hero">
            <div className="rv in">
              <div className="kick">{t.meta.tagline}</div>
              <h1 className="rv in d1">Gerardo<br /><span className="l2">Martínez López</span></h1>
              <div className="role rv in d2">
                <span>Web</span><span>Sistemas a medida</span><span>APIs</span><span>Automatizaciones</span>
              </div>
              <p className="lead rv in d2">{t.hero.description}</p>
              <div className="cta rv in d3">
                <a className="btn solid" href="#contact">{lang === 'es' ? 'Trabajemos juntos' : 'Let\'s collaborate'}</a>
                <a className="btn ghost" href="#projects">{lang === 'es' ? 'Ver proyectos →' : 'View projects →'}</a>
                <a className="btn ghost" href={`${import.meta.env.BASE_URL}cv/CV_GerardoMartinez.pdf`} download>
                  <Download size={15} style={{ marginRight: '5px' }} /> {t.hero.download}
                </a>
              </div>
            </div>
            <div className="rv in d2">
              <TerminalCLI lang={lang} t={t} />
            </div>
          </section>

          {/* ABOUT */}
          <section id="about">
            <div className="seclabel rv"><span className="no">01</span> {t.nav.value}</div>
            <div className="about">
              <div className="rv">
                <div className="big">{lang === 'es' ? 'Desarrollo software que ' : 'I craft software that '} <em>{lang === 'es' ? 'funciona, se mantiene ' : 'works, scales '}</em> {lang === 'es' ? 'y resuelve problemas reales.' : 'and solves real problems.'}</div>
                <p>{t.recruiter.intro}</p>
                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {t.recruiter.cards.map((card, idx) => {
                    const IconComponent = card.icon;
                    return (
                      <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ padding: '8px', background: 'rgba(168,85,247,0.1)', borderRadius: '8px', border: '1px solid var(--line)', color: 'var(--violet-soft)' }}>
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>{card.title}</h4>
                          <p style={{ fontSize: '13.5px', color: 'var(--muted)', marginTop: '4px' }}>{card.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="hudcard rv d1">
                <div className="panel">
                  <div className="radarwrap">
                    <div className="radar">
                      <div className="r r1"></div><div className="r r2"></div><div className="r r3"></div>
                      <div className="sweep"></div>
                      <div className="dot" style={{ top: '30%', left: '62%' }}></div>
                      <div className="dot" style={{ top: '58%', left: '36%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }}></div>
                      <div className="core"><b>4+</b><span>{lang === 'es' ? 'AÑOS' : 'YEARS'}</span></div>
                    </div>
                  </div>
                  <div className="metrics">
                    {t.highlights.metrics.map((m, idx) => (
                      <div key={idx} className="metric">
                        <div className="n">{m.n.replace(/[^0-9<]/g, '')}<em>{m.n.replace(/[0-9<]/g, '') || ''}</em></div>
                        <div className="l">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="exp">
            <div className="seclabel rv"><span className="no">02</span> {t.nav.experience}</div>
            <div className="xp">
              {t.experience.items.map((job, idx) => (
                <div key={idx} className="xrow rv">
                  <div className="when">
                    {job.period}
                    {idx === 0 && <span className="now">● {lang === 'es' ? 'Actual' : 'Present'}</span>}
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <div className="org">{job.place}</div>
                    <ul>
                      {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="edu">
            <div className="seclabel rv"><span className="no">03</span> {t.nav.education}</div>
            {t.education.items.map((edu, idx) => (
              <div key={idx} className="edu rv">
                <div className="when">{edu.period}</div>
                <div>
                  <h3>{edu.name}</h3>
                  <div className="org">{edu.detail}</div>
                  <p>{lang === 'es' ? 'Ingeniería en Sistemas Computacionales. Formación en desarrollo de software, estructuras de datos, redes, bases de datos y sistemas.' : 'Systems Engineering. Core studies in software development, data structures, networking, databases, and computer systems.'}</p>
                </div>
              </div>
            ))}
          </section>

          {/* SKILLS */}
          <section id="skills">
            <div className="seclabel rv"><span className="no">04</span> {t.nav.skills}</div>
            <div className="skills">
              <div className="rv">
                <div className="skbar"><div className="r"><span className="n">JavaScript / TypeScript</span><span className="p">90%</span></div><div className="track"><i data-pct="90"></i></div></div>
                <div className="skbar"><div className="r"><span className="n">Frontend · React · CSS</span><span className="p">88%</span></div><div className="track"><i data-pct="88"></i></div></div>
                <div className="skbar"><div className="r"><span className="n">Backend & APIs · Node.js</span><span className="p">85%</span></div><div className="track"><i data-pct="85"></i></div></div>
                <div className="skbar"><div className="r"><span className="n">Bases de datos · SQL / NoSQL</span><span className="p">80%</span></div><div className="track"><i data-pct="80"></i></div></div>
                <div className="skbar"><div className="r"><span className="n">Automatización & integraciones</span><span className="p">82%</span></div><div className="track"><i data-pct="82"></i></div></div>
              </div>
              <div className="stack rv d1">
                {t.stack.groups.map((group, idx) => (
                  <div key={idx} className="grp">
                    <h4>{group.title}</h4>
                    <div className="chips">
                      {group.items.map(chip => <span key={chip}>{chip}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <div className="seclabel rv"><span className="no">05</span> {t.nav.projects}</div>
            <div className="pgrid">
              {t.projects.items.map((proj, idx) => (
                <div key={idx} className="pcard rv">
                  <div className="vis">
                    <div className="mesh"></div>
                    <div className="num">P/0{idx + 1}</div>
                    <div className="gl">{idx === 0 ? '◈' : idx === 1 ? '❯_' : idx === 2 ? '⚙' : '⟁'}</div>
                  </div>
                  <div className="bd">
                    <h3>
                      {proj.url ? (
                        <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit' }}>
                          {proj.title} <span style={{ fontSize: '12px', color: 'var(--violet-soft)' }}>↗</span>
                        </a>
                      ) : (
                        proj.title
                      )}
                    </h3>
                    <p>{proj.summary}</p>
                    <div style={{ padding: '8px 12px', background: 'rgba(168,85,247,0.06)', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '12.5px', display: 'flex', gap: '8px', color: 'var(--txt)', marginBottom: '14px', textAlign: 'left' }}>
                      <Award size={15} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--violet-soft)' }} />
                      <span>{proj.impact}</span>
                    </div>
                    <div className="tg">
                      {proj.stack.map(s => <span key={s}>{s}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section id="services">
            <div className="seclabel rv"><span className="no">06</span> {t.services.eyebrow}</div>
            <div className="sgrid rv">
              {t.services.items.map((svc, idx) => (
                <div key={idx} className="scell">
                  <div className="no">S/0{idx + 1}</div>
                  <div className="ic">
                    {idx === 0 && '❯_'}
                    {idx === 1 && '⟁'}
                    {idx === 2 && '⇄'}
                    {idx === 3 && '⚙'}
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CERTS */}
          <section id="certs">
            <div className="seclabel rv"><span className="no">07</span> {t.educationExtra.eyebrow}</div>
            <div className="certs rv">
              {t.educationExtra.items.map((cert, idx) => (
                <div key={idx} className="crow">
                  <div className="ic">❖</div>
                  <div>
                    <div className="t">{cert.t}</div>
                    <div className="m">{cert.m}</div>
                  </div>
                  <div className="yr">{cert.yr}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="contact">
            <div className="seclabel rv" style={{ justifyContent: 'center' }}><span className="no">08</span> {t.nav.contact}</div>
            <div className="big rv">¿Tienes un<br /><span className="grad">proyecto en mente?</span></div>
            <p className="sub rv d1">{t.contact.description}</p>
            <div className="clinks rv d2">
              {contactLinks.map((item, idx) => (
                <a key={idx} className="clink" href={item.href} target="_blank" rel="noreferrer">
                  <span className="k">{item.k}</span>
                  <div>
                    <div className="l">{item.label}</div>
                    <div className="v">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <footer>Gerardo Esteban Martínez López · Full Stack Developer · 2026</footer>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
