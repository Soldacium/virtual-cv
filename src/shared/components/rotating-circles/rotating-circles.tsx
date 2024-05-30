import styled, { keyframes } from "styled-components";

// Keyframes for the rotation animation
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Container for the entire circle
const CircleContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Circle that rotates with the specified speed and direction
const Circle = styled.div<{ speed: string; direction: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/*
  animation: ${rotate} ${(props) => props.speed} linear infinite;
  animation-direction: ${(props) => props.direction};
  */
// Wrapper for the text elements
const TextWrapper = styled.div<{ radius: number; fontSize: number }>`
  position: absolute;
  ${(props) => `
  top: ${47.75 + (16 - props.fontSize) * 0.21875}%; 
  left: ${43 + (16 - props.fontSize) * 0.4375}%;`}
  transform: translate(-50%, -50%);
`;

const GetRads = (deg: number) => (deg * Math.PI) / 180.0;
// Each word positioned around the circle
const Word = styled.div<{
  angle: number;
  radius: number;
  index: number;
  fontSize: number;
}>`
  position: absolute;
  transform: ${(props) =>
    `rotate(${props.angle}deg) translate(${
      props.radius - Math.cos(GetRads(props.angle)) * props.radius * 0
    }px, ${
      Math.sin(GetRads(props.angle)) * props.radius * 0
    }px) rotate(${90}deg);
    font-size: ${props.fontSize}px;
    `};
  transform-origin: center;
  white-space: nowrap;
`;

interface RotatingTextCircleProps {
  word: string;
  radius: number;
  speed: string;
  direction: "normal" | "reverse";
}

const RotatingTextCircle: React.FC<RotatingTextCircleProps> = ({
  word,
  radius,
  speed,
  direction,
}) => {
  const circumference = 2 * Math.PI * radius;
  const fontSize = 32;
  const wordLength = word.length * (fontSize / 2); // Approximate length of the word in pixels (assuming 10px per character)

  const wordCount = Math.floor(circumference / wordLength) * 3;
  const degreeStep = 360 / wordCount;
  const words = new Array(wordCount).fill(word);

  return (
    <Circle speed={speed} direction={direction}>
      <TextWrapper radius={radius} fontSize={fontSize}>
        {words.map((word, index) => {
          return (
            <Word
              key={index}
              angle={index * degreeStep}
              radius={radius}
              index={index}
              fontSize={fontSize}
            >
              {word}
            </Word>
          );
        })}
      </TextWrapper>
    </Circle>
  );
};

const RotatingTextCircles: React.FC = () => {
  return (
    <CircleContainer>
      <RotatingTextCircle
        word="Contact"
        radius={300}
        speed="40s"
        direction="normal"
      />
      <RotatingTextCircle
        word="Contact"
        radius={200}
        speed="30s"
        direction="reverse"
      />
      <RotatingTextCircle
        word="Contact"
        radius={100}
        speed="20s"
        direction="normal"
      />

      <div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "white",
          zIndex: 10,
        }}
      />
    </CircleContainer>
  );
};

export default RotatingTextCircles;
