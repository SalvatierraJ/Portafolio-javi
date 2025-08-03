import javierImg from '../assets/1.png'
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const AboutSection = () => (
  <section id="about" className="flex flex-col items-center justify-center py-16 px-4 max-w-4xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#5eead4]">Sobre mí</h3>
    <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
      {/* Descripción */}
      <div className="text-center md:text-left md:w-2/3">
        <p className="text-lg text-[#e0e0e0] mb-4">
          Soy <span className="font-semibold text-[#f59e42]">Javier Alejandro Salvatierra Dorado</span>, Ingeniero de Sistemas y <span className="text-[#6366f1]">Desarrollador Fullstack</span> de Santa Cruz, Bolivia.<br /><br />
          Cuento con experiencia liderando y desarrollando proyectos de software para instituciones académicas y empresariales, aplicando <span className="font-semibold text-[#5eead4]">Laravel, React, NestJS, Django</span> y tecnologías modernas de backend y frontend.<br /><br />
          Me especializo en crear <span className="font-semibold text-[#5eead4]">APIs REST, sistemas internos y plataformas web</span>, optimizando procesos y automatizando tareas mediante buenas prácticas, metodologías ágiles y trabajo en equipo.<br /><br />
          Siempre busco nuevos desafíos, aprendiendo tecnologías como Docker, FastAPI y AWS, y perfeccionando la integración de sistemas, bases de datos y despliegue en la nube.
        </p>
        {/* Botones animados y con íconos */}
        <div className="flex gap-4 justify-center md:justify-start mt-4">
          <a
            href="mailto:javiersalvatierra44@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#6366f1] text-white font-semibold shadow hover:scale-105 hover:shadow-lg hover:bg-[#5eead4] hover:text-[#181c24] transition-all duration-200"
            style={{ minWidth: "160px", justifyContent: "center" }}
          >
            <HiOutlineMail size={22} />
            Contáctame
          </a>
          <a
            href="/JavierAlejandroSalvatierraDoradoResume DEV.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#f59e42] text-[#181c24] font-semibold shadow hover:scale-105 hover:shadow-lg hover:bg-[#6366f1] hover:text-white transition-all duration-200"
            style={{ minWidth: "160px", justifyContent: "center" }}
            download
          >
            <FiDownload size={22} />
            Descargar CV
          </a>
        </div>
      </div>
      {/* Imagen grande, a la derecha en desktop */}
      <img
        src={javierImg}
        alt="Javier Alejandro Salvatierra Dorado"
        className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#6366f1] shadow-2xl mb-6 md:mb-0"
      />
    </div>
  </section>
)

export default AboutSection
