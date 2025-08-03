import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center min-h-[70vh] text-center"
    id="hero"
  >
    {/* Nombre y roles */}
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
      Hola, soy{" "}
      <span className="text-[#5eead4]">Javier Alejandro Salvatierra</span>
    </h1>
    <div className="flex justify-center items-center gap-2 mb-4">
      <span className="text-xl md:text-2xl font-semibold text-[#6366f1]">
        Ingeniero de Sistemas | Fullstack Developer&nbsp;
      </span>
      <ReactTyped
        strings={[
          "Laravel & React Specialist",
          "API REST Builder",
          "NestJS Enthusiast",
          "Backend & DevOps Explorer",
        ]}
        typeSpeed={60}
        backSpeed={30}
        loop
        className="text-xl md:text-2xl font-semibold text-[#f59e42]"
      />
    </div>

    {/* Bio resumida */}
    <p className="max-w-2xl text-base md:text-lg text-gray-200 mb-4">
      Experto en desarrollo de APIs y plataformas web robustas.
      <br />
      Creo soluciones eficientes con{" "}
      <span className="text-[#5eead4] font-semibold">
        Laravel, React, NestJS y Django
      </span>
      .<br />
      Me apasiona liderar equipos, optimizar procesos y aplicar buenas prácticas
      de software.
    </p>

    {/* Badges de tecnologías */}
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      <span className="bg-[#5eead4]/20 text-[#5eead4] rounded-full px-3 py-1 text-sm font-medium">
        Laravel
      </span>
      <span className="bg-[#6366f1]/20 text-[#6366f1] rounded-full px-3 py-1 text-sm font-medium">
        React
      </span>
      <span className="bg-[#f59e42]/20 text-[#f59e42] rounded-full px-3 py-1 text-sm font-medium">
        NestJS
      </span>
      <span className="bg-[#fff]/10 text-white rounded-full px-3 py-1 text-sm font-medium">
        Django
      </span>
      <span className="bg-[#fff]/10 text-white rounded-full px-3 py-1 text-sm font-medium">
        Docker
      </span>
    </div>

    {/* CTA y redes */}
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <a
        href="#projects"
        className="px-8 py-3 rounded-full bg-[#5eead4] text-[#181c24] font-bold shadow-md hover:scale-105 transition"
      >
        Ver proyectos
      </a>
      <div className="flex gap-3 mt-2 md:mt-0">
        <a
          href="https://github.com/SalvatierraJ"
          target="_blank"
          rel="noopener"
          title="GitHub"
          className="group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#181c24] text-[#5eead4] border-2 border-[#5eead4] group-hover:bg-[#5eead4] group-hover:text-[#181c24] transition">
            <FaGithub size={24} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/javier-alejandro-salvatierra-dorado-b72b49276"
          target="_blank"
          rel="noopener"
          title="LinkedIn"
          className="group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#181c24] text-[#6366f1] border-2 border-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-[#181c24] transition">
            <FaLinkedin size={24} />
          </span>
        </a>
        <a
          href="mailto:javiersalvatierra44@gmail.com"
          title="Email"
          className="group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#181c24] text-[#f59e42] border-2 border-[#f59e42] group-hover:bg-[#f59e42] group-hover:text-[#181c24] transition">
            <HiOutlineMail size={24} />
          </span>
        </a>
      </div>
    </div>

    {/* Fondo decorativo */}
    <svg
      className="absolute left-0 top-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden
    >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#181c24" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="50%" cy="30%" rx="60%" ry="30%" fill="url(#grad1)" />
    </svg>
  </section>
);

export default HeroSection;
