import { FaReact, FaNodeJs, FaLaravel, FaPython, FaPhp } from "react-icons/fa";
import { SiDjango, SiFastapi, SiVuedotjs } from "react-icons/si";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Plataforma de Gestión de Laboratorios",
    desc: `Sistema web para reservas, inventario y asignación de laboratorios universitarios, autenticación social/local, notificaciones y reportes en tiempo real. Desplegado sobre Ubuntu Server con Nginx y PostgreSQL.`,
    tech: ["Django", "React", "PostgreSQL", "Nginx", "Ubuntu", "JWT"],
    demo: "#",
    repo:"https://github.com/SalvatierraJ/Plataforma-de-Gestion-de-Laboratorios.git"
  },
  {
    title: "API de Control Biométrico con ZKTeco K30",
    desc: `API RESTful para gestionar usuarios, huellas digitales y asistencias integrando el dispositivo biométrico ZKTeco K30. Arquitectura modular, endpoints de registro y reportes.`,
    tech: ["Python", "FastAPI", "MySQL", "pyzk", "Swagger"],
    repo: "https://github.com/SalvatierraJ/API-Biometrico.git",
  },
  {
    title: "API de WhatsApp Automatizada",
    desc: `API en Node.js y Express para envío automatizado de mensajes WhatsApp, manejo de múltiples sesiones, colas Bee-Queue y persistencia robusta de sesiones.`,
    tech: ["Node.js", "Express", "Bee-Queue", "whatsapp-web.js", "MySQL"],
    repo: "https://github.com/SalvatierraJ/API-WHATSAPPJS.git",
  },
  {
    title: "Bolsa de Trabajo UTEPSA",
    desc: `Plataforma web integral para estudiantes y empresas universitarias. ERP de gestión, autenticación local/social, base de datos optimizada y despliegue en AWS.`,
    tech: ["Vue.js", "Laravel", "JWT", "MySQL", "AWS EC2"],
    repo: "https://github.com/SalvatierraJ/SISTEMA-BOLSA-DE-TRABAJO-API",
  },
  {
    title: "Sistema de Evaluación de Proyectos para Feria",
    desc: `Plataforma web para registro y evaluación eficiente de proyectos académicos, asignación automática de jurados y reportes mediante procedimientos almacenados.`,
    tech: ["PHP", "MySQL (MariaDB)", "HTML", "CSS", "Bootstrap", "Apache"],
    repo: "https://github.com/SalvatierraJ/PlataformaDeEvaluacion.git",
  },
  {
    title: "Gestor Estudiantil",
    desc: `    ERP académico integral para universidades, permite la gestión completa de inscripciones, asignación y programación de materias, control de avance curricular, así como administración de usuarios, roles y horarios. Incluye comunicación interna entre estudiantes y docentes, notificaciones, vista de progreso, selección de materias optativas, y validación automática de requisitos previos. Desarrollado con frontend en React, backend en Node.js (NestJS), y estilos modernos con TailwindCSS.
`,
    tech: ["React", "Tailwind", "Node.js", "NestJS", "PostgreSQL"],
    demo: "https://utepsa-gestura.netlify.app/",
    repo: "https://github.com/SalvatierraJ/Gestura-Back.git",
  },
];

const projectIcons = [
  {
    icon: <SiDjango className="text-4xl text-[#5eead4] drop-shadow-xl" />,
    tooltip: "Django",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-300 drop-shadow-xl" />,
    tooltip: "Python",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-400 drop-shadow-xl" />,
    tooltip: "Node.js",
  },
  {
    icon: <FaLaravel className="text-4xl text-[#f55247] drop-shadow-xl" />,
    tooltip: "Laravel",
  },
  {
    icon: <FaPhp className="text-4xl text-[#868cb5] drop-shadow-xl" />,
    tooltip: "PHP",
  },
  {
    icon: <FaReact className="text-4xl text-[#5eead4] drop-shadow-xl" />,
    tooltip: "React",
  },
];

const accentColors = [
  "from-[#5eead4] to-[#38bdf8]",
  "from-[#6366f1] to-[#5eead4]",
  "from-[#f59e42] to-[#6366f1]",
  "from-[#38bdf8] to-[#181c24]",
  "from-[#6366f1] to-[#f59e42]",
  "from-[#181c24] to-[#5eead4]",
];

const ProjectsSection = () => (
  <section id="projects" className="flex flex-col items-center py-16 px-2">
    <h3 className="text-2xl md:text-3xl font-bold mb-10 text-[#5eead4]">
      Proyectos Destacados
    </h3>
    <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
      {projects.map((p, idx) => (
        <div
          key={p.title}
          className={`
            relative flex flex-col gap-5 rounded-2xl shadow-2xl p-7 bg-white/10 backdrop-blur-md border-l-8 
            border-[#5eead4] hover:border-[#f59e42] transition-all duration-300
            group overflow-hidden
          `}
        >
          {/* Glow lateral decorativo */}
          <div
            className={`
            absolute left-0 top-0 h-full w-2 bg-gradient-to-b
            ${
              accentColors[idx % accentColors.length]
            } opacity-70 blur-sm pointer-events-none
          `}
          ></div>

          {/* Ícono principal animado con tooltip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.13, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.18, boxShadow: "0 0 24px #5eead4" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute -top-6 left-6 bg-[#181c24]/90 p-2 rounded-full shadow-xl z-10 border-2 border-[#5eead4] cursor-pointer group/icon"
          >
            {projectIcons[idx].icon}
            {/* Tooltip */}
            <span
              className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-[#232b37] text-xs text-[#5eead4] 
              opacity-0 group-hover/icon:opacity-100 pointer-events-none transition-all duration-200 shadow-lg
              whitespace-nowrap z-50
            "
            >
              {projectIcons[idx].tooltip}
            </span>
          </motion.div>

          <h4 className="text-xl font-extrabold text-[#5eead4] mb-1 pt-2 pl-1">
            {p.title}
          </h4>
          <p className="text-base text-gray-100 leading-relaxed">{p.desc}</p>
          <div className="flex gap-2 flex-wrap mt-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="bg-[#6366f1]/30 text-xs font-semibold rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap mt-4">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#5eead4] text-[#181c24] font-bold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#38bdf8]"
              >
                Live Demo
              </a>
            )}
            {p.repo && p.repo !== "#" && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#5eead4] to-[#6366f1] text-[#181c24] font-bold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-[#f59e42] hover:to-[#6366f1]"
              >
                Ver Repo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
