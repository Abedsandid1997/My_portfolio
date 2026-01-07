import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionPresets";

export type ExperienceData = {
  period: string;
  role: string;
  where: string;
  description?: string;
  technologies: string[];
  current: boolean;
};

type Props = {
  experience: ExperienceData;
  index: number;
};

const Experience = ({ experience, index }: Props) => {
  return (
    <motion.div
      {...fadeIn({ y: 30, delay: index * 0.1 })}
      className="relative grid md:grid-cols-2 gap-8"
      
    >
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
        )}
      </div>

      <div
        className={`pl-8 md:pl-0 ${
          index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
        }`}
      >
        <div
          className={`glass p-6 rounded-2xl border border-primary/30  hover:border-primary/90 transition-all duration-500`}
        >
          <span className="text-sm text-primary font-medium">
            {experience.period}
          </span>
          <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
          <p className="text-muted-foreground">{experience.where}</p>
          <p className="text-sm text-muted-foreground mt-4">
            {experience.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 mt-4 ${
              index % 2 === 0 ? "md:justify-end" : ""
            }`}
          >
            {experience.technologies.map((tech, tecI) => (
              <span
                key={tecI}
                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
