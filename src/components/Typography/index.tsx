import React from "react";
import "./typography-styles.scss";

const variantClassMap:  Record<string, string> = {
    "primary-title": "primary-title",
};

interface TypographyProps {
    variant: keyof typeof variantClassMap;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    const className = `typography ${variantClassMap[variant]}`;

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Typography;