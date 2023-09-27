import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

interface HeartProps {
    color: string;
}

const Heart = styled(AiFillHeart)<HeartProps>`
    color: ${props => props.color};
    cursor: pointer;
    font-size: 24px;
`;

const HeartIcon: React.FC = () => {
    const [isHearted, setIsHearted] = useState(false);

    const handleHeartClick = () => {
        setIsHearted(!isHearted);
    };

    return (
        <Heart 
            onClick={handleHeartClick}
            color={isHearted ? "red" : "black"}
        />
    );
};

export default HeartIcon;