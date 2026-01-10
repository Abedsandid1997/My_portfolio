import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "../components/AnimatedButton";
import Project from "../components/projectsSection/Project";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionPresets";
import { projects } from "../components/projectsSection/data";

const Projects = () => {
  return (
    <section id="projects" className="py-30 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <motion.span
            {...fadeIn()}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Featured Work
          </motion.span>

          <motion.h2
            {...fadeIn({ delay: 0.1 })}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Projects that{" "}
            <span className="font-serif italic font-normal text-primary">
              {" "}
              make an impact.
            </span>
          </motion.h2>
          <motion.p
            {...fadeIn({ delay: 0.2 })}
            className="text-muted-foreground"
          >
            A selection of my recent work.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project project={project} key={index} index={index} />
          ))}
        </div>

        <motion.div {...fadeIn({ delay: 0.3 })} className="text-center mt-12">
          <AnimatedButton>
            <a href="https://github.com/Abedsandid1997">View All Projects</a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
