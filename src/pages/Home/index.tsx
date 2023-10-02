import React from "react";
import Navbar from "../../components/Navbar";
import Brackets from "../../components/Brackets";
import Cards from "../../components/Cards";
import { StyledHomeCardsWrapper } from "./HomeStyles";
import { cardsData1 } from "../../utils/CardsData/cardsData1";
import { cardsData2 } from "../../utils/CardsData/cardsData2";
import { cardsData3 } from "../../utils/CardsData/cardsData3";
import { cardsData4 } from "../../utils/CardsData/cardsData4";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Brackets />
            <StyledHomeCardsWrapper>
                <Cards cardsData={cardsData1}/>
                <Cards cardsData={cardsData2}/>
                <Cards cardsData={cardsData3}/>
                <Cards cardsData={cardsData4}/>
            </StyledHomeCardsWrapper>
        </div>
    );
};

export default Home;