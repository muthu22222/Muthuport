import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
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
              href="mailto:muthukumaran@example.com"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">muthukumaran@example.com</div>
              </div>
            </a>
            <a
              href="https://wa.me/911234567890"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-medium">Quick reply within hours</div>
              </div>
            </a>
            <div className="glass rounded-2xl p-5">
              <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Instagram, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="glass flex h-11 w-11 items-center justify-center rounded-xl transition-all hover:scale-110 hover:bg-primary/20"
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
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass space-y-4 rounded-3xl p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input
                  required
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Subject</label>
              <input
                className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Project, internship, or collab"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow-purple"
            >
              {sent ? "Message sent ✓" : (
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