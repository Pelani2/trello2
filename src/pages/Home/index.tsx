import React from "react";
import Navbar from "../../components/Navbar";
import Brackets from "../../components/Brackets";
import Cards from "../../components/Cards";
import { StyledHomeCardsWrapper } from "./HomeStyles";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Brackets />
            <StyledHomeCardsWrapper>
                <Cards />
            </StyledHomeCardsWrapper>
        </div>
    );
};

export default Home;