import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeIn } from "../../utils/motionPresets";

const ScrollArrow = () => {
  return (
    <motion.div
      {...fadeIn({ delay: 0.5 })}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <a
        href="#about"
        className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-primary"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </motion.div>
  );
};

export default ScrollArrow;
