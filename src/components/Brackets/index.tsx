import React from "react";
import Typography from "../Typography";
import { StyledVerticalBreak } from "../Navbar/navbarStyles";
import { StyledBracketsContainer, StyledBracketsIcons, StyledPublicWrapper, StyledBracketsAndIconsWrapper, StyledUserIconWrapper, StyledIconsAndMenuWrapper } from "./BracketsStyles";
import Icon from "../Icon";
import GlobeIcon from "../../assets/images/icons/SomeShapeIcon.png";
import HardDriveIcon from "../../assets/images/icons/HardDriveIcon.png";
import User1 from "../../assets/images/icons/users/user.png";
import User2 from "../../assets/images/icons/users/user1.png";
import User3 from "../../assets/images/icons/users/user2.png";
import User4 from "../../assets/images/icons/users/user3.png";
import User5 from "../../assets/images/icons/users/user4.png";
import Group44 from "../../assets/images/icons/users/group44.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FaHeart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

const Brackets: React.FC = () => { 
    const viewportWidth = useSelector((state: RootState) => state.viewport.width);
    return (
        <StyledBracketsContainer>
                {/* layout for 321px width  */}
                {viewportWidth <= 321 ? <div style={{ display: "flex", flexDirection: "column"}}>
                    <Typography variant="bracket-text" style={{color: "white", fontSize: "20px"}}>
                        Brackets
                    </Typography>
                    <div>
                    <StyledBracketsIcons>
                        <StyledPublicWrapper>
                            <FaHeart 
                                color="white" 
                                size={12}
                            />
                            <StyledVerticalBreak color="white"/>
                            <FaGlobe 
                                color="white" 
                                size={12}
                            />
                            <Typography 
                                variant="bracket-text" 
                                style={{fontSize: "15px", color: "white"}}
                            >
                                Public
                            </Typography>
                            <StyledVerticalBreak color="white"/>
                            <FaGoogleDrive 
                                color="white" 
                                size={12}
                            />
                        </StyledPublicWrapper>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "110px" }}>
                            <StyledUserIconWrapper smallMargin>
                                <Icon 
                                    variant="user-icon"
                                    src={User1}
                                    style={{ width: "20px", height: "20px"}}
                                />
                                <Icon 
                                    variant="user-icon"
                                    src={User2}
                                    style={{ width: "20px", height: "20px"}}
                                />
                                <Icon 
                                    variant="user-icon"
                                    src={User3}
                                    style={{ width: "20px", height: "20px"}}
                                />
                                <Icon 
                                    variant="user-icon"
                                    src={User4}
                                    style={{ width: "20px", height: "20px"}}
                                />
                                <Icon 
                                    variant="user-icon"
                                    src={User5}
                                    style={{ width: "20px", height: "20px"}}
                                />
                                <Icon 
                                    variant="user-icon"
                                    src={Group44}
                                    style={{ width: "20px", height: "20px"}}
                                />
                                
                            </StyledUserIconWrapper>
                                <Typography
                                    variant="bracket-text"
                                    style={{ fontSize: "12px", color: "white"}}
                                >
                                    Menu
                                </Typography>
                            </div>
                            
                    </StyledBracketsIcons>
                    </div>
                    {/* layout for > than 321px width */}
                </div> : <StyledBracketsAndIconsWrapper>
                            <div style={{ display: "flex", alignItems: "center", gap: "100px"}}>
                                <Typography variant="bracket-text">
                                    Brackets
                                </Typography>
                                <StyledBracketsIcons>
                                    <Icon 
                                        variant="heart-icon"
                                        colorScheme="blackRed"
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
                            </div>
                            
                            <StyledIconsAndMenuWrapper>
                                <StyledUserIconWrapper>
                                    <Icon 
                                        variant="user-icon"
                                        src={User1}
                                    />
                                    <Icon 
                                        variant="user-icon"
                                        src={User2}
                                    />
                                    <Icon 
                                        variant="user-icon"
                                        src={User3}
                                    />
                                    <Icon 
                                        variant="user-icon"
                                        src={User4}
                                    />
                                    <Icon 
                                        variant="user-icon"
                                        src={User5}
                                    />
                                    <Icon 
                                        variant="user-icon"
                                        src={Group44}
                                    />
                                
                                </StyledUserIconWrapper>
                                <Typography variant="bracket-text">
                                    Menu
                                </Typography>
                            </StyledIconsAndMenuWrapper>
                    </StyledBracketsAndIconsWrapper>}
        </StyledBracketsContainer>
    );
};

export default Brackets;