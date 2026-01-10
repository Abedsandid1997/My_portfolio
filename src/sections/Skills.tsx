import SkillsShow from "../components/SkillsSection/SkillsShow";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionPresets";
import Skill from "../components/SkillsSection/Skill";
import { skillCategories } from "../components/SkillsSection/data";

const Skills = () => {
  return (
    <section id="skills" className="py-30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            {...fadeIn({ delay: 0 })}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Technical Proficiency
          </motion.span>
          <motion.h2
            {...fadeIn({ delay: 0.1 })}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            My Tech Stack &{" "}
            <span className="font-serif italic font-normal text-primary">
              Expertise.
            </span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <Skill key={index} category={category} index={index} />
          ))}
        </div>
        <SkillsShow />
      </div>
    </section>
  );
};

export default Skills;
