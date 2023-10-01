import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

interface IconProps {
    small?: boolean;
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

export const StyledHeart = styled(AiFillHeart)<{color: string}>`
    color: ${props => props.color};
    cursor: pointer;
    width: 25px;
    height: 25px;
`;

export const StyledMeatballsIcon = styled.img`
    width: 24px;
    height: 6px;
`;