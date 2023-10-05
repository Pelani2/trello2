import React, { useState } from "react";
import { StyledNavbarContainer, StyledVerticalBreak, StyledNavContentWrapper, StyledStatsAndTextWrapper } from "./navbarStyles";
import Logo from "../Logo";
import Typography from "../Typography";
import TrelloIcon from "../../assets/images/icons/TrelloLogo.png";
import StatsIcon from "../../assets/images/icons/TrelloStatIcon.png";
import SearchBar from "../SearchBar";
import NavbarIcon from "../NavbarIcon";
import ProfileIcon from "../ProfileIcon";
import UserIcon from "../../assets/images/icons/users/user.png";

const Navbar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleIconClick = (iconName: string) => {
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
                
                <SearchBar 
                    onSearch={handleSearch}
                    variant="Fa"
                />
            </StyledNavContentWrapper>

            <StyledNavContentWrapper>
                <NavbarIcon 
                    isOpened={openDropdown === "plus"}
                    handleClick={() => handleIconClick("plus")} 
                    variant="plus" 
                />
                <NavbarIcon 
                    isOpened={openDropdown === "exclamation"}
                    handleClick={() => handleIconClick("exclamation")} 
                    variant="exclamation" 
                />
                <NavbarIcon 
                    isOpened={openDropdown === "bell"}
                    handleClick={() => handleIconClick("bell")} 
                    variant="bell" 
                />
                <ProfileIcon 
                    src={UserIcon}
                    alt="profile icon"
                    variant="navbar-profile-icon"
                    isOpened={openDropdown === "profile"}
                    handleClick={() => handleIconClick("profile")}
                />
            </StyledNavContentWrapper>
        </StyledNavbarContainer>
    );
};

export default Navbar;