import React from "react";
import styled from "styled-components";
import { Color } from "../../utils/types";

interface ColoredRectangleProps {
    variant: Color;
}

const StyledRectangle = styled.div<ColoredRectangleProps>`
    width: 60px;
    height: 8px;
    border-radius: 8px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
    background-color: ${(props) => {
      
      switch (props.variant) {
        case "yellow":
          return "#F8BD1C";
        case "green":
          return "limegreen";
        case "blue":
          return "dodgerblue";
        case "purple":
          return "#4339F2";
        case "red":
          return "#FF3838";
        case "lightPurple":
          return "#891BE8";
        case "lightGreen":
          return "#1AD698";
        default:
          return "white";
      }
  }};
`;

export const ColoredRectangle: React.FC<ColoredRectangleProps> = (props) => {
  return (
      <StyledRectangle variant={props.variant} />
  );
};