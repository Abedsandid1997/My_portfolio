import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { CgVercel } from "react-icons/cg";
import { FaCss3, FaDocker, FaGithub, FaHtml5 } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { fadeIn } from "../../utils/motionPresets";

const SkillsShow = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            {...fadeIn({ delay: index * 0.1 })}
            key={index}
            className="shrink-0 px-6 py-6"
          >
            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {<skill.icon size={30} />}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const skills: { icon: IconType }[] = [
  { icon: FaHtml5 },
  { icon: FaCss3 },
  { icon: SiTailwindcss },
  { icon: SiJavascript },
  { icon: SiTypescript },
  { icon: SiReact },
  { icon: SiNextdotjs },
  { icon: SiNodedotjs },
  { icon: SiExpress },
  { icon: SiPrisma },
  { icon: SiPostgresql },
  { icon: SiMongodb },
  { icon: SiPostman },
  { icon: SiOpenai },
  { icon: SiGit },
  { icon: FaGithub },
  { icon: FaDocker },
  { icon: CgVercel },
];
export default SkillsShow;
