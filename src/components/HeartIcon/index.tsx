import React, { useState } from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';

interface HeartProps {
    color: string;
}

const Heart = styled(BsHeart)<HeartProps>`
    color: ${props => props.color};
    cursor: pointer;
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