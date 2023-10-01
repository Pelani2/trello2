import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import MeatballsIcon from "../../assets/images/icons/Meatballs.png";
import { StyledCard, StyledCardTitleWrapper, StyledCardContentWrapper, StyledCardStatWrapper, StyledCardIconAndText, StyledIconAndTextGroup } from "./CardStyles";
import { StyledUserIconWrapper } from "../Brackets/BracketsStyles";
import { ColoredRectangle } from "../ColoredRectangle";
import UserIcon from "../../assets/images/icons/users/user5.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";

interface CardProps {
    title: string;
    bodyText: string;
    userIconCount: number;
    messageCount: number;
    heartColorScheme: "whiteRed" | "blackRed";
    attachmentCount: number;
}

const Card: React.FC<CardProps> = ({ title, bodyText, userIconCount, messageCount, heartColorScheme, attachmentCount }) => {
    return (
        <StyledCard>
            <StyledCardTitleWrapper>
                <Typography variant="card-title">
                    {title}
                </Typography>
                <Icon 
                    variant="meatballs-icon"
                    src={MeatballsIcon}
                />
            </StyledCardTitleWrapper>

            <StyledCardContentWrapper>
                <ColoredRectangle variant="yellow" />
                <Typography variant="card-body-text">
                    {bodyText}
                </Typography>

                <StyledCardStatWrapper>
                    <StyledUserIconWrapper smallMargin>
                        {[...Array(userIconCount)].map((_, i) => (
                            <Icon 
                                key={i}
                                variant="user-icon"
                                src={UserIcon}
                                small
                            />
                        ))}
                    </StyledUserIconWrapper>
                    <StyledIconAndTextGroup>
                        <StyledCardIconAndText>
                            <Typography 
                                variant="card-body-text" 
                                smallFont
                            >
                                34
                            </Typography>
                            <Icon 
                                variant='message-box-icon'
                                small
                            />
                        </StyledCardIconAndText>
                        <StyledCardIconAndText>
                            <Typography 
                                variant="card-body-text" 
                                smallFont
                            >
                                14
                            </Typography>
                            <Icon 
                                variant='heart-icon'
                                colorScheme="whiteRed"
                                small
                            />
                        </StyledCardIconAndText>
                        <StyledCardIconAndText>
                            <Typography 
                                variant="card-body-text" 
                                smallFont
                            >
                                34
                            </Typography>
                            <Icon 
                                variant='attachment-icon'
                                small
                            />
                        </StyledCardIconAndText>
                    </StyledIconAndTextGroup>
                    
                </StyledCardStatWrapper>
            </StyledCardContentWrapper>
        </StyledCard>
    );
};

export default Card;