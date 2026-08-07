import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "917402200654"; // India country code 91 + number 7402200654
  const waLink = `https://wa.me/${phoneNumber}?text=Hi%20Muthukumaran,%20I'd%20love%20to%20chat%20about%20a%20project!`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass mb-4 flex w-64 flex-col gap-3 rounded-2xl p-4 shadow-[0_10px_30px_-5px_rgba(34,197,94,0.15)] border-green-500/20 text-left pointer-events-auto"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold text-lg">
                  M
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-background animate-pulse" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-foreground">Muthukumaran</div>
                <div className="text-[11px] font-semibold text-green-400 flex items-center gap-1">
                  Online
                </div>
              </div>
            </div>
            <div className="text-xs font-semibold text-muted-foreground/90 leading-relaxed bg-white/5 rounded-xl p-3 border border-white/5">
              Hey there! 👋 Need a beautiful modern website or UI design? Drop me a message!
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-2.5 text-xs font-bold text-white transition-transform hover:scale-[1.02] shadow-[0_4px_12px_rgba(34,197,94,0.3)]">
              <MessageCircle className="h-4 w-4 fill-current" />
              Start Chat
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Pulsing trigger bubble */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_24px_rgba(34,197,94,0.45)] outline-none hover:bg-green-400"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Soft ripple rings */}
        <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" style={{ animationDuration: "2s" }} />
        
        {/* Official WhatsApp SVG Path */}
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378 0 12.003 0a11.948 11.948 0 018.495 3.519 11.938 11.938 0 013.51 8.493c-.005 6.63-5.379 12.001-12.005 12.001-2.001 0-3.97-.497-5.713-1.446L0 24zm6.59-4.846c1.6.95 2.733 1.483 4.854 1.485 5.617 0 10.185-4.571 10.188-10.19a9.124 9.124 0 00-2.69-6.491 9.117 9.117 0 00-6.49-2.69c-5.623 0-10.193 4.573-10.197 10.193-.001 2.016.511 3.23 1.483 4.861L1.95 22.102l4.697-1.229zM15.427 13.585c-.328-.164-1.94-.959-2.24-1.07-.3-.109-.52-.164-.738.164-.219.329-.85 1.07-1.041 1.289-.193.22-.385.246-.713.082a9.012 9.012 0 01-2.645-1.633c-.767-.684-1.285-1.53-1.436-1.79-.15-.262-.016-.403.116-.533.118-.118.262-.301.393-.453.13-.15.174-.246.262-.411.087-.164.043-.301-.021-.411-.065-.11-.52-1.26-.713-1.72-.187-.45-.378-.39-.52-.397-.132-.007-.284-.007-.436-.007s-.397.055-.604.274c-.208.22-.793.774-.793 1.89s.81 2.19.923 2.344c.114.155 1.595 2.435 3.864 3.414.54.233.96.372 1.288.476.543.172 1.037.148 1.427.09.435-.065 1.94-.794 2.213-1.562.274-.768.274-1.426.192-1.563-.08-.137-.3-.219-.628-.383z" />
        </svg>
      </motion.a>
    </div>
  );
}
