import styled from "styled-components";
import { motion } from "framer-motion";
import RotatingTextCircles from "../../shared/components/rotating-circles/rotating-circles";

const PageWrapper = styled(motion.div)`
  position: relative;
  z-index: 100;
`;

const WelcomePage: React.FC = () => (
  <PageWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, zIndex: 10 }}
    transition={{ duration: 0.3 }}
  >
    <RotatingTextCircles />
  </PageWrapper>
);

export default WelcomePage;
