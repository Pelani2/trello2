import React from "react";
import { StyledNavbarContainer, StyledVerticalBreak, StyledNavContentWrapper, StyledStatsAndTextWrapper } from "./navbarStyles";
import Logo from "../Logo";
import Typography from "../Typography";
import TrelloIcon from "../../assets/images/icons/TrelloLogo.png";
import StatsIcon from "../../assets/images/icons/TrelloStatIcon.png";
import SearchBar from "../SearchBar";
import NavbarIcon from "../NavbarIcon";

const Navbar: React.FC = () => {
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
                    <Typography variant="">
                        Boards
                    </Typography>
                </StyledStatsAndTextWrapper>
                
                <StyledVerticalBreak />
  
                <SearchBar onSearch={handleSearch} />
            </StyledNavContentWrapper>

            <StyledNavContentWrapper>
                
                <NavbarIcon variant="plus" />
                <NavbarIcon variant="exclamation" />
                <NavbarIcon variant="bell" />
                
            </StyledNavContentWrapper>
        </StyledNavbarContainer>
    );
};

export default Navbar;