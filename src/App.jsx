import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
  X,
} from 'lucide-react';
import './App.css';

const content = {
  es: {
    nav: {
      value: 'Valor',
      stack: 'Stack',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para prácticas, servicio social y roles junior',
      titleLead: 'Ingeniería de software con foco en',
      titleAccent: 'backend, cloud y soluciones reales',
      subtitle:
        'Gerardo Esteban Martínez López',
      description:
        'Estudiante de Ingeniería en Sistemas Computacionales con experiencia práctica en desarrollo web, APIs, bases de datos, soporte técnico y redes. Construyo productos funcionales, bien documentados y listos para integrarse a equipos de trabajo.',
      primary: 'Ver proyectos',
      secondary: 'Contactar',
      download: 'Descargar CV',
      quickFacts: [
        'React, Node.js, Python y C#',
        'MongoDB, PostgreSQL y diseño de APIs',
        'Google Cloud, Docker y fundamentos de redes',
      ],
    },
    recruiter: {
      eyebrow: 'LO QUE VE UNA EMPRESA',
      title: 'Por qué este perfil funciona bien en un CV online',
      intro:
        'La página ahora prioriza lo que más ayuda a reclutadores y líderes técnicos a tomar una decisión rápido: propuesta de valor clara, stack visible, evidencia de ejecución y contacto inmediato.',
      cards: [
        {
          title: 'Capacidad de ejecución',
          text: 'He trabajado en proyectos académicos y autónomos donde participé en desarrollo, documentación técnica, soporte y resolución de problemas reales.',
          icon: Rocket,
        },
        {
          title: 'Base técnica amplia',
          text: 'Combino desarrollo frontend y backend con bases de datos, redes, cloud y nociones de arquitectura, lo que facilita integrarme a equipos multidisciplinarios.',
          icon: Server,
        },
        {
          title: 'Colaboración profesional',
          text: 'Puedo comunicar avances, documentar decisiones y trabajar con requerimientos, algo especialmente valioso en perfiles junior con proyección.',
          icon: Users,
        },
      ],
    },
    highlights: {
      title: 'Resumen ejecutivo',
      items: [
        {
          label: 'Perfil objetivo',
          value: 'Software Engineer Jr. / Backend / Cloud',
        },
        {
          label: 'Ubicación',
          value: 'Ciudad de México, México',
        },
        {
          label: 'Idiomas',
          value: 'Español nativo, inglés técnico-profesional',
        },
        {
          label: 'Fortalezas',
          value: 'Aprendizaje rápido, documentación, resolución de problemas',
        },
      ],
    },
    strengths: {
      eyebrow: 'FORTALEZAS',
      title: 'Valor que aporto desde el primer día',
      items: [
        {
          title: 'Desarrollo full-stack aterrizado',
          text: 'Puedo moverme entre interfaz, lógica de negocio y persistencia para construir entregables funcionales.',
          icon: Code2,
        },
        {
          title: 'Pensamiento de infraestructura',
          text: 'Tengo experiencia con cloud, despliegue, Docker, redes y comunicación cliente-servidor.',
          icon: Cpu,
        },
        {
          title: 'Orientación a calidad',
          text: 'Trabajo con documentación, estructura, claridad técnica y buenas prácticas para que el código sea mantenible.',
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
          place: 'Trabajo autónomo y proyectos académicos',
          period: 'Enero 2022 - Actualidad',
          bullets: [
            'Desarrollo de aplicaciones cliente-servidor con Python, C y tecnologías web.',
            'Construcción de interfaces, lógica backend y manejo de datos para proyectos funcionales.',
            'Participación en documentación técnica y definición de requerimientos para proyectos escolares de mayor complejidad.',
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
          title: 'Riesgos en Línea (TT 2026)',
          summary:
            'Plataforma preventiva orientada a madres y padres de familia, enfocada en seguridad digital y experiencia de uso clara.',
          impact: 'Muestra capacidad para trabajar producto, frontend, documentación formal y privacidad.',
          stack: ['React', 'MERN', 'UX/UI', 'ISO/IEEE SRS'],
        },
        {
          title: 'Discord Server Admin Bot',
          summary:
            'Bot desplegado en Google Cloud para automatizar tareas administrativas, comandos y control operativo del servidor.',
          impact: 'Demuestra despliegue real, automatización, APIs y mantenimiento de servicios.',
          stack: ['Python', 'Google Cloud', 'APIs', 'Automation'],
        },
        {
          title: 'Sistemas cliente-servidor con sockets',
          summary:
            'Implementaciones con TCP/UDP para reforzar fundamentos de comunicación en red y lógica distribuida.',
          impact: 'Refuerza bases sólidas en networking, backend y resolución técnica.',
          stack: ['Python', 'C', 'TCP', 'UDP'],
        },
      ],
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
        {
          name: 'UnADM',
          detail: 'Universidad Abierta y a Distancia de México',
          period: '2017 - 2021',
        },
        {
          name: 'Prepa en Línea SEP',
          detail: 'Educación media superior',
          period: '2015 - 2017',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACTO',
      title: 'Listo para sumar a un equipo serio',
      description:
        'Si buscas a alguien con base técnica amplia, buena actitud para colaborar y ganas reales de crecer, aquí tienes todos mis canales directos.',
      location: 'Ciudad de México, México',
      availability: 'Disponible para entrevistas y oportunidades junior',
    },
  },
  en: {
    nav: {
      value: 'Value',
      stack: 'Stack',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to internships, social service, and junior roles',
      titleLead: 'Software engineering focused on',
      titleAccent: 'backend, cloud, and real-world solutions',
      subtitle: 'Gerardo Esteban Martínez López',
      description:
        'Systems Engineering student with hands-on experience in web development, APIs, databases, technical support, and networking. I build practical, well-documented solutions that can plug into real teams.',
      primary: 'View projects',
      secondary: 'Contact me',
      download: 'Download CV',
      quickFacts: [
        'React, Node.js, Python, and C#',
        'MongoDB, PostgreSQL, and API design',
        'Google Cloud, Docker, and networking fundamentals',
      ],
    },
    recruiter: {
      eyebrow: 'WHAT COMPANIES LOOK FOR',
      title: 'Why this profile works well as an online resume',
      intro:
        'This page now prioritizes the signals recruiters and technical leads look for first: a clear value proposition, visible stack, execution evidence, and immediate contact paths.',
      cards: [
        {
          title: 'Execution mindset',
          text: 'I have worked on academic and self-driven projects involving development, technical documentation, support, and practical problem solving.',
          icon: Rocket,
        },
        {
          title: 'Broad technical foundation',
          text: 'I combine frontend and backend development with databases, networking, cloud, and architecture fundamentals, which helps me fit into multidisciplinary teams.',
          icon: Server,
        },
        {
          title: 'Professional collaboration',
          text: 'I can communicate progress, document decisions, and work with requirements, which is especially valuable in junior profiles with strong growth potential.',
          icon: Users,
        },
      ],
    },
    highlights: {
      title: 'Executive summary',
      items: [
        {
          label: 'Target role',
          value: 'Junior Software Engineer / Backend / Cloud',
        },
        {
          label: 'Location',
          value: 'Mexico City, Mexico',
        },
        {
          label: 'Languages',
          value: 'Native Spanish, professional technical English',
        },
        {
          label: 'Strengths',
          value: 'Fast learner, documentation, problem solving',
        },
      ],
    },
    strengths: {
      eyebrow: 'STRENGTHS',
      title: 'Value I can bring from day one',
      items: [
        {
          title: 'Grounded full-stack development',
          text: 'I can move across interface, business logic, and persistence to deliver functional outcomes.',
          icon: Code2,
        },
        {
          title: 'Infrastructure awareness',
          text: 'I have experience with cloud, deployment, Docker, networking, and client-server communication.',
          icon: Cpu,
        },
        {
          title: 'Quality-oriented approach',
          text: 'I work with documentation, structure, technical clarity, and maintainable code practices.',
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
          place: 'Independent and academic projects',
          period: 'January 2022 - Present',
          bullets: [
            'Built client-server applications using Python, C, and web technologies.',
            'Worked across interfaces, backend logic, and data handling in functional projects.',
            'Contributed to technical documentation and requirement definition in more complex academic projects.',
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
          title: 'Riesgos en Línea (TT 2026)',
          summary:
            'Preventive web platform for families focused on digital safety and a clear user experience.',
          impact: 'Shows product thinking, frontend execution, formal documentation, and privacy awareness.',
          stack: ['React', 'MERN', 'UX/UI', 'ISO/IEEE SRS'],
        },
        {
          title: 'Discord Server Admin Bot',
          summary:
            'A Google Cloud deployed bot used to automate admin tasks, commands, and server operations.',
          impact: 'Demonstrates real deployment, automation, APIs, and service maintenance.',
          stack: ['Python', 'Google Cloud', 'APIs', 'Automation'],
        },
        {
          title: 'Client-server socket systems',
          summary:
            'TCP/UDP implementations built to strengthen networking and distributed-logic fundamentals.',
          impact: 'Reinforces solid networking, backend, and technical problem-solving skills.',
          stack: ['Python', 'C', 'TCP', 'UDP'],
        },
      ],
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
        {
          name: 'UnADM',
          detail: 'Open and Distance University of Mexico',
          period: '2017 - 2021',
        },
        {
          name: 'Prepa en Línea SEP',
          detail: 'Upper secondary education',
          period: '2015 - 2017',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Ready to contribute to a serious team',
      description:
        'If you are looking for someone with a broad technical base, a collaborative attitude, and real motivation to grow, here are my direct contact channels.',
      location: 'Mexico City, Mexico',
      availability: 'Available for interviews and junior opportunities',
    },
  },
};

const SectionTitle = ({ eyebrow, title, align = 'left' }) => (
  <div className={`section-title ${align === 'center' ? 'center' : ''}`}>
    <span>{eyebrow}</span>
    <h2>{title}</h2>
  </div>
);

function App() {
  const [lang, setLang] = useState('es');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 780) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tiboryeahrock@gmail.com',
      href: 'mailto:tiboryeahrock@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+52 56 4000 6312',
      href: 'tel:+525640006312',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'gerardo-esteban-martinez-lopez',
      href: 'https://www.linkedin.com/in/gerardo-esteban-mart%C3%ADnez-l%C3%B3pez-4326b2288/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Tiboryeah',
      href: 'https://github.com/Tiboryeah',
    },
  ];

  return (
    <div className="app-shell">
      <div className="page-backdrop" />

      <nav className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container topbar-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">GM</span>
            <span className="brand-text">Gerardo Martínez</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#value" onClick={() => setMenuOpen(false)}>{t.nav.value}</a>
            <a href="#stack" onClick={() => setMenuOpen(false)}>{t.nav.stack}</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>{t.nav.experience}</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>{t.nav.projects}</a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
            <button
              type="button"
              className="lang-switch"
              onClick={() => {
                setLang(lang === 'es' ? 'en' : 'es');
                setMenuOpen(false);
              }}
              aria-label="Toggle language"
            >
              <Languages size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </nav>

      <header id="home" className="hero-section">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-badge">
              <Target size={16} />
              <span>{t.hero.badge}</span>
            </div>
            <p className="hero-kicker">{t.hero.subtitle}</p>
            <h1>
              {t.hero.titleLead} <span>{t.hero.titleAccent}</span>
            </h1>
            <p className="hero-description">{t.hero.description}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                {t.hero.primary}
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                {t.hero.secondary}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}cv/CV_GerardoMartinez.pdf`}
                download
                className="btn btn-ghost"
              >
                <Download size={18} />
                {t.hero.download}
              </a>
            </div>

            <div className="hero-facts">
              {t.hero.quickFacts.map((fact) => (
                <div key={fact} className="fact-chip">
                  <CheckCircle2 size={16} />
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className="hero-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="profile-frame">
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Gerardo Esteban Martínez López" />
            </div>

            <div className="summary-panel">
              <h3>{t.highlights.title}</h3>
              <div className="summary-list">
                {t.highlights.items.map((item) => (
                  <div key={item.label} className="summary-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </header>

      <main>
        <section id="value" className="section recruiter-section">
          <div className="container">
            <SectionTitle eyebrow={t.recruiter.eyebrow} title={t.recruiter.title} />
            <p className="section-intro">{t.recruiter.intro}</p>

            <div className="card-grid three">
              {t.recruiter.cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    className="feature-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="feature-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section surface">
          <div className="container two-column">
            <div>
              <SectionTitle eyebrow={t.strengths.eyebrow} title={t.strengths.title} />
            </div>
            <div className="stacked-cards">
              {t.strengths.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className="strength-card"
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="strength-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="container">
            <SectionTitle eyebrow={t.stack.eyebrow} title={t.stack.title} />
            <div className="card-grid three">
              {t.stack.groups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.article
                    key={group.title}
                    className="stack-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="stack-head">
                      <div className="feature-icon">
                        <Icon size={22} />
                      </div>
                      <h3>{group.title}</h3>
                    </div>
                    <div className="tag-list">
                      {group.items.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section surface">
          <div className="container">
            <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} />
            <div className="timeline">
              {t.experience.items.map((item, index) => (
                <motion.article
                  key={`${item.role}-${item.place}`}
                  className="timeline-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="timeline-icon">
                    {index === 0 ? <Briefcase size={18} /> : <Wrench size={18} />}
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-top">
                      <div>
                        <h3>{item.role}</h3>
                        <p className="timeline-place">{item.place}</p>
                      </div>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} />
            <div className="card-grid three">
              {t.projects.items.map((project, index) => (
                <motion.article
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="project-top">
                    <span className="project-label">
                      <Rocket size={16} />
                      Project
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-impact">
                    <Award size={18} />
                    <span>{project.impact}</span>
                  </div>
                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface">
          <div className="container two-column education-layout">
            <div>
              <SectionTitle eyebrow={t.education.eyebrow} title={t.education.title} />
              <p className="section-intro compact">
                {lang === 'es'
                  ? 'La combinación entre ingeniería, práctica autónoma y soporte técnico fortalece tanto la base analítica como la capacidad de resolver problemas bajo presión.'
                  : 'The mix of engineering studies, self-driven practice, and technical support strengthens both analytical thinking and the ability to solve problems under pressure.'}
              </p>
            </div>

            <div className="education-cards">
              {t.education.items.map((item) => (
                <article key={item.name} className="education-card">
                  <div className="education-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                    <span>{item.period}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-shell">
              <div className="contact-copy">
                <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} />
                <p className="section-intro compact">{t.contact.description}</p>

                <div className="contact-meta">
                  <div className="meta-chip">
                    <MapPin size={16} />
                    <span>{t.contact.location}</span>
                  </div>
                  <div className="meta-chip">
                    <MessageSquare size={16} />
                    <span>{t.contact.availability}</span>
                  </div>
                </div>
              </div>

              <div className="contact-grid">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="contact-card"
                    >
                      <div className="contact-icon">
                        <Icon size={20} />
                      </div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Gerardo Esteban Martínez López</p>
          <div className="footer-links">
            <span>React</span>
            <span>Framer Motion</span>
            <span>Vite</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
