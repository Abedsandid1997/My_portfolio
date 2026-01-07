import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionPresets";

const About = () => {
  return (
    <section id="about" className="py-30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div {...fadeIn({ delay: 0.4 })}>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </motion.div>
            <motion.h2
              {...fadeIn({ delay: 0.3 })}
              className="text-4xl md:text-5xl font-bold leading-tight text-primary"
            >
              Modern Full Stack Development,
              <span className="font-serif italic font-normal text-secondary-foreground">
                {" "}
                powered by Artificial Intelligence
              </span>
            </motion.h2>
            <motion.div
              {...fadeIn({ delay: 0.2 })}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I am a passionate Full Stack Developer with a love for solving
                complex problems. With my graduation approaching in{" "}
                <strong className="text-primary">June 2026</strong>, my journey
                is driven by curiosity and a desire to build applications that
                not only function flawlessly but also leave a lasting
                impression.
              </p>

              <p>
                With deep expertise in React, Next.js, and Node.js, I build
                scalable systems from the ground up. Currently, I am
                particularly focused on integrating AI into web applications to
                create smarter, dynamic user experiences that push the
                boundaries of what the web can do.
              </p>

              <p>
                To me, development is about more than just code—it's about
                creating value. I always strive to write clean, maintainable
                code and thrive in environments where innovation and
                collaboration are at the center of delivering world-class
                products.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn({ delay: 0.1 })}
              className="glass rounded-2xl p-6 glow-border"
            >
              <p className="text-lg font-medium italic text-foreground">
                My mission is to engineer digital experiences where performance
                meets intelligence. I strive to build scalable, AI-driven
                solutions that not only solve today's problems but anticipate
                the needs of tomorrow.
              </p>
            </motion.div>
          </div>

          {/* Right coulmn- Highlights */}
          <motion.div
            {...fadeIn({ delay: 0.2 })}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl border border-primary/30  hover:border-primary/90 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

const highlights: { icon: IconType; title: string; description: string }[] = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Prioritizing modular architecture and clean patterns for long-term sustainability.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Focusing on Core Web Vitals, SEO, and efficient database management.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Experienced in Git flow, code reviews, and collaborative problem-solving.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging cutting-edge technologies like Next.js and AI to build unique products",
  },
];
