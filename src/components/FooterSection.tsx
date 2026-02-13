import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-20 px-6 bg-gradient-warm text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-display text-4xl md:text-6xl font-bold text-gradient-romantic mb-4">
          I Love You Sabiii ♥
        </p>
        <p className="text-muted-foreground font-body text-lg">
          Today, tomorrow, and always ♥
        </p>
        <div className="mt-8 flex justify-center gap-2 text-primary/30 text-2xl">
          <span className="animate-pulse-soft">♥</span>
          <span className="animate-pulse-soft" style={{ animationDelay: "0.5s" }}>♥</span>
          <span className="animate-pulse-soft" style={{ animationDelay: "1s" }}>♥</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
