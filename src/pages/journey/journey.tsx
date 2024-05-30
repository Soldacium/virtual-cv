import styled from "styled-components";
import { motion } from "framer-motion";

const PageWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const JourneyPage: React.FC = () => (
  <PageWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    Home
  </PageWrapper>
);

export default JourneyPage;
