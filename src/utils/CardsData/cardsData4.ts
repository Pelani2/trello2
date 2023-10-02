import { CardProps } from "../../components/Card";
import UserIcon21 from "../../assets/images/icons/users/user21.png";
import UserIcon22 from "../../assets/images/icons/users/user22.png";
import UserIcon23 from "../../assets/images/icons/users/user23.png";
import UserIcon24 from "../../assets/images/icons/users/user24.png";
import UserIcon25 from "../../assets/images/icons/users/user25.png";
import UserIcon26 from "../../assets/images/icons/users/user26.png";
import UserIcon27 from "../../assets/images/icons/users/user27.png";
import UserIcon28 from "../../assets/images/icons/users/user28.png";
import UserIcon29 from "../../assets/images/icons/users/user29.png";
import UserIcon30 from "../../assets/images/icons/users/user30.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";
import CardCartoonFaceImage from "../../assets/images/CardCartoonFace.png";

export const cardsData4: CardProps[] = [
    {
        title: "Test",
        rectangleColors: ['green', 'red'],
        bodyText: "Linux or windows which is it?",
        additionalText: "Saving money - is something we all would like.",
        userIconSources: [UserIcon21, UserIcon22, UserIcon23, UserIcon24, UserIcon25, OvalPlusIcon],
        messageCount: 32,
        likesCount: 87,
        attachmentCount: 31,
        heartColorScheme: "whiteRed",
    },
    {
        showTitle: false,
        imageSrc: CardCartoonFaceImage,
        rectangleColors: ['purple', 'red', 'green'],
        bodyText: "Be single minded.",
        additionalText: "Create a list with all possible keywords that fit to your product, service or business field.",
        userIconSources: [UserIcon26, UserIcon27, UserIcon28, OvalPlusIcon],
        messageCount: 55,
        likesCount: 23,
        attachmentCount: 19,
        heartColorScheme: "whiteRed",
    },
    {
        showTitle: false,
        rectangleColors: ['purple', 'lightGreen'],
        bodyText: "Dna the future of nutrition.",
        additionalText: "Why does anyone want a vasectomy reversal? This is a question I hear any time i tell someone what I do for a living.",
        userIconSources: [UserIcon29, UserIcon30, OvalPlusIcon],
        messageCount: 12,
        likesCount: 33,
        attachmentCount: 66,
        heartColorScheme: "whiteRed",
    },
];