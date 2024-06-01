import styled, { keyframes } from "styled-components";

// Keyframes for the rotation animation
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Container for the entire circle
const RotatingTextCircleContainer = styled.div`
  position: absolute;
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
  animation: ${rotate} ${(props) => props.speed} linear infinite;
  animation-direction: ${(props) => props.direction};
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
  left: ${
    47.5 + (16 - props.fontSize) * 0.4375 - (props.radius - 200) * 0.03
  }%;`}
  transform: translate(-50%, -50%);
`;

const GetRads = (deg: number) => (deg * Math.PI) / 180.0;
// Each word positioned around the circle
const Word = styled.div<{
  angle: number;
  radius: number;
  index: number;
  fontSize: number;
  color?: string;
}>`
  position: absolute;
  transform: ${(props) =>
    `rotate(${props.angle}deg) translate(${
      props.radius - Math.cos(GetRads(props.angle)) * props.radius * 0
    }px, ${
      Math.sin(GetRads(props.angle)) * props.radius * 0
    }px) rotate(${90}deg);
    font-size: ${props.fontSize}px;
    color: ${props.color || "black"};
    `};
  transform-origin: center;
  white-space: nowrap;
`;

interface RotatingTextCircleProps {
  word: string | React.ReactNode;
  textLen: number;
  radius: number;
  speed: string;
  direction: "normal" | "reverse";
  color?: string;
}

const RotatingTextCircle: React.FC<RotatingTextCircleProps> = ({
  word,
  textLen,
  radius,
  speed,
  direction,
  color,
}) => {
  const circumference = 2 * Math.PI * radius;
  const fontSize = 32;
  const wordLength = textLen * (fontSize / 2); // Approximate length of the word in pixels (assuming 10px per character)

  const wordCount = Math.floor(circumference / wordLength) * 1;
  const degreeStep = 360 / wordCount;
  const words = new Array(wordCount).fill(word);

  return (
    <RotatingTextCircleContainer>
      <Circle speed={speed} direction={direction}>
        <TextWrapper radius={radius} fontSize={fontSize}>
          {words.map((word, index) => {
            return (
              <Word
                key={index}
                angle={index * degreeStep}
                radius={radius}
                index={index}
                color={color}
                fontSize={fontSize}
              >
                {word}
              </Word>
            );
          })}
        </TextWrapper>
      </Circle>
    </RotatingTextCircleContainer>
  );
};

export { RotatingTextCircle, RotatingTextCircleContainer };
