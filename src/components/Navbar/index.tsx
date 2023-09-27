import React, { useState } from "react";
import { StyledNavbarContainer, StyledVerticalBreak, StyledNavContentWrapper, StyledStatsAndTextWrapper } from "./navbarStyles";
import Logo from "../Logo";
import Typography from "../Typography";
import TrelloIcon from "../../assets/images/icons/TrelloLogo.png";
import StatsIcon from "../../assets/images/icons/TrelloStatIcon.png";
import SearchBar from "../SearchBar";
import NavbarIcon from "../NavbarIcon";
import ProfileIcon from "../ProfileIcon";
import FaceIcon from "../../assets/images/icons/ProfileIcon.png";

const Navbar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const  handleIconClick = (iconName) => {
        setOpenDropdown(openDropdown === iconName ? null : iconName);
    }
    
    const handleSearch = (searchTerm: string) => {
        console.log(`\n\nSearching for: ${searchTerm}`);
    };

    return (
        <StyledNavbarContainer>
            <StyledNavContentWrapper>
                <Logo
                    variant="navbar-logo"
                    src={TrelloIcon}
                    alt="trello logo"
                />

                <StyledVerticalBreak />

                <StyledStatsAndTextWrapper>
                    <Logo 
                        variant="navbar-stats-icon"
                        src={StatsIcon}
                        alt="stats icon"
                    />
                    <Typography variant="navbar-text">
                        Boards
                    </Typography>
                </StyledStatsAndTextWrapper>
                
                <StyledVerticalBreak />
  
                <SearchBar onSearch={handleSearch} />
            </StyledNavContentWrapper>

            <StyledNavContentWrapper>
                <NavbarIcon 
                    isOpen={openDropdown === "plus"}
                    onClick={() => handleIconClick("plus")} 
                    variant="plus" 
                />
                <NavbarIcon variant="exclamation" />
                <NavbarIcon variant="bell" />
                <ProfileIcon 
                    src={FaceIcon}
                    alt="profile icon"
                    variant="navbar-profile-icon"
                />
            </StyledNavContentWrapper>
        </StyledNavbarContainer>
    );
};

export default Navbar;