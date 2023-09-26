import React from "react";
import { StyledNavbarContainer, VerticalBreak, StyledNavContentWrapper, StyledStatsAndTextWrapper } from "./navbarStyles";
import Logo from "../Logo";
import Typography from "../Typography";
import TrelloIcon from "../../assets/images/icons/TrelloLogo.png";
import StatsIcon from "../../assets/images/icons/TrelloStatIcon.png";
import SearchBar from "../SearchBar";

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

                <VerticalBreak />

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
                
                <VerticalBreak />
  
                <SearchBar onSearch={handleSearch} />
            </StyledNavContentWrapper>
        </StyledNavbarContainer>
    );
};

export default Navbar;