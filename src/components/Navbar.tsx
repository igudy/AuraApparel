import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["SHOP", "LOOKBOOK", "ABOUT"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("SHOP");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="mx-4 md:mx-10 py-3 relative z-50">
        <div className="flex items-center justify-between">
          {/* Left Links */}
          <div className="hidden md:flex gap-6 text-[12px]">
            {navLinks.map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer flex items-center gap-1 ${
                  activeLink === link
                    ? "text-white font-semibold"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
                {link === "SHOP" && <IoIosArrowDown />}
              </motion.div>
            ))}
          </div>

          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-khand text-xl cursor-pointer"
          >
            Trümfang
          </motion.div>

          {/* Right Icons */}
          <div className="hidden md:flex gap-6 text-lg">
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaSearch className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaUser className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaShoppingBag className="cursor-pointer" />
            </motion.div>
          </div>

          {/* Hamburger */}
          <div className="md:hidden text-lg">
            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Now slides from right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-y-0 right-0 w-3/4 bg-black text-white p-6 pt-16 z-40 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                    className={`text-xl cursor-pointer py-2 ${
                      activeLink === link
                        ? "text-white font-semibold"
                        : "text-gray-400"
                    }`}
                    onClick={() => {
                      setActiveLink(link);
                      setIsOpen(false);
                    }}
                  >
                    {link}
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-6 pt-8 mt-auto text-xl justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaSearch className="cursor-pointer" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaUser className="cursor-pointer" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaShoppingBag className="cursor-pointer" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Borders */}
      <div className="border-b border-gray-700 my-1" />
      <div className="border-b border-gray-700" />
    </>
  );
};

export default Navbar;
