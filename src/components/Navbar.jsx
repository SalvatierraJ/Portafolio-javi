import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { to: "hero", label: "Inicio" },
  { to: "about", label: "Sobre mí" },
  { to: "experience", label: "Experiencia" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Proyectos" },
  { to: "contact", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-4">
        <span className="font-bold text-lg tracking-tight text-[#6ee7b7]">Javi.dev</span>

        {/* Desktop nav */}
        <div className="hidden sm:flex space-x-8 text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-60}
              duration={550}
              activeClass="text-[#f59e42]"
              className="cursor-pointer hover:text-[#6ee7b7] transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="sm:hidden text-3xl text-[#5eead4] focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {open && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-[#181c24]/95 backdrop-blur-lg flex flex-col items-center gap-8 py-8 shadow-2xl z-40 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-60}
              duration={550}
              activeClass="text-[#f59e42]"
              className="text-lg font-semibold text-[#5eead4] cursor-pointer hover:text-[#f59e42] transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
