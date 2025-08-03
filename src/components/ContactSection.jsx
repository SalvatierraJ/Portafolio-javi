import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:javiersalvatierra44@gmail.com",
    icon: <HiOutlineMail />,
    color: "from-[#5eead4] to-[#6366f1]",
    hover: "text-[#5eead4] shadow-lg",
  },
  {
    label: "GitHub",
    href: "https://github.com/SalvatierraJ",
    icon: <FaGithub />,
    color: "from-[#6366f1] to-[#5eead4]",
    hover: "text-[#6366f1] shadow-lg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/javieralejandrosalvatierra",
    icon: <FaLinkedin />,
    color: "from-[#f59e42] to-[#6366f1]",
    hover: "text-[#f59e42] shadow-lg",
  },
];

const ContactSection = () => (
  <section id="contact" className="flex flex-col items-center py-20 px-2">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.18 }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#5eead4]">Contáctame</h3>
      <p className="text-gray-200 mb-8 text-center">
        ¿Colaboremos? Escríbeme directamente o sígueme en mis redes profesionales.
      </p>
      <motion.a
        href="mailto:javiersalvatierra44@gmail.com"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, type: "spring", bounce: 0.16 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #5eead4" }}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5eead4] to-[#6366f1] text-[#181c24] px-8 py-3 mb-8 rounded-full text-lg font-bold shadow-md hover:from-[#f59e42] hover:to-[#6366f1] transition-all duration-200"
      >
        <HiOutlineMail size={28} />
        javiersalvatierra44@gmail.com
      </motion.a>
      <div className="flex gap-8 justify-center">
        {contactLinks.slice(1).map(({ label, href, icon, color }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener"
            title={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 + i * 0.13, type: "spring", bounce: 0.19 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.2, color: "#5eead4", boxShadow: "0 4px 24px #5eead4" }}
            className={`
              flex items-center justify-center w-14 h-14 text-3xl rounded-full bg-gradient-to-br ${color} text-white shadow-xl transition-all duration-200
              hover:text-[#181c24] hover:bg-[#5eead4]
            `}
          >
            {icon}
          </motion.a>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-8 text-center">También reviso mensajes por LinkedIn y GitHub :)</p>
    </motion.div>
  </section>
);

export default ContactSection;
