import { motion } from "framer-motion";

const WhitePage = () => {
  return (
    <motion.div
      initial={{ y: "-100%" }} // Initially off-screen
      animate={{ y: 0 }} // Animate to the original position
      exit={{ y: "-100%" }} // Exit animation to go off-screen again
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      className="absolute inset-0 bg-white" // White background with full-screen positioning
    />
  );
};

export default WhitePage;
