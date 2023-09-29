import React from "react";
import Typography from "../Typography";
import HeartIcon from "../HeartIcon";
import { StyledVerticalBreak } from "../Navbar/navbarStyles";
import { StyledBracketsContainer, StyledBracketsIcons, StyledPublicWrapper, StyledBracketsAndIconsWrapper, StyledIconsAndMenuWrapper } from "./BracketsStyles";
import Icon from "../Icon";
import GlobeIcon from "../../assets/images/icons/SomeShapeIcon.png";
import HardDriveIcon from "../../assets/images/icons/HardDriveIcon.png";
import UsersIcons from "../../assets/images/icons/Users.png";

const Brackets: React.FC = () => {
    return (
        <StyledBracketsContainer>
            <StyledBracketsAndIconsWrapper>
                <Typography variant="bracket-text">
                    Brackets
                </Typography>

                <StyledBracketsIcons>
                    <HeartIcon />
                    <StyledVerticalBreak />

                    <StyledPublicWrapper>
                        <Icon 
                            variant="globe-icon"
                            alt="globe icon"
                            src={GlobeIcon}
                        />
                        <Typography variant="bracket-text">
                            Public
                        </Typography>
                    </StyledPublicWrapper>
                    
                    <StyledVerticalBreak />
                    <Icon 
                        variant="hard-drive-icon"
                        alt="hard icon"
                        src={HardDriveIcon}
                    />
                </StyledBracketsIcons>
            </StyledBracketsAndIconsWrapper>
            
            <StyledIconsAndMenuWrapper>
                <Icon 
                    variant="globe-icon"
                    alt="users icons"
                    src={UsersIcons}
                />
                <Typography variant="bracket-text">
                    Menu
                </Typography>
            </StyledIconsAndMenuWrapper>
        </StyledBracketsContainer>
    );
};

export default Brackets;