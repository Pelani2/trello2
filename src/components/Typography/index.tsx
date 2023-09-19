import React from "react";
import styled from 'styled-components';
import "./typography-styles.scss";

const variantClassMap:  Record<string, string> = {
    "primary-title": "primary-title",
};

interface TypographyProps {
    variant: keyof typeof variantClassMap;
    children: React.ReactNode;
}

const StyledPrimaryTitle = styled.div`
    font-size: 24px;
    color: #007bff;
`;

const StyledDefault = styled.div`
    font-size: 16px;
    color: #333;
`;

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    let StyledTypography;

    switch(variant) {
        case 'primary-title':
            StyledTypography = StyledPrimaryTitle;
            break;
        default:
            StyledTypography = StyledDefault;
            break;
    }

    return (
        <StyledTypography>
            {children}
        </StyledTypography>
    );
};

export default Typography;