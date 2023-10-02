import React from "react";
import Navbar from "../../components/Navbar";
import Brackets from "../../components/Brackets";
import Cards from "../../components/Cards";
import { StyledHomeCardsWrapper } from "./HomeStyles";
import { cardsData1 } from "../../utils/CardsData/cardsData1";
import { cardsData2 } from "../../utils/CardsData/cardsData2";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Brackets />
            <StyledHomeCardsWrapper>
                <Cards 
                    cardsData={cardsData1}
                />
                <Cards 
                    cardsData={cardsData2}
                />
            </StyledHomeCardsWrapper>
        </div>
    );
};

export default Home;