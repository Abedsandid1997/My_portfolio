import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactInfo from "../components/ContactSection/ContactInfo";
import ContactForm from "../components/ContactSection/ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motionPresets";
import FloatingDots from "../components/heroSection/FloatingDots";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [error, setError] = useState("");

  const sendEmail = async (data: FormData) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }
      await emailjs.send(serviceId, templateId, data, publicKey);
    } catch (error) {
      console.error(error);
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-30 relative overflow-hidden">
      <FloatingDots />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <motion.h2
            {...fadeIn({ delay: 0 })}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Let's Work{" "}
            <span className="font-serif italic font-normal text-primary">
              Together.
            </span>
          </motion.h2>
          <motion.p
            {...fadeIn({ delay: 0.1 })}
            className="text-muted-foreground"
          >
            Open to Opportunities. I am ready to join a development team as a
            Junior Developer or Intern. Let's discuss how I can contribute.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            {...fadeIn({ delay: 0.2 })}
            className="glass p-8 rounded-3xl border border-primary/30"
          >
            <ContactForm onClick={sendEmail} error={error} />
          </motion.div>

          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
