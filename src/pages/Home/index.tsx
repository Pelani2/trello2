import React from "react";
import Navbar from "../../components/Navbar";
import Brackets from "../../components/Brackets";
import Cards from "../../components/Cards";
import { StyledHomeCardsWrapper, StyledHomeContainer } from "./HomeStyles";
import { cardsData1 } from "../../utils/CardsData/cardsData1";
import { cardsData2 } from "../../utils/CardsData/cardsData2";
import { cardsData3 } from "../../utils/CardsData/cardsData3";
import { cardsData4 } from "../../utils/CardsData/cardsData4";
import { cardsData5 } from "../../utils/CardsData/cardsData5";

const Home: React.FC = () => {
    return (
        <StyledHomeContainer>
            <Navbar />
            <Brackets />
            <StyledHomeCardsWrapper>
                <Cards cardsData={cardsData1}/>
                <Cards cardsData={cardsData2}/>
                <Cards cardsData={cardsData3}/>
                <Cards cardsData={cardsData4}/>
                <Cards cardsData={cardsData5}/>
            </StyledHomeCardsWrapper>
        </StyledHomeContainer>
    );
};

export default Home;