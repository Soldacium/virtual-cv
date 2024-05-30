import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SplashContainer = styled(motion.div)<{ color: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  z-index: 5;
`;

const splashVariants = {
  initial: { clipPath: "circle(0% at 50% 50%)" },
  animate: { clipPath: "circle(150% at 50% 50%)", transition: { duration: 1 } },
  exit: { clipPath: "circle(0% at 50% 50%)", transition: { duration: 1 } },
};

interface SplashProps {
  color: string;
}

const Splash: React.FC<SplashProps> = ({ color }) => (
  <SplashContainer
    color={color}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={splashVariants}
  />
);

export default Splash;
