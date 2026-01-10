import { motion } from "framer-motion";
import Experience from "../components/experienceSection/Experience";
import { fadeIn } from "../utils/motionPresets";
import { experiences } from "../components/experienceSection/data";

const Experiences = () => {
  return (
    <section id="experience" className="py-30 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96
      bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.span
            {...fadeIn({ delay: 0 })}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Career Journey
          </motion.span>
          <motion.h2
            {...fadeIn({ delay: 0.1 })}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Experience that
            <span className="font-serif italic font-normal text-primary">
              {" "}
              speaks volumes.
            </span>
          </motion.h2>
          <motion.p
            {...fadeIn({ delay: 0.2 })}
            className="text-muted-foreground"
          >
            A timeline of my professinoal growth.
          </motion.p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Experience experience={exp} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
