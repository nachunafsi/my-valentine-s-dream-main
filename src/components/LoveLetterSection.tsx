import { motion } from "framer-motion";

const LoveLetterSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-2xl p-10 md:p-14 shadow-romantic relative"
        >
          {/* Decorative corner */}
          <div className="absolute top-4 left-4 text-primary/20 text-2xl">✦</div>
          <div className="absolute bottom-4 right-4 text-primary/20 text-2xl">✦</div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            My Dearest Love
          </h2>

          <div className="font-body text-muted-foreground text-lg leading-relaxed space-y-4 italic justify-content">
            <p>
              Happy Valentine’s Day to the man who holds my heart.  
              Life is not always perfect, but even in our disagreements, you show patience, strength, and love that remind me why I chose you.
              The way you handle our fights with understanding and care makes me fall for you even more because it proves that our love is stronger than any storm
            </p>
            <p>
              You are my partner, my safe place, and my forever Valentine. 
              Thank you for loving me not just in the easy moments, but in the hard ones too. 
              I’m so grateful for the life we share, and I’ll keep choosing you every single day.
            </p>
            <p>
              Here's to us — to our past, our present, and our beautiful future together.
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-right font-display text-xl text-primary"
          >
            Forever yours
            <p>Nachu♥</p>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
