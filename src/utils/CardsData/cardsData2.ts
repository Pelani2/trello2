import UserIcon10 from "../../assets/images/icons/users/user10.png";
import UserIcon11 from "../../assets/images/icons/users/user11.png";
import UserIcon12 from "../../assets/images/icons/users/user12.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";
import { CardProps } from "../../components/Card";
import CardImage2 from "../../assets/images/SharingADrink.png";

export const cardsData2: CardProps[] = [
    {
        title: "Prototip",
        rectangleColors: ['purple', 'red', 'lightPurple'],
        bodyText: "Home business advertising ideas",
        additionalText: "Successful businesses know the importance of building and maintaining good working.",
        userIconSources: [OvalPlusIcon],
        messageCount: 76,
        likesCount: 45,
        attachmentCount: 12,
        heartColorScheme: "whiteRed",
    },
    {
        showTitle: false,
        imageSrc: CardImage2,
        rectangleColors: ['green', 'yellow'],
        bodyText: "Unmatched toner cartridge quality 20 less than oem price.",
        additionalText: "Why read motivational sayings? For motivation, you might need a bit, if you can use last year's list of goals this year because it's as good as new.",
        userIconSources: [UserIcon10, UserIcon11, UserIcon12, OvalPlusIcon],
        messageCount: 76,
        likesCount: 32,
        attachmentCount: 66,
        heartColorScheme: "whiteRed",
    },
];