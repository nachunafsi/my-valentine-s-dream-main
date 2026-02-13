import { motion } from "framer-motion";

const reasons = [
  { emoji: "😊", text: "Your smile makes everything better" },
  { emoji: "💪", text: "You're always there when I need you" },
  { emoji: "👀", text: "Your eyes are so attractive" },
  { emoji: "🌹", text: "Being with you makes my life beautiful" },
  { emoji: "🌟", text: "You inspire me to be a better person" },
  { emoji: "😊", text: "Your happy face I always need to see" },
  { emoji: "💖", text: "Your attitude and care mean everything" },
  { emoji: "❤️", text: "The way you love me melts my heart" },
  { emoji: "🫂", text: "Your hugs feel like the safest place on earth" },
];

const ReasonsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-4"
        >
          Reasons I Love You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body text-lg mb-16"
        >
          Just a few of the million reasons ♥
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card rounded-xl p-8 shadow-soft text-center cursor-default"
            >
              <span className="text-4xl mb-4 block">{reason.emoji}</span>
              <p className="font-body text-foreground text-lg">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
