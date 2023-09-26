import React from "react";
import { StyledNavbarContainer, VerticalBreak } from "./navbarStyles";
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
            <div className="nav-content-wrapper">
                <Logo
                    variant="primary-logo"
                    src={TrelloIcon}
                    alt="trello logo"
                />
                <VerticalBreak />
                <Logo 
                    variant="primary-logo"
                    src={StatsIcon}
                    alt="stats icon"
                />
                <Typography variant="">
                    Boards
                </Typography>
                <VerticalBreak />
                <SearchBar onSearch={handleSearch} />
            </div>
        </StyledNavbarContainer>
    );
};

export default Navbar;