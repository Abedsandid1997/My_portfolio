import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionPresets";
import type { IconType } from "react-icons";
type SkillData = {
  name: string;
  icon: IconType;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: SkillData[];
};

type Props = {
  index: number;
  category: SkillCategory;
};

const Skill = ({ index, category }: Props) => {
  return (
    <motion.div
      {...fadeIn({ delay: index * 0.1 })}
      className="glass p-8 rounded-3xl border border-primary/20 glow-border hover:border-primary/50 transition-colors duration-500 group flex flex-col"
    >
      {/* Category Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4 mt-auto">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="flex flex-col items-center justify-center gap-2 group/icon"
          >
            <div className="p-3 rounded-xl bg-surface/50 border border-primary/10 group-hover/icon:border-primary/40 group-hover/icon:bg-primary/10 transition-all duration-300">
              <skill.icon className="w-6 h-6 text-muted-foreground group-hover/icon:text-primary transition-colors duration-300" />
            </div>
            <span className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground group-hover/icon:text-foreground transition-colors text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;
