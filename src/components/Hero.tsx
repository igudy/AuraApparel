import { motion } from "framer-motion";
import Hero1 from "../images/hero1.png";
import Hero2 from "../images/hero2.png";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top hero section */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 relative h-[60vh] md:h-auto"
        >
          <img
            src={Hero1}
            alt="New York"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-sm tracking-widest">EAST VILLAGE</p>
            <h1 className="text-4xl md:text-5xl font-serif">New York</h1>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="w-full md:w-1/2 relative h-[60vh] md:h-auto"
        >
          <img
            src={Hero2}
            alt="Los Angeles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-sm tracking-widest">KOREATOWN</p>
            <h1 className="text-4xl md:text-5xl font-serif">Los Angeles</h1>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-black text-white px-6 py-4 text-[10px] sm:text-xs tracking-widest">
        <span>XVI</span>
        <span>LIMITED COLLECTION</span>
      </div>

      {/* Border lines */}
      <div className="border-b border-gray-700 my-1" />
      <div className="border-b border-gray-700" />
    </div>
  );
};

export default Hero;
