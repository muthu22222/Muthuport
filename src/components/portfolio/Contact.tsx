import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Section";
import emailjs from "@emailjs/browser";

// REPLACE THIS with your actual EmailJS Public Key (User ID) from your EmailJS Account Dashboard
const EMAILJS_PUBLIC_KEY = "ZY0Kfe2e3K9l9Zbv6";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // Send form data via EmailJS using your credentials
      await emailjs.send(
        "service_1oy0ibw", // Your Service ID
        "template_53orn09", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Muthukumaran",
        },
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("EmailJS Submission Error:", error);
      alert("Failed to send message. Please ensure you replaced EMAILJS_PUBLIC_KEY with your actual Public Key in Contact.tsx!");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-hero-gradient opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Let's build <span className="text-gradient-primary">something premium</span></>}
          description="Have a project, internship, or freelance gig in mind? My inbox is open."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href="mailto:sureshmuthu1212@gmail.com"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">sureshmuthu1212@gmail.com</div>
              </div>
            </a>
            <a
              href="https://wa.me/917402200654"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-medium">7402200654</div>
              </div>
            </a>
            <div className="glass rounded-2xl p-5">
              <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: "https://github.com/muthu22222/Muthuport" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/muthu-mk/" },
                  { Icon: Instagram, href: "https://www.instagram.com/frozynnnn/" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white transition-all hover:scale-110"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-3xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary text-foreground"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Subject</label>
              <input
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary text-foreground"
                placeholder="Project, internship, or collab"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary text-foreground"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow-purple disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {sending ? "Sending message..." : sent ? "Message sent ✓" : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}