import { motion } from "framer-motion";
import styled from "styled-components";

// Create a styled div using styled-components
const StyledOrangePage = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fb923c; /* Equivalent to bg-orange-500 */
`;

const OrangePage = () => {
  return (
    <StyledOrangePage
      initial={{ y: "-100%" }} // Initially off-screen
      animate={{ y: 0 }} // Animate to the original position
      exit={{ opacity: 0 }} // Fade out when exiting
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition with increased duration
    />
  );
};

export default OrangePage;
