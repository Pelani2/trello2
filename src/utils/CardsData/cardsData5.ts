import { CardProps } from "../../components/Card";
import UserIcon31 from "../../assets/images/icons/users/user31.png";
import UserIcon32 from "../../assets/images/icons/users/user32.png";
import UserIcon13 from "../../assets/images/icons/users/user13.png";
import UserIcon12 from "../../assets/images/icons/users/user12.png";
import UserIcon14 from "../../assets/images/icons/users/user14.png";
import UserIcon5 from "../../assets/images/icons/users/user5.png";
import UserIcon6 from "../../assets/images/icons/users/user6.png";
import UserIcon7 from "../../assets/images/icons/users/user7.png";
import UserIcon29 from "../../assets/images/icons/users/user29.png";
import UserIcon30 from "../../assets/images/icons/users/user30.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";
import LipsImage from "../../assets/images/Lips.png";

export const cardsData5: CardProps[] = [
    {
        title: "Final",
        rectangleColors: ['yellow', 'red', 'purple'],
        bodyText: "At home treatments for beauty on a budget",
        additionalText: "The holidays bring with them thoughts of craving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you'd like to try a twist to your turkey recipe.",
        userIconSources: [OvalPlusIcon],
        messageCount: 87,
        likesCount: 54,
        attachmentCount: 32,
        heartColorScheme: "whiteRed",
    },
    {
        showTitle: false,
        rectangleColors: ['purple', 'green'],
        bodyText: "Home business advertising ideas.",
        additionalText: "Successful business know the importance of building and maintaining good working.",
        userIconSources: [UserIcon5, UserIcon6, OvalPlusIcon],
        messageCount: 13,
        likesCount: 11,
        attachmentCount: 43,
        heartColorScheme: "whiteRed",
    },
    {
        showTitle: false,
        imageSrc: LipsImage,
        rectangleColors: ['green', 'yellow'],
        bodyText: "Tips for choosing the perfect glass for your lips.",
        additionalText: "With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.",
        userIconSources: [UserIcon13, UserIcon12, UserIcon14, OvalPlusIcon],
        messageCount: 21,
        likesCount: 23,
        attachmentCount: 12,
        heartColorScheme: "whiteRed",
    },
];