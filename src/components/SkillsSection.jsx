import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaDocker,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaUbuntu,
  FaJava,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNestjs,
  SiExpress,
  SiVuedotjs,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiNginx,
  SiApachespark,
  SiFastapi,
  SiTypescript,
  SiJirasoftware,
  SiPostman,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "React", icon: <FaReact className="text-[#5eead4]" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: "Bootstrap", icon: <FaCss3Alt className="text-purple-600" /> },

  // Backend
  { name: "Laravel", icon: <FaLaravel className="text-[#f55247]" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-800" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },

  // Bases de datos
  { name: "MySQL", icon: <SiMysql className="text-[#00758f]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },

  // DevOps / Infraestructura
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Ubuntu", icon: <FaUbuntu className="text-orange-500" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "Nginx", icon: <SiNginx className="text-green-700" /> },
  { name: "Apache", icon: <SiApachespark className="text-orange-500" /> },

  // Herramientas
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Jira", icon: <SiJirasoftware className="text-blue-500" /> },

  // Metodologías
  { name: "Scrum", icon: <span className="text-xl">🏉</span> },
  { name: "XP", icon: <span className="text-xl">⚡</span> },

  // Otros (sin icono específico)
  { name: "JWT", icon: <span className="text-xl">🔑</span> },
  { name: "Bee-Queue", icon: <span className="text-xl">🐝</span> },
];

const chaoticStyles = [
  "text-base px-4 py-2",
  "text-lg px-5 py-2 font-semibold",
  "text-sm px-3 py-1.5 font-medium",
  "text-lg px-6 py-2 font-bold tracking-wide",
  "text-base px-4 py-2 font-semibold italic",
  "text-md px-5 py-1.5 font-bold",
  "text-sm px-4 py-1 font-semibold",
];

const chaoticColors = [
  "bg-[#232b37] border-[#5eead4]",
  "bg-[#181c24] border-[#6366f1]",
  "bg-[#26293d] border-[#f59e42]",
  "bg-[#161b22] border-[#38bdf8]",
  "bg-[#212936] border-[#e0e0e0]",
];

const SkillsSection = () => (
  <section id="skills" className="flex flex-col items-center py-16 px-2">
    <h3 className="text-2xl font-bold mb-10 text-[#5eead4]">Skills & Herramientas</h3>
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: i * 0.06,
            type: "spring",
            stiffness: 80,
            damping: 10,
          }}
          whileHover={{
            scale: 1.12,
            rotate: i % 2 ? -5 : 5,
            boxShadow: "0 8px 32px #5eead4",
          }}
          className={`
            flex items-center gap-2 rounded-full shadow border-2 
            cursor-pointer group
            ${chaoticStyles[i % chaoticStyles.length]} 
            ${chaoticColors[i % chaoticColors.length]}
            hover:z-10
          `}
          style={{
            rotate: `${((i % 5) - 2) * 3}deg`,
          }}
        >
          <span className="text-xl md:text-2xl group-hover:scale-110 transition">
            {skill.icon}
          </span>
          <span className="group-hover:text-[#5eead4]">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;