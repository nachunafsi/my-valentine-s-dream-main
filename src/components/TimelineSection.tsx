import { motion } from "framer-motion";

const milestones = [
  {
    icon: "✨",
    title: "Where We First Met",
    date: "♡ College ♡",
    description: "The moment I saw you,I never thought you’d be part of my lyf, but once you entered my life, I knew it was a forever kind of love.”.",
  },
  {
    icon: "💬",
    title: "When We First Texted",
    date: "♡ 1 December 2022 ♡",
    description: "The message that started it all — a simple hello that changed everything.",
  },
  {
      icon: "💍",
    title: "When I Proposed",
    date: "♡ 29 January 2023 ♡",
    description: "The most nerve-wracking and magical moment — when you said yes and made me the happiest person alive.",
  },
  {
    icon: "📍",
    title: "Where We First Spent Time Together",
    date: "♡ Ernakulam ♡",
    description: "The city where our journey began, butterflies and nervous smiles held the together."},
  { icon: "🍴",
   title: "Our Food Moments",
   date: "♡ Lulu Mall ♡",
   description: "Sharing food,and with only one spoon between us, every bite became a symbol of our love and closeness."},

  { icon: "🎢", 
    title: "Our Adventure",
    date: "♡ Wonderla ♡", 
    description: "Butterflies, thrilling rides, and endless smiles — the day we discovered joy in each other’s company." }, 
  { icon: "🚆", 
    title: "Our Journey", 
    date: "♡ Train Travel ♡", 
    description: "Side by side on the train from EKM to TVM, I rested on your shoulder.. a simple moment that made me realize how safe and loved I feel with you." }
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-soft">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-4"
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body text-lg mb-16"
        >
          The moments that wrote our love story ♥
        </motion.p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/15 transform md:-translate-x-1/2" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start mb-16 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              } flex-row`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <span className="text-3xl mb-2 block">{milestone.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-primary font-body text-sm font-medium mb-2">
                    {milestone.date}
                  </p>
                  <p className="text-muted-foreground font-body">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Dot on timeline */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-romantic z-10 mt-8" />

              {/* Spacer for other side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
