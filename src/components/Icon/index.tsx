import React, { useState } from "react";
import { StyledBracketsIcon, StyledBracketsIconClicked } from "./IconStyles";

const variantClassMap: Record<string, any> = {
    "brackets-icon": StyledBracketsIcon,
    "brackets-icon-clicked": StyledBracketsIconClicked,
};

interface IconProps {
    variant: keyof typeof variantClassMap;
    src: string;
    alt?: string;
    onClick?: () => void;
}


const Icon: React.FC<IconProps> = ({ variant, src, alt, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const StyledIcon = isClicked ? variantClassMap[`${variant}-clicked`] : variantClassMap[variant];

    const handleClick = () => {
        setIsClicked(!isClicked);
        if (onClick) {
            onClick();
        }
    };

    return (
        <StyledIcon 
            src={src}
            alt={alt}
            onClick={handleClick}
        />
    );
};

export default Icon;