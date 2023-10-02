import React from "react";
import Card from "../Card";
import UserIcon5 from "../../assets/images/icons/users/user5.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";
import UserIcon6 from "../../assets/images/icons/users/user6.png";
import UserIcon7 from "../../assets/images/icons/users/user7.png";
import CardImage1 from "../../assets/images/CardImage1.png";
import UserIcon from "../../assets/images/icons/users/user.png";
import UserIcon8 from "../../assets/images/icons/users/user8.png";
import UserIcon9 from "../../assets/images/icons/users/user9.png";
import { StyledCardsWrapper } from "./CardsStyles";
import { CardProps } from "../Card";


const cardsData: CardProps[] = [
    {
      title: "Design",
      bodyText: "Old fashioned recipe for preventing allergies and chemical sensitivities.",
      userIconSources: [UserIcon5, OvalPlusIcon],
      messageCount: 34,
      likesCount: 14,
      attachmentCount: 34,
      heartColorScheme: "whiteRed",
      rectangleColors: ['yellow'],
      showAdditionalText: false,
    },
    {
      showTitle: false,
      bodyText: "Home business advertising ideas.",
      userIconSources: [UserIcon6, UserIcon7, OvalPlusIcon],
      messageCount: 23,
      heartColorScheme: "whiteRed",
      likesCount: 12,
      attachmentCount: 43,
      rectangleColors: ['yellow', 'red', 'lightPurple', 'lightGreen'],
      additionalText: "Successful businesses know the importance of building and maintaining good working.",
    },
    {
      showTitle: false,
      bodyText: "Cosmetic surgery abroad making the right choice.",
      userIconSources: [UserIcon, UserIcon8, UserIcon9, OvalPlusIcon],
      messageCount: 54,
      heartColorScheme: "whiteRed",
      likesCount: 16,
      attachmentCount: 33,
      imageSrc: CardImage1,
      rectangleColors: ['lightGreen'],
    }
  ];

const Cards: React.FC = () => {
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