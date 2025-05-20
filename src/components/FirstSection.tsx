import { motion } from "framer-motion";
import { CgArrowBottomLeft } from "react-icons/cg";
import SecondImage from "../images/firstSection1.png";
import FirstImage from "../images/firstSection2.png";
import Image1 from "../images/image.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";
import Image5 from "../images/image5.png";
import Image6 from "../images/image6.png";
import Image8 from "../images/image8.png";

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// const fadeInVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8 } },
// };

const FirstSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-black text-white font-sans"
    >
      {/* Product section */}
      <div className="flex flex-col lg:flex-row justify-between">
        <motion.div
          variants={itemVariants}
          className="md:px-6 px-3 text-[12px] md:items-end flex"
        >
          A placeholder text is a block of nonsensical or meaningless text that
          is temporarily used to fill a space where actual content will
          eventually appear.
        </motion.div>

        <div className="relative py-8 lg:py-16 px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Product Card 1 */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 mt-0 lg:mt-20 max-w-xs text-gray-400"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={FirstImage}
              alt="piece"
              className="object-cover w-full h-[250px] lg:h-[300px]"
            />
            <p className="text-[11px] mt-2 pl-0 lg:pl-[80px] text-left text-thin">
              A placeholder text block of nonessential or Latin used to focus
              attention. Add more text here, so we can see the effect of the
              text and so on. Please endeavour to change this text later.
            </p>
            <div className="border-b pb-2">
              <div className="flex justify-between items-center mt-1 text-xs pt-2">
                <span>PIECE TITLE</span>
                <motion.span
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  ADD TO CART <CgArrowBottomLeft />
                </motion.span>
              </div>
              <button className="text-xs">$875</button>
            </div>
          </motion.div>

          {/* Product Card 2 */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 max-w-xs text-gray-400"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={SecondImage}
              alt="piece"
              className="object-cover w-full h-[250px] lg:h-[300px]"
            />
            <p className="text-[11px] mt-2 pl-0 lg:pl-[80px] text-gray-400 text-left text-thin">
              A placeholder text block of nonessential or Latin used to focus
              attention. Add more text here, so we can see the effect of the
              text and so on. Please endeavour to change this text later.
            </p>
            <div className="border-b pb-2">
              <div className="flex justify-between items-center mt-1 text-xs pt-2">
                <span>PIECE TITLE</span>
                <motion.span
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  ADD TO CART <CgArrowBottomLeft />
                </motion.span>
              </div>
              <button className="text-xs">$875</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* New Releases Curated Section */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-10 relative mt-20"
      >
        <motion.div
          variants={itemVariants}
          className="text-center py-10 lg:py-20 px-4 absolute inset-0 top-[100px] lg:top-[200px] z-10"
        >
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            NEW RELEASES — CURATED BY
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-8xl font-serif italic mb-5"
          >
            Martin Schleifer
          </motion.h2>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="text-[10px] tracking-widest border-b border-white pb-1 hover:text-gray-400 transition-all duration-300"
          >
            SHOP COLLECTION
          </motion.a>
        </motion.div>
        <div className="w-full lg:w-[30%] flex justify-center lg:block">
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={Image1}
            alt="piece"
            className="object-cover w-[150px] lg:w-[200px] h-[200px] lg:h-[300px]"
          />
        </div>

        <div className="w-full lg:w-[70%] flex justify-center lg:justify-end gap-5 mt-5 lg:mt-0">
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={Image2}
            alt="piece"
            className="object-cover w-[150px] lg:w-[200px] h-[200px] lg:h-[300px]"
          />
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={Image3}
            alt="piece"
            className="object-cover w-[150px] lg:w-[200px] mt-[30px] lg:mt-[50px] h-[200px] lg:h-[300px]"
          />
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex flex-col lg:flex-row justify-between mt-10 mx-4 lg:mx-10"
      >
        <div className="flex gap-5 items-end justify-center lg:justify-start mb-5 lg:mb-0">
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={Image4}
            alt="piece"
            className="object-cover w-[100px] lg:w-[200px] h-[50px] lg:h-[100px]"
          />

          <motion.img
            whileHover={{ scale: 1.03 }}
            src={Image5}
            alt="piece"
            className="object-cover w-[100px] lg:w-[200px] h-[150px] lg:h-[300px]"
          />
        </div>

        <div className="w-full lg:w-[70%] flex justify-center lg:justify-end gap-5">
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={Image6}
            alt="piece"
            className="object-cover w-[150px] lg:w-[200px] h-[200px] lg:h-[300px]"
          />
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={Image8}
            alt="piece"
            className="object-cover w-[150px] lg:w-[200px] mt-[30px] lg:mt-[50px] h-[200px] lg:h-[300px]"
          />
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between bg-black text-white px-6 py-4 text-xs tracking-widest border-t border-gray-800"
      >
        <span>XVI</span>
        <span>NEWSLETTER</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="my-1"
      >
        <div className="border-b border-b-1 mb-1"></div>
        <div className="border-b border-b-1"></div>
      </motion.div>
    </motion.div>
  );
};

export default FirstSection;
