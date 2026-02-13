import { motion } from "framer-motion";
import Img1 from "../assets/lulu.png";
import Img2 from "../assets/collge.png";
import Img3 from "../assets/Technopark.png";
import Img4 from "../assets/image.png";
import Img5 from "../assets/git.png";
import Img6 from "../assets/Techfest.png";
import Img8 from "../assets/buss.png";
import Img7 from "../assets/luluu.png";
import Img9 from "../assets/metro.png";


const photos = [
  { src: Img1, label: "Our first photo together" },
  { src: Img2, label: "College memory" },
  { src: Img3, label: "At technopark" },
  { src: Img4, label: "Our First Onam" },
  { src: Img5, label: "His gift" },
  { src: Img9, label: "Metro connects us" },
  { src: Img6, label: "Our happy place" },
  { src: Img7, label: "At lulu" },
  { src: Img8, label: "Our bus journey"}
];

const PhotoMemoriesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-4"
        >
          Our Memories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body text-lg mb-16"
        >
          Moments frozen in time ♥
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-body text-lg font-medium text-center px-4">{photo.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoMemoriesSection;
