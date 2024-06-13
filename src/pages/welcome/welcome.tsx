import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  RotatingTextCircle,
  RotatingTextCircleContainer,
} from "../../shared/components/rotating-circle/rotating-circle";
import { StyledLink } from "../../shared/components/styled-link/styled-link";

const riseUp = keyframes`
  from {
    position: absolute;
    top: -200%;
    left: -50%;
    opacity: 0;
  }
  to {
    position: relative;
    top: -50%;
    left: -50%;
    opacity: 1;
  }
`;

const PageWrapper = styled(motion.div)`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 40%;
  transform: translate(-50%, -50%);
`;

const RisingCircle = styled.div<{ delay: number; speed: number }>`
  animation: ${riseUp} ${(props) => props.speed}s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  z-index: 3;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 65vh;
  font-size: 13vw;
  text-align: center;
  font-family: "Wix Madefor Display", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: #ffffff;
  z-index: -1;
`;

const circles: any[] = [
  {
    word: "Projects",
    color: "black",
    hoverColor: "#7a018f",
    radius: 500,
    speed: "240s",
    direction: "reverse",
    riseSpeed: 2.5,
    riseDelay: 0,
    link: "/projects",
  },
  {
    word: "Journey",
    color: "black",
    hoverColor: "#018f60",
    radius: 400,
    speed: "210s",
    direction: "normal",
    riseSpeed: 1.75,
    riseDelay: 0,
    link: "/projects",
  },
  {
    word: "Skills",
    color: "black",
    hoverColor: "#e8ab02",
    radius: 300,
    speed: "400s",
    direction: "reverse",
    riseSpeed: 1.25,
    riseDelay: 0,
    link: "/projects",
  },
  {
    word: "Home",
    wordLen: 7,
    color: "black",
    hoverColor: "#e80271",
    radius: 200,
    speed: "300s",
    direction: "normal",
    riseSpeed: 0.75,
    riseDelay: 0,
    link: "/projects",
  },
];

const RotatingTextCircles: React.FC = () => {
  return (
    <RotatingTextCircleContainer>
      {circles.map((circle, index) => (
        <RisingCircle delay={circle.riseDelay} speed={circle.riseSpeed}>
          <RotatingTextCircle
            word={
              <StyledLink
                to={"/home"}
                color={circle.color}
                hoverColor={circle.hoverColor}
              >
                {circle.word}
              </StyledLink>
            }
            textLen={circle.wordLen || circle.word.length + 1}
            radius={circle.radius}
            speed={circle.speed}
            direction={circle.direction}
          />
        </RisingCircle>
      ))}

      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "white",
          zIndex: 10,
          boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)",
        }}
      />
    </RotatingTextCircleContainer>
  );
};

const WelcomePage: React.FC = () => (
  <PageWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, zIndex: 10 }}
    transition={{ duration: 0.3 }}
  >
    <TitleWrapper>Wojciech Bulek</TitleWrapper>
    <CircleWrapper>
      <RotatingTextCircles />
    </CircleWrapper>
  </PageWrapper>
);

export default WelcomePage;
