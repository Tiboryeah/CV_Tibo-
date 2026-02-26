import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, Phone, MapPin,
  Terminal, Database, Layout, Code2,
  Cpu, Network, Shield, Binary, ExternalLink,
  ChevronRight, ArrowRight, User, Briefcase,
  Layers, ChevronDown, Award, Globe,
  Calendar, CheckCircle2, FlaskConical, MessageSquare,
  Users, Lightbulb, Brain, Gauge, Clock,
  Zap, Heart, Target, Languages
} from 'lucide-react';
import './App.css';

const translations = {
  es: {
    nav: { about: 'Perfil', tech: 'Stack', exp: 'Experiencia', port: 'Portfolio', contact: 'Contacto' },
    hero: {
      badge: 'Estudiante de Ingeniería de Sistemas',
      subtitle: 'Software Engineer & Cloud Specialist',
      desc: 'Enfocado en la creación de soluciones técnicas resilientes y el desarrollo colaborativo de software. Mi meta es aportar valor de ingeniería a proyectos que impacten positivamente.',
      viewPort: 'Ver Portafolio',
      collab: 'Colaboremos'
    },
    stats: { profile: 'Perfil', hours: 'Horario Libre', location: 'Sede', valueProfile: 'Software Eng.', valueHours: '7 AM - 3 PM', valueLocation: 'CDMX, MX' },
    about: { title: 'Visión & Compromiso', bio: 'Soy un estudiante de Ingeniería en Sistemas Computacionales con experiencia práctica en desarrollo de software, computo en la nube, redes y reparación de equipos electrónicos. Me apasiona crear soluciones funcionales, especialmente proyectos relacionados a la nube, comunicación en red y bases de datos. Me caracterizo por aprender rápido, ser responsable y trabajar bien en equipo.', edu: 'Formación Académica' },
    tech: { title: 'Stack Técnico', intro: 'Mi ecosistema tecnológico abarca desde lenguajes de bajo nivel hasta arquitecturas modernas de IA y Cloud.', soft: 'Soft Skills' },
    exp: { title: 'Trayectoria Profesional', support: 'Soporte Técnico y Reparación de Equipos', dev: 'Desarrollador de Software' },
    portfolio: { title: 'Proyectos Destacados' },
    contact: { title: '¿Construimos algo juntos?', desc: 'Estoy disponible para integrarme a equipos dinámicos y aportar soluciones técnicas de calidad.', email: 'Correo', phone: 'Teléfono', location: 'Ubicación' }
  },
  en: {
    nav: { about: 'Profile', tech: 'Stack', exp: 'Experience', port: 'Portfolio', contact: 'Contact' },
    hero: {
      badge: 'Systems Engineering Student',
      subtitle: 'Software Engineer & Cloud Specialist',
      desc: 'Focused on creating resilient technical solutions and collaborative software development. My goal is to provide engineering value to projects that make a positive impact.',
      viewPort: 'View Portfolio',
      collab: 'Let\'s Collab'
    },
    stats: { profile: 'Profile', hours: 'Free Hours', location: 'Location', valueProfile: 'Software Eng.', valueHours: '7 AM - 3 PM', valueLocation: 'CDMX, MX' },
    about: { title: 'Vision & Commitment', bio: 'I am a Systems Engineering student with practical experience in software development, cloud computing, networking, and electronics repair. I am passionate about creating functional solutions, especially projects related to cloud, network communication, and databases. I am characterized by learning fast, being responsible, and working well in a team.', edu: 'Academic Background' },
    tech: { title: 'Tech Stack', intro: 'My technological ecosystem ranges from low-level languages to modern AI and Cloud architectures.', soft: 'Soft Skills' },
    exp: { title: 'Professional Path', support: 'Technical Support & Equipment Repair', dev: 'Software Developer' },
    portfolio: { title: 'Featured Projects' },
    contact: { title: 'Let\'s build something together?', desc: 'I am available to join dynamic teams and provide quality technical solutions.', email: 'Email', phone: 'Phone', location: 'Location' }
  }
};

// --- Sub-components ---

const SectionHeading = ({ children, icon: Icon, subtitle, centered }) => (
  <div className={`section-head ${centered ? 'text-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="subtitle">
        {Icon && <Icon size={14} className="sub-icon" />} {subtitle}
      </span>
      <h2>{children}</h2>
    </motion.div>
  </div>
);

const SkillTag = ({ children, category }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'core': return 'rgba(88, 166, 255, 0.1)';
      case 'data': return 'rgba(210, 153, 34, 0.1)';
      case 'ml': return 'rgba(63, 185, 80, 0.1)';
      default: return 'rgba(255, 255, 255, 0.03)';
    }
  };

  const getTextColor = () => {
    switch (category) {
      case 'core': return 'var(--blue-primary)';
      case 'data': return 'var(--gold)';
      case 'ml': return 'var(--success)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05, backgroundColor: getCategoryColor() }}
      className="skill-tag"
      style={{ color: getTextColor(), borderColor: getCategoryColor() }}
    >
      {children}
    </motion.span>
  );
};

const ProjectCard = ({ title, description, tags, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
    className="project-card glass"
  >
    <div className="project-header">
      <div className="project-icon-box">
        <Icon size={24} />
      </div>
      <div className="project-status">Producción</div>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tags">
      {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
    </div>
  </motion.div>
);

const SoftSkill = ({ icon: Icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="soft-skill-item glass"
  >
    <Icon size={18} className="soft-icon" />
    <span>{title}</span>
  </motion.div>
);

// --- Main App ---

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('es');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    { name: 'Programación C / C++', category: 'core' },
    { name: 'C# .NET', category: 'core' },
    { name: 'Python', category: 'core' },
    { name: 'JavaScript / Node.js', category: 'core' },
    { name: 'React / Frontend', category: 'core' },
    { name: 'MongoDB (Avanzado)', category: 'data' },
    { name: 'PostgreSQL / SQL', category: 'data' },
    { name: 'Pandas & NumPy', category: 'data' },
    { name: 'Scikit-learn', category: 'ml' },
    { name: 'XGBoost', category: 'ml' },
    { name: 'PyTorch (Deep Learning)', category: 'ml' },
    { name: 'FastAPI', category: 'core' },
    { name: 'Google Cloud (BigQuery, Compute Engine)', category: 'ml' },
    { name: 'Docker / MLOps', category: 'ml' },
    { name: 'MLflow', category: 'ml' },
    { name: 'Matplotlib / Seaborn', category: 'data' },
    { name: 'Modelado UML / ISO/IEEE SRS', category: 'core' },
    { name: 'Sockets TCP/UDP', category: 'core' },
    { name: 'Git / GitHub', category: 'core' },
    { name: 'Copilot / Gemini / GPT (Advanced AI Use)', category: 'core' },
  ];

  return (
    <div className="app-container">
      {/* Background Ambience */}
      <div className="ambience">
        <div className="glow spot-1" />
        <div className="glow spot-2" />
        <div className="glow spot-3" />
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-main">GERARDO</span>
            <span className="logo-dot">.</span>
          </div>
          <div className="nav-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#skills">{t.nav.tech}</a>
            <a href="#experience">{t.nav.exp}</a>
            <a href="#projects">{t.nav.port}</a>
            <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
              <Languages size={16} /> {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a href="#contact" className="btn-nav">{t.nav.contact}</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="hero-layout">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <div className="badge-wrapper">
                <span className="badge">
                  <span className="dot" /> {t.hero.badge}
                </span>
              </div>
              <h1 className="hero-name">
                <span className="name-top">MARTÍNEZ LÓPEZ</span>
                <span className="name-bottom text-gradient">GERARDO ESTEBAN</span>
              </h1>
              <p className="hero-subtitle">
                {t.hero.subtitle}
              </p>
              <p className="hero-desc">
                {t.hero.desc}
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn-primary">{t.hero.viewPort} <ArrowRight size={18} /></a>
                <a href="#contact" className="btn-secondary">{t.hero.collab}</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-visual"
            >
              <div className="profile-card-premium glass">
                <div className="profile-img-container">
                  <img src="/profile.jpg" alt="Gerardo Martínez" />
                </div>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-label">{t.stats.profile}</span>
                    <span className="stat-val">{t.stats.valueProfile}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">{t.stats.hours}</span>
                    <span className="stat-val">{t.stats.valueHours}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">{t.stats.location}</span>
                    <span className="stat-val">{t.stats.valueLocation}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="scroll-hint">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </header>

      <main>
        <section id="about" className="section bg-dim">
          <div className="container">
            <div className="about-bento">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="bento-bio glass"
              >
                <SectionHeading subtitle={lang === 'es' ? 'BIOGRAFÍA' : 'BIOGRAPHY'} icon={User}>{t.about.title}</SectionHeading>
                <p>
                  {t.about.bio}
                </p>
              </motion.div>

              <div className="bento-side">
                <div className="education-card glass">
                  <div className="card-icon"><Award size={20} /></div>
                  <h3>{t.about.edu}</h3>
                  <div className="edu-item">
                    <span className="edu-year">2022 - Actualidad</span>
                    <p><strong>IPN - ESCOM</strong></p>
                    <p className="edu-sub">Ingeniería en Sistemas Computacionales</p>
                  </div>
                  <div className="edu-item">
                    <span className="edu-year">2017 - 2021</span>
                    <p><strong>UnADM</strong></p>
                    <p className="edu-sub">Univ. Abierta y a Distancia de México</p>
                  </div>
                  <div className="edu-item">
                    <span className="edu-year">2015 - 2017</span>
                    <p><strong>Prepa en línea SEP</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="skills-layout">
              <div className="skills-text">
                <SectionHeading subtitle={lang === 'es' ? 'TECNOLOGÍAS' : 'TECHNOLOGIES'} icon={Terminal}>{t.tech.title}</SectionHeading>
                <p className="skills-intro">{t.tech.intro}</p>
                <div className="skill-cloud">
                  {techStack.map((skill, i) => (
                    <SkillTag key={i} category={skill.category}>{skill.name}</SkillTag>
                  ))}
                </div>
              </div>

              <div className="soft-skills-area">
                <SectionHeading subtitle={lang === 'es' ? 'COMPETENCIAS' : 'SKILLS'} icon={Zap}>{t.tech.soft}</SectionHeading>
                <div className="soft-skills-grid">
                  <SoftSkill icon={MessageSquare} title="Comunicación Efectiva" />
                  <SoftSkill icon={Users} title="Trabajo en Equipo" />
                  <SoftSkill icon={Lightbulb} title="Resolución de Problemas" />
                  <SoftSkill icon={Brain} title="Pensamiento Crítico" />
                  <SoftSkill icon={Gauge} title="Adaptabilidad" />
                  <SoftSkill icon={Clock} title="Gestión del Tiempo" />
                  <SoftSkill icon={Target} title="Liderazgo" />
                  <SoftSkill icon={Heart} title="Empatía" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section bg-dim">
          <div className="container">
            <SectionHeading subtitle={lang === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE'} icon={Briefcase}>{t.exp.title}</SectionHeading>
            <div className="timeline-v2">
              <div className="timeline-card glass">
                <div className="card-top">
                  <span className="company">ESCOM - Servicio Social</span>
                  <span className="date">{lang === 'es' ? 'Mantenimiento y Soporte' : 'Maintenance & Support'}</span>
                </div>
                <h3>{t.exp.support}</h3>
                <ul>
                  <li>Diagnóstico de fallas, sustitución de componentes y optimización del rendimiento de hardware.</li>
                  <li>Atención directa a usuarios y gestión de equipos computacionales.</li>
                  <li>Documentación técnica y aplicación de buenas prácticas de electrónica.</li>
                </ul>
              </div>

              <div className="timeline-card glass">
                <div className="card-top">
                  <span className="company">{lang === 'es' ? 'Trabajo Autónomo & Académico' : 'Freelance & Academic Work'}</span>
                  <span className="date">{lang === 'es' ? 'Enero 2022 - Presente' : 'January 2022 - Present'}</span>
                </div>
                <h3>{t.exp.dev}</h3>
                <ul>
                  <li>Desarrollo de aplicaciones cliente-servidor con sockets TCP/UDP en Python y C.</li>
                  <li>Diseño de APIs robustas y gestión de datos con MongoDB y MERN Stack.</li>
                  <li>Creación de interfaces visuales con manejo de imágenes RGB (C, C++, C#).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeading subtitle={lang === 'es' ? 'PORTAFOLIO' : 'PORTFOLIO'} icon={Layers} centered>{t.portfolio.title}</SectionHeading>
            <div className="projects-grid-modern">
              <ProjectCard
                index={0}
                title="Riesgos en Línea (TT 2026)"
                description="Plataforma web preventiva para padres de familia. Integra reportes interactivos, flujos de UX modernos y lineamientos estrictos de privacidad de datos."
                tags={['React', 'MERN Stack', 'ISO/IEEE SRS', 'UX/UI']}
                icon={Shield}
              />
              <ProjectCard
                index={1}
                title="Discord Server Admin Bot"
                description="Bot personalizado desplegado en Google Cloud. Comandos automatizados, gestión de permisos escalable y disponibilidad 24/7."
                tags={['Python', 'GCP', 'Cloud Engine', 'APIs']}
                icon={Terminal}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-gradient-cta">
          <div className="container text-center">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              className="cta-glass glass"
            >
              <div className="cta-icon"><MessageSquare size={40} /></div>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.desc}</p>

              <div className="contact-details">
                <a href="mailto:tiboryeahrock@gmail.com" className="contact-link">
                  <div className="link-icon"><Mail size={20} /></div>
                  <div className="link-text">
                    <span className="link-label">{t.contact.email}</span>
                    <span className="link-val">tiboryeahrock@gmail.com</span>
                  </div>
                </a>
                <a href="tel:5640006312" className="contact-link">
                  <div className="link-icon"><Phone size={20} /></div>
                  <div className="link-text">
                    <span className="link-label">{t.contact.phone}</span>
                    <span className="link-val">5640006312</span>
                  </div>
                </a>
                <div className="contact-link no-click">
                  <div className="link-icon"><MapPin size={20} /></div>
                  <div className="link-text">
                    <span className="link-label">{t.contact.location}</span>
                    <span className="link-val">Toltecas 508, CDMX</span>
                  </div>
                </div>
              </div>

              <div className="social-links-v2">
                <a href="https://github.com/Tiboryeah" target="_blank" className="social-btn glass"><Github /> Github</a>
                <a href="https://www.linkedin.com/in/gerardo-esteban-mart%C3%ADnez-l%C3%B3pez-4326b2288/" target="_blank" className="social-btn glass blue"><Linkedin /> LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer-v2">
        <div className="container">
          <div className="footer-content">
            <p>© 2026 Gerardo Esteban Martínez López</p>
            <div className="footer-tech">
              <span>React 18</span>
              <span>Framer Motion</span>
              <span>Vite</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
