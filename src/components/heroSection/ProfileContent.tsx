import Button from "../Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedButton from "../AnimatedButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionPresets";
import resume from "../../assets/Abdelraman-CV.pdf";

const ProfileContent = () => {
  return (
    <div className="space-y-8">
      <motion.div {...fadeIn({ delay: 0 })}>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Software Developer
        </span>
      </motion.div>

      <div className="space-y-4">
        <motion.h1
          {...fadeIn({ delay: 0.1 })}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {" "}
          Building
          <span className="text-primary glow-text"> Intelligent</span>
          <br />
          Web Systems with
          <br />
          <span className="font-serif italic font-normal text-white">
            Precision.
          </span>
        </motion.h1>
        <motion.p
          {...fadeIn({ delay: 0.2 })}
          className="text-lg text-muted-foreground max-w-lg"
        >
          Hi, I'm Abdelrahman Sandid. I combine modern Full Stack development
          with AI integration. Specializing in React, Next.js, Node.js, and
          Express, I build smarter, future-ready applications.
        </motion.p>
      </div>

      <motion.div {...fadeIn({ delay: 0.3 })} className="flex flex-wrap gap-4">
        <Button size="lg">
          <a href="#contact">Contact Me</a>
          <ArrowRight size={20} />
        </Button>
        <AnimatedButton>
          <a href={resume} download={resume}>
            Download CV
          </a>
          <Download size={20} />
        </AnimatedButton>
      </motion.div>

      {/* Social Links */}
      <motion.div
        {...fadeIn({ delay: 0.4 })}
        className="flex items-center gap-4"
      >
        <span className="text-sm text-muted-foreground">Follow Me:</span>
        {[
          { icon: FaGithub, href: "https://github.com/Abedsandid1997" },
          {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/abdelraman-sandid-2690a2370/",
          },
        ].map((social, index) => (
          <a
            href={social.href}
            key={index}
            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            {<social.icon />}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfileContent;
