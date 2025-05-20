import { motion } from "framer-motion";
import about from "../images/about.png";
import about2 from "../images/about2.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

const About = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between px-4 lg:px-10 py-6 lg:py-3 text-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          className="w-full lg:w-1/2 flex flex-col gap-3 order-2 lg:order-1"
        >
          <motion.div
            variants={itemVariants}
            className="font-khand text-sm lg:text-base"
          >
            CRAFTED - IN
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-serif italic mb-3 lg:mb-5"
          >
            Paris, France
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="my-3 text-[11px] font-sfpro px-2 lg:px-0"
          >
            Temporarily used to fill a space where actual content will
            eventually appear. It serves as a visual placeholder to help
            designers and developers visualize....
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.img
              variants={imageVariants}
              whileHover="hover"
              src={about2}
              alt="about details"
              className="w-full lg:w-[70%] object-cover h-[100px] lg:h-[130px]"
            />
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            variants={itemVariants}
            className="font-hiragino underline cursor-pointer mt-2"
          >
            LEARN MORE
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 order-1 lg:order-2"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={about}
            alt="about main"
            className="w-full object-cover h-[350px] lg:h-[400px]"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between bg-black text-white px-6 py-4 text-xs tracking-widest border-t border-gray-800"
      >
        <span>XVIII</span>
        <span>UPCOMING</span>
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

export default About;
