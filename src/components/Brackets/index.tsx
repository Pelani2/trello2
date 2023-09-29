import React from "react";
import Typography from "../Typography";
import HeartIcon from "../HeartIcon";
import { StyledVerticalBreak } from "../Navbar/navbarStyles";
import { StyledBracketsContainer, StyledBracketsIcons } from "./BracketsStyles";
import Icon from "../Icon";
import GlobeIcon from "../../assets/images/icons/SomeShapeIcon.png";
import HardIcon from "../../assets/images/icons/HardShapeIcon.png";

const Brackets: React.FC = () => {
    return (
        <StyledBracketsContainer>
            <Typography variant="navbar-text">
                Brackets
            </Typography>

            <StyledBracketsIcons>
                <HeartIcon />
                <StyledVerticalBreak />
                <Icon 
                    variant="brackets-icon"
                    alt="globe icon"
                    src={GlobeIcon}
                />
                <Typography variant="navbar-text">
                    Public
                </Typography>
                <StyledVerticalBreak />
                <Icon 
                    variant="brackets-icon"
                    alt="hard icon"
                    src={HardIcon}
                />
            </StyledBracketsIcons>
        </StyledBracketsContainer>
    );
};

export default Brackets;