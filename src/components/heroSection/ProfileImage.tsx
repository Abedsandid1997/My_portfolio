import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionPresets";

const ProfileImage = () => {
  return (
    <motion.div {...fadeIn({ delay: 0.2 })} className="relative">
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/40 via-transparent to-primary/40 blur-2xl animate-pulse" />
        <div className="relative glass rounded-3xl p-2 glow-border">
          <img
            src="/abed.webp"
            alt="Abdelrman Sandid"
            className="w-full aspect-4/5 object-cover object-top rounded-2xl"
          />
          <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
