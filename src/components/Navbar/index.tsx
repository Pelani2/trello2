import React, { useState, useEffect } from "react";
import { StyledNavbarContainer, StyledVerticalBreak, StyledNavContentWrapper, StyledStatsAndTextWrapper } from "./navbarStyles";
import Logo from "../Logo";
import Typography from "../Typography";
import TrelloIcon from "../../assets/images/icons/TrelloLogo.png";
import StatsIcon from "../../assets/images/icons/TrelloStatIcon.png";
import SearchBar from "../SearchBar";
import NavbarIcon from "../NavbarIcon";
import ProfileIcon from "../ProfileIcon";
import UserIcon from "../../assets/images/icons/users/user.png";
import { FaSearch, FaPlusCircle, FaExclamationCircle, FaBell } from "react-icons/fa";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const viewportWidth = useSelector((state: RootState) => state.viewport.width);

    const handleIconClick = (iconName: string) => {
        setOpenDropdown(openDropdown === iconName ? null : iconName);
    }
    
    const handleSearch = (searchTerm: string) => {
        console.log(`\n\nSearching for: ${searchTerm}`);
    };

    return (
        <StyledNavbarContainer>
            <StyledNavContentWrapper>
                
                {viewportWidth >= 321 ? <Logo
                    variant="navbar-logo"
                    src={TrelloIcon}
                    alt="trello logo"
                    /> : "" 
                }
                
                {viewportWidth >= 321 ? <StyledVerticalBreak /> : null}

                <StyledStatsAndTextWrapper>
                    <Logo 
                        variant="navbar-stats-icon"
                        src={StatsIcon}
                        alt="stats icon"
                    />
                    {viewportWidth >= 321 ? <Typography variant="navbar-text">
                        Boards
                    </Typography> : null}
                </StyledStatsAndTextWrapper>
                
                {viewportWidth >= 321 ? <StyledVerticalBreak /> : null}

                {viewportWidth >= 321 ? <SearchBar 
                    onSearch={handleSearch}
                    variant="Fa"
                /> : <FaSearch size={17}/>
            }
                
            </StyledNavContentWrapper>

            <StyledNavContentWrapper>
                {viewportWidth >= 321 ? <NavbarIcon 
                    isOpened={openDropdown === "plus"}
                    handleClick={() => handleIconClick("plus")} 
                    variant="plus" 
                /> : <FaPlusCircle />}
                
                {viewportWidth >= 321 ? <NavbarIcon 
                    isOpened={openDropdown === "exclamation"}
                    handleClick={() => handleIconClick("exclamation")} 
                    variant="exclamation" 
                /> : <FaExclamationCircle />}
                
                {viewportWidth > 321 ? <NavbarIcon 
                    isOpened={openDropdown === "bell"}
                    handleClick={() => handleIconClick("bell")} 
                    variant="bell" 
                /> : <FaBell />}
                
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