import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import banner1 from "../assets/banner1.jpg"; // Import the banner image
import banner2 from "../assets/banner2.jpg"; // Import the banner image


// Banner data with image as background
const banners = [
  { id: 1, bgImage: banner1, text: "Innovating your digital world" }, // Software company-related text
  { id: 2, bgImage: banner2, text: "Check out our new products!", bgColor: "#10B981" }, // Green background
  
];

// Styled Components for the banner container
const BannerContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  min-width:100vw;
  max-width: 100vw;
`;

// Styled Components for each banner text
const BannerText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  transition: opacity 0.5s ease;
  z-index: 1; /* Ensure text stays on top of overlay */
  padding: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Shadow for better text readability */
`;

// Styled Component for the Banner background
const BannerBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || "transparent"};
  background-image: ${(props) => props.bgImage && `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  z-index: 0; /* Ensure background stays behind text */

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.2); /* White with transparency */
    z-index: 0; /* Ensure overlay stays behind text */
  }
`;

export default function MainPage() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change the banner every 5 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <BannerContainer>
      <AnimatePresence exitBeforeEnter>
        {/* Background */}
        <BannerBackground
          key={banners[currentBannerIndex].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          bgImage={banners[currentBannerIndex].bgImage}
          bgColor={banners[currentBannerIndex].bgColor}
        >
          {/* Text */}
          <BannerText>
            {banners[currentBannerIndex].text}
          </BannerText>
        </BannerBackground>
      </AnimatePresence>
    </BannerContainer>
  );
}