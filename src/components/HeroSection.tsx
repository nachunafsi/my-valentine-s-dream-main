import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-blush to-gold-soft animate-gradient" />

      {/* Decorative blurred orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]"
        animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-rose-glow/10 blur-[80px]"
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "40%", right: "30%" }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-6xl md:text-8xl">♥</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-romantic mb-6 leading-tight"
        >
          Happy Valentine's Day
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-xl md:text-2xl text-muted-foreground italic"
        >
          To the love of my life
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10"
        >
          <div className="w-16 h-[2px] bg-primary/40 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
