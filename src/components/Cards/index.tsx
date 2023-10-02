import React from "react";
import Card from "../Card";
import { StyledCardsWrapper } from "./CardsStyles";
import { CardProps } from "../Card";

interface CardsProps {
    cardsData: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ cardsData }) => {
    return (
        <StyledCardsWrapper>
            {cardsData.map((cardProps, i) => (
                <Card 
                    key={i}
                    {...cardProps}
                />
            ))}
        </StyledCardsWrapper>
    );
};

export default Cards;