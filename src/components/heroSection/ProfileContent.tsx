import Button from "../Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedButton from "../AnimatedButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionPresets";
const ProfileContent = () => {
  return (
    <div className="space-y-8">
      <motion.div {...fadeIn({ delay: 0.4 })}>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Software Developer
        </span>
      </motion.div>

      <div className="space-y-4">
        <motion.h1
          {...fadeIn({ delay: 0.3 })}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Crafting <span className="text-primary glow-text">digital</span>
          <br />
          experinces with
          <br />
          <span className="font-serif italic font-normal text-white">
            precision.
          </span>
        </motion.h1>
        <motion.p
          {...fadeIn({ delay: 0.2 })}
          className="text-lg text-muted-foreground max-w-lg"
        >
          Hi, I'm Abdelraman Sandid - a Full Stack Developer capable of
          architecting and building complete web systems from the ground up.
          Specializing in React, Next.js, Node.js, and Express, I bridge the gap
          between dynamic front-end interfaces and robust back-end logic to
          deliver scalable, high-performance applications.
        </motion.p>
      </div>

      <motion.div {...fadeIn({ delay: 0.1 })} className="flex flex-wrap gap-4">
        <Button size="lg">
          Contact Me <ArrowRight size={20} />
        </Button>
        <AnimatedButton>
          <Download size={20} />
          Download CV
        </AnimatedButton>
      </motion.div>

      {/* Social Links */}
      <motion.div {...fadeIn()} className="flex items-center gap-4">
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
