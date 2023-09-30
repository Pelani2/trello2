import React from "react";
import styled from "styled-components";

type ColoredRectangleProps = {
    variant: "yellow" | "green" | "blue";
};

const StyledRectangle = styled.div<ColoredRectangleProps>`
    width: 60px;
    height: 8px;
    border-radius: 8px;
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