import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

interface IconProps {
    small?: boolean;
    colorScheme?: "whiteRed" | "blackRed";
    isClicked?: boolean;
}

export const StyledBracketIcon = styled.img`
    width: 25px;
    height: 25px;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledGlobeIconClicked = styled.img`
    width: 25px;
    height: 25px;
    filter: invert(84%) sepia(30%) saturate(752%) hue-rotate(80deg) brightness(101%) contrast(91%);

    &:hover {
        cursor: pointer;
    }
`;

export const StyledHardDriveIconClicked = styled.img`
    width: 25px;
    height: 25px;
    filter: invert(75%) sepia(100%) saturate(3463%) hue-rotate(9deg) brightness(90%) contrast(110%);

    &:hover {
        cursor: pointer;
    }
`;

export const StyledUserIcon = styled.img<IconProps>`
    width: ${(props) => (props.small ? '30px' : '50px')};
    height: ${(props) => (props.small ? '30px' : '50px')};
`;

export const StyledHeart = styled(AiFillHeart)<IconProps>`
    color: ${props => {
        if (props.colorScheme === "whiteRed") {
            return props.isClicked ? "red" : "white";
        } else if (props.colorScheme === "blackRed") {
            return props.isClicked ? "red" : "black";
        } else {
            return "black";
        }
    }};
    cursor: pointer;
    width: 25px;
    height: 25px;
`;

export const StyledMeatballsIcon = styled.img`
    width: 24px;
    height: 6px;
`;

export const StyledMessageBoxIcon = styled(AiFillMessage)<IconProps>`
    width: ${(props) => (props.small ? '20px' : '50px')};
    height: ${(props) => (props.small ? '20px' : '50px')};
    color: white;
`;