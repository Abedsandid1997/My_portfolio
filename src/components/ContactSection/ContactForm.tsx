import { useForm } from "react-hook-form";
import Button from "../Button";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  onClick: (data: FormData) => void;
  error: string | null;
};

const ContactForm = ({ onClick, error }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitted },
  } = useForm<FormData>();

  const sendEmail = handleSubmit(async (data) => {
    await onClick(data);
    reset({ name: "", email: "", message: "" });
  });
  return (
    <form className="space-y-6" onSubmit={sendEmail}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Your name..."
          {...register("name")}
          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          {...register("email")}
          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          rows={5}
          required
          {...register("message")}
          placeholder="Your message..."
          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
        />
      </div>

      <Button
        className="w-full"
        type="submit"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Sending...</>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </Button>
      {isSubmitted && (
        <div
          className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       error
                         ? "bg-red-500/10 border border-red-500/20 text-red-400"
                         : "bg-green-500/10 border border-green-500/20 text-green-400"
                     }`}
        >
          {error ? (
            <AlertCircle className="w-5 h-5 shrink-0" />
          ) : (
            <CheckCircle className="w-5 h-5 shrink-0" />
          )}

          <p className="text-sm">
            {error
              ? error
              : "Message sent successfully! I'll get back to you soon."}
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
