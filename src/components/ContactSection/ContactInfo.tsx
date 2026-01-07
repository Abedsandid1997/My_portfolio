import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { fadeIn } from "../../utils/motionPresets";

const contactInfo = {
  label: "Email",
  value: "Abedsandeed2@gmail.com",
  href: "mailto:Abedsandeed2@gmail.com",
};
const ContactInfo = () => {
  return (
    <motion.div {...fadeIn({ delay: 0.2 })} className="space-y-6">
      <div
        className="glass rounded-3xl p-8 border border-primary/30 hover:border-primary/90 transition-all
            duration-500"
      >
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <a
            href={contactInfo.href}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">
                {contactInfo.label}
              </div>
              <div className="font-medium">{contactInfo.value}</div>
            </div>
          </a>
        </div>
      </div>

      {/* Availability Card */}
      <div
        className="glass rounded-3xl p-8 border border-primary/30 hover:border-primary/90 transition-all
            duration-500"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium">Currently Available</span>
        </div>
        <p className="text-muted-foreground text-sm">
          I'm currently open to new opportunities and exciting projects. Whether
          you need a full-time engineer or a freelance consultant, let's talk!
        </p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
