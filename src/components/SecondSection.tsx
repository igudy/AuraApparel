import { motion } from "framer-motion";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import image12 from "../images/image12.png";
import image13 from "../images/image4.png";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const SecondSection = () => {
  const cards = [
    {
      num: "N°002",
      title: "NEW YORK",
      subtitle: "FASHION WEEK",
      text: "Temporarily used to fill a space where actual content will eventually appear. It serves as a visual placeholder to help designers and developers",
      img: image10,
    },
    {
      num: "N°003",
      title: "HEADLINE",
      subtitle: "HEADLINE",
      text: "Temporarily used to fill a space where actual content will eventually appear. It serves as a visual placeholder to help designers and developers",
      img: image13,
    },
    {
      num: "N°004",
      title: "HEADLINE",
      subtitle: "HEADLINE",
      text: "Temporarily used to fill a space where actual content will eventually appear. It serves as a visual placeholder to help designers and developers",
      img: image11,
    },
    {
      num: "N°005",
      title: "HEADLINE",
      subtitle: "HEADLINE",
      text: "Temporarily used to fill a space where actual content will eventually appear. It serves as a visual placeholder to help designers and developers",
      img: image12,
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <div className="flex flex-col lg:flex-row gap-5 px-4 lg:px-0">
        {/* Left Image */}
        <motion.div variants={itemVariants} className="w-full lg:w-[30%]">
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={image9}
            alt="image"
            className="w-full object-cover h-[300px] lg:h-full"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col w-full lg:w-[70%] text-sm"
        >
          <motion.div
            variants={itemVariants}
            className="mt-10 lg:mt-20 font-hiragino"
          >
            No 001
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-[11px] font-sfpro mt-4"
          >
            Temporarily used to fill a space where actual content will
            eventually appear. It serves as a visual placeholder to help
            designers and developers visualize the layout of a website,
            document, or other design project before the final content is added.
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            variants={itemVariants}
            className="font-hiragino underline my-3 cursor-pointer"
          >
            READ MORE
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
          >
            {cards?.map((item) => (
              <motion.div
                key={item.num}
                variants={cardVariants}
                whileHover="hover"
                className="text-[11px]"
              >
                <div className="flex flex-col gap-2 w-full h-full">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[150px] lg:h-[200px] object-cover"
                  />
                  <div className="font-medium">{item.num}</div>
                  <div className="font-medium">
                    {item.title} -- {item.subtitle}
                  </div>
                  <div className="text-gray-400">
                    {item.text.split(" ").slice(0, 15).join(" ")}
                    {item.text.split(" ").length > 15 && "..."}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between bg-black text-white px-6 py-4 text-xs tracking-widest border-t border-gray-800 mt-10"
      >
        <span>XVII</span>
        <span>ABOUT US</span>
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

export default SecondSection;
