import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

interface StyledLinkProps extends LinkProps {
  color?: string;
  hoverColor?: string;
}

const StyledLink = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ color, hoverColor, ...props }: StyledLinkProps) => <Link {...props} />
)`
  color: ${(props) => props.color || "black"};
  text-decoration: none;
  opacity: 0.75;

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
    opacity: 1;
    transition: color 0.2s ease;
  }
`;

export { StyledLink };
