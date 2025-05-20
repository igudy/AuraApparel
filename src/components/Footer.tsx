import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-black text-white px-4 md:px-6 py-10 md:py-20 text-sm"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        {/* Left Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 flex w-full md:w-[50%] flex-col justify-between"
        >
          <motion.h2
            whileHover={{ x: 5 }}
            className="text-xl md:text-3xl font-light tracking-wide font-khand"
          >
            TRUMUNG —<br />
            <span className="block font-normal text-sm md:text-base mt-2">
              SHOP RARE LIMITED EDITION PIECES IN OUR LA & NYC LOCATIONS
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xs md:text-sm"
          >
            Please enter your email to join the waitlist and receive product
            line release notifications. All emails are strictly used for
            internal communications.
          </motion.p>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="EMAIL"
              className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 focus:outline-none py-2 w-full md:w-auto text-xs md:text-sm"
            />
          </div>
          <motion.button
            variants={hoverVariants}
            whileHover="hover"
            whileTap="tap"
            className="border-b border-white text-white py-2 w-fit hover:opacity-75 transition text-xs md:text-sm"
          >
            GET EXCLUSIVE DEALS
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between mt-6 md:mt-0"
        >
          <div />
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400 text-xs">
            <motion.a
              whileHover={{ x: 3, color: "#ffffff" }}
              href="#"
              className="hover:text-white transition"
            >
              SHOP LOCATIONS
            </motion.a>
            <motion.a
              whileHover={{ x: 3, color: "#ffffff" }}
              href="#"
              className="hover:text-white transition"
            >
              PRIVACY POLICY
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        variants={itemVariants}
        className="mt-10 text-gray-500 text-xs text-center md:text-left max-w-6xl mx-auto p-4"
      >
        <p>All rights reserved Trömung 2025</p>
        <motion.p whileHover={{ x: 3 }} className="mt-1 cursor-pointer">
          tromung@styledev.com
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
