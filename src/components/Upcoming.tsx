import { motion } from "framer-motion";
import upcoming1 from "../images/upcoming1.png";
import upcoming8 from "../images/image10.png";
import upcoming2 from "../images/upcoming2.png";
import upcoming3 from "../images/upcoming3.png";
import upcoming4 from "../images/upcoming4.png";
import upcoming5 from "../images/upcoming5.png";
import upcoming6 from "../images/upcoming6.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

const Upcoming = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative"
    >
      {/* Hero Section */}
      <div className="bottom-0 flex justify-between mx-4 lg:mx-10 relative">
        <motion.div
          variants={itemVariants}
          className="text-center py-10 lg:py-20 px-4 absolute inset-0 top-[100px] lg:top-[200px] z-10"
        >
          <p className="text-xs tracking-widest text-gray-400 mb-3">SPECIALS</p>
          <p className="text-xs tracking-widest text-gray-400 my-3">
            NEW YORK - WEEK
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-8xl font-serif italic mb-5"
          >
            Ralph Lauren
          </motion.h2>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="text-[10px] underline tracking-widest border-b border-white pb-1 hover:text-gray-400 transition-all duration-300"
          >
            LEARN MORE
          </motion.a>
        </motion.div>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between mx-4 lg:mx-10 mt-5">
        {/* First Column */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-5 order-2 lg:order-1"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={upcoming8}
            alt="Upcoming 1"
            className="w-full lg:w-[150px] object-cover h-[150px] lg:h-[200px]"
          />
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={upcoming2}
            alt="Upcoming 2"
            className="w-full lg:w-[200px] lg:ml-20 lg:mt-10 h-auto object-cover"
          />
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={upcoming3}
            alt="Upcoming 3"
            className="w-full lg:w-[300px] lg:mt-10 h-auto object-cover"
          />
        </motion.div>

        {/* Second Column */}
        <motion.div
          variants={containerVariants}
          className="flex relative flex-col gap-5 z-[1] order-1 lg:order-2"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={upcoming4}
            alt="Upcoming 4"
            className="w-full lg:w-[170px] lg:mt-24 h-auto object-cover"
          />
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={upcoming5}
            alt="Upcoming 5"
            className="w-full lg:w-[120px] lg:ml-[100px] h-auto object-cover"
          />
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={upcoming6}
            alt="Upcoming 6"
            className="hidden lg:block w-[350px] absolute bottom-[50px] right-[130px]"
          />
        </motion.div>
      </div>

      {/* Bottom Image */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center mt-10 px-4 lg:px-0"
      >
        <motion.img
          whileHover={{ scale: 1.02 }}
          src={upcoming1}
          alt="Upcoming 7"
          className="w-full max-w-[300px] h-auto object-cover"
        />
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between bg-black text-white px-6 py-4 text-xs tracking-widest border-t border-gray-800 mt-10"
      >
        <span>XVIII</span>
        <span>FOOTER</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="my-1"
      >
        <div className="border-b border-b-1 mb-1"></div>
        <div className="border-b border-b-1"></div>
      </motion.div>
    </motion.div>
  );
};

export default Upcoming;
