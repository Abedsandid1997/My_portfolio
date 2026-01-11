import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../utils/motionPresets";

const navLinks: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  const isActive = isScrolled || isMobileMenuOpen;
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isActive ? "glass-strong py-3 " : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          A<span className="text-primary">S</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="glass rounded-full px-2 py-1 flex items-center gap-1"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="hidden md:block"
        >
          <Button size="sm">
            {" "}
            <a href="#contact">Contact</a>
          </Button>
        </motion.div>

        {/* Mobile menu button */}

        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full glass-strong border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center gap-8 py-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  {...fadeIn({
                    delay: 0.1 + index * 0.1,
                    duration: 0.3,
                    y: -10,
                  })}
                  className="text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div {...fadeIn({ delay: 0.5, duration: 0.3, y: -10 })}>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button size="lg" className="px-8">
                    Contact Me
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
