import UserIcon16 from "../../assets/images/icons/users/user16.png";
import UserIcon17 from "../../assets/images/icons/users/user17.png";
import UserIcon18 from "../../assets/images/icons/users/user18.png";
import UserIcon19 from "../../assets/images/icons/users/user19.png";
import UserIcon20 from "../../assets/images/icons/users/user20.png";
import UserIcon15 from "../../assets/images/icons/users/user15.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";
import { CardProps } from "../../components/Card";
import CardImage2 from "../../assets/images/SharingADrink.png";
import CardImage3 from "../../assets/images/CardImage3.png";
import TheEyeImage from "../../assets/images/TheEye.png";

export const cardsData3: CardProps[] = [
    {
        title: "Trello",
        imageSrc: TheEyeImage,
        rectangleColors: ['lightPurple', 'red', 'green'],
        bodyText: "Types of paper in catalog printing.",
        additionalText: "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
        userIconSources: [UserIcon16, UserIcon17, UserIcon18, OvalPlusIcon],
        messageCount: 34,
        likesCount: 23,
        attachmentCount: 98,
        heartColorScheme: "whiteRed",
    },
    {
        showTitle: false,
        rectangleColors: ['purple', 'lightGreen'],
        bodyText: "There is no competition.",
        additionalText: "This article is floated online with an aim to help you find the best dvd printin solution.",
        userIconSources: [UserIcon19, UserIcon20, OvalPlusIcon],
        messageCount: 23,
        likesCount: 12,
        attachmentCount: 44,
        heartColorScheme: "whiteRed",
    },
];