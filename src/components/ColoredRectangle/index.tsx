import React from "react";
import styled from "styled-components";

type ColoredRectangleProps = {
    variant: "yellow" | "green" | "blue";
};

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
      default:
        return "white";
    }
  }};
`;

export const ColoredRectangle = (props: ColoredRectangleProps) => {
    return (
        <StyledRectangle variant={props.variant} />
    );
};