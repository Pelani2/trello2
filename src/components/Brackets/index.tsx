import React from "react";
import Typography from "../Typography";
import HeartIcon from "../HeartIcon";
import { StyledVerticalBreak } from "../Navbar/navbarStyles";
import { StyledBracketsContainer, StyledBracketsIcons, StyledPublicWrapper, StyledBracketsAndIconsWrapper, StyledIconsAndMenuWrapper } from "./BracketsStyles";
import Icon from "../Icon";
import GlobeIcon from "../../assets/images/icons/SomeShapeIcon.png";
import HardIcon from "../../assets/images/icons/HardShapeIcon.png";
import UsersIcons from "../../assets/images/icons/Users.png";

const Brackets: React.FC = () => {
    return (
        <StyledBracketsContainer>
            <StyledBracketsAndIconsWrapper>
                <Typography variant="navbar-text">
                    Brackets
                </Typography>

                <StyledBracketsIcons>
                    <HeartIcon />
                    <StyledVerticalBreak />

                    <StyledPublicWrapper>
                        <Icon 
                            variant="brackets-icon"
                            alt="globe icon"
                            src={GlobeIcon}
                        />
                        <Typography variant="navbar-text">
                            Public
                        </Typography>
                    </StyledPublicWrapper>
                    
                    <StyledVerticalBreak />
                    <Icon 
                        variant="brackets-icon"
                        alt="hard icon"
                        src={HardIcon}
                    />
                </StyledBracketsIcons>
            </StyledBracketsAndIconsWrapper>
            
            <StyledIconsAndMenuWrapper>
                <Icon 
                    variant="brackets-icon"
                    alt="users icons"
                    src={UsersIcons}
                />
                <Typography variant="navbar-text">
                    Menu
                </Typography>
            </StyledIconsAndMenuWrapper>
        </StyledBracketsContainer>
    );
};

export default Brackets;