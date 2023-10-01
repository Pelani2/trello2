import React from "react";
import Typography from "../Typography";
import { StyledVerticalBreak } from "../Navbar/navbarStyles";
import { StyledBracketsContainer, StyledBracketsIcons, StyledPublicWrapper, StyledBracketsAndIconsWrapper, StyledIconsAndMenuWrapper, StyledUserIconWrapper } from "./BracketsStyles";
import Icon from "../Icon";
import GlobeIcon from "../../assets/images/icons/SomeShapeIcon.png";
import HardDriveIcon from "../../assets/images/icons/HardDriveIcon.png";
import User1 from "../../assets/images/icons/users/user.png";
import User2 from "../../assets/images/icons/users/user1.png";
import User3 from "../../assets/images/icons/users/user2.png";
import User4 from "../../assets/images/icons/users/user3.png";
import User5 from "../../assets/images/icons/users/user4.png";
import Group44 from "../../assets/images/icons/users/group44.png";


const Brackets: React.FC = () => {
    return (
        <StyledBracketsContainer>
            <StyledBracketsAndIconsWrapper>
                <Typography variant="bracket-text">
                    Brackets
                </Typography>

                <StyledBracketsIcons>
                    <Icon 
                        variant="heart-icon"
                        alt="heart icon"
                    />
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
                <StyledUserIconWrapper>
                    <Icon 
                        variant="user-icon"
                        alt="user icon"
                        src={User1}
                    />
                    <Icon 
                        variant="user-icon"
                        alt="user icon"
                        src={User2}
                    />
                    <Icon 
                        variant="user-icon"
                        alt="user icon"
                        src={User3}
                    />
                    <Icon 
                        variant="user-icon"
                        alt="user icon"
                        src={User4}
                    />
                    <Icon 
                        variant="user-icon"
                        alt="user icon"
                        src={User5}
                    />
                    <Icon 
                        variant="user-icon"
                        alt="user icon"
                        src={Group44}
                    />
                </StyledUserIconWrapper>
                
                <Typography variant="bracket-text">
                    Menu
                </Typography>
            </StyledIconsAndMenuWrapper>
        </StyledBracketsContainer>
    );
};

export default Brackets;