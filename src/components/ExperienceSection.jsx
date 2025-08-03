import { HiOutlineBriefcase } from "react-icons/hi2";
const experience = [
  {
    puesto: "Administrativo – Área de Desarrollo",
    empresa: "Universidad Tecnológica Privada de Santa Cruz (UTEPSA)",
    periodo: "Feb 2024 - Actualidad",
    desc: `
        Lideré proyectos de desarrollo de software gestionando equipos bajo Scrum. 
        Planifiqué, supervisé y gestioné tareas con Jira, asegurando entregas oportunas y calidad.
        Implementé soluciones web y sistemas internos usando React, NestJS, Laravel y Django.
        Automatización y optimización de procesos administrativos y académicos.
        Configuración y administración de servidores Ubuntu, Apache y Nginx.
        Promoví buenas prácticas de desarrollo, documentación y control de versiones.
      `,
    stack: [
      "React",
      "NestJS",
      "Laravel",
      "Django",
      "Jira",
      "Scrum",
      "Ubuntu",
      "Apache",
      "Nginx",
    ],
  },
  {
    puesto: "Auxiliar de Laboratorio",
    empresa: "Universidad Tecnológica Privada de Santa Cruz (UTEPSA)",
    periodo: "Feb 2022 - Dic 2023",
    desc: `
        Desarrollo y mantenimiento de sistemas internos con Laravel.
        Soporte técnico a usuarios, atención de incidencias de infraestructura y aplicaciones.
        Colaboración con equipos multidisciplinarios para optimizar servicios y recursos tecnológicos.
      `,
    stack: ["Laravel", "Soporte Técnico", "Colaboración", "Optimización"],
  },
  // Puedes agregar tu experiencia freelance o prácticas si quieres, aquí solo puse las de tu CV.
];

const ExperienceSection = () => (
    <section id="experience" className="flex flex-col items-center py-16 px-2 sm:px-4 ">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#5eead4]">Experiencia Laboral</h3>
      <div className="relative w-full">
        {/* Línea vertical central */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#6366f1]/40 -translate-x-1/2 rounded z-0"></div>
        <div className="flex flex-col gap-12 w-full">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className={`
                relative w-full flex flex-col md:flex-row ${idx % 2 === 0 ? "" : "md:flex-row-reverse"} items-center
              `}
              style={{ minHeight: 120 }}
            >
              {/* Tarjeta */}
              <div className={`
                bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-3xl w-full md:w-[49%] z-10
                border-l-4 border-[#5eead4] transition-all duration-200
                ${idx % 2 === 0 
                  ? "md:mr-2 md:ml-0 hover:border-[#6366f1]" 
                  : "md:ml-2 md:mr-0 hover:border-[#f59e42]"}
                md:text-left text-center
                hover:-translate-y-1 hover:scale-[1.02]
              `}>
                <h4 className="font-semibold text-xl text-[#6366f1] mb-2">{exp.puesto}</h4>
                <div className="text-[#f59e42] font-medium mb-1">@ {exp.empresa}</div>
                <div className="text-gray-400 text-sm mb-2">{exp.periodo}</div>
                <p className="text-[#e0e0e0] mb-2 whitespace-pre-line leading-relaxed">{exp.desc}</p>
                <div className="flex gap-2 flex-wrap justify-center md:justify-start mt-2">
                  {exp.stack.map(skill => (
                    <span key={skill} className="bg-[#5eead4]/20 text-xs text-[#5eead4] rounded-full px-2 py-1 font-semibold">{skill}</span>
                  ))}
                </div>
              </div>
              {/* Punto con ícono alineado al centro */}
              <div className={`
                hidden md:flex absolute left-1/2 -translate-x-1/2 z-20
                flex-col items-center
              `}
                style={{ top: "50%", transform: "translate(-50%, -50%)" }}
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#5eead4] shadow-lg border-4 border-[#181c24]">
                  <HiOutlineBriefcase className="text-[#6366f1]" size={36} />
                </span>
              </div>
              {/* En mobile el punto va arriba de la tarjeta */}
              <div className="md:hidden flex justify-center mb-2">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#5eead4] shadow-lg border-4 border-[#181c24]">
                  <HiOutlineBriefcase className="text-[#6366f1]" size={30} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default ExperienceSection;