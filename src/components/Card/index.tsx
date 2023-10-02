import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import MeatballsIcon from "../../assets/images/icons/Meatballs.png";
import { StyledCard, StyledCardTitleWrapper, StyledCardContentWrapper, StyledCardStatWrapper, StyledCardIconAndText, StyledIconAndTextGroup, StyledRectangleWrapper } from "./CardStyles";
import { StyledUserIconWrapper } from "../Brackets/BracketsStyles";
import { ColoredRectangle } from "../ColoredRectangle";


interface CardProps {
    title: string;
    bodyText: string;
    userIconSources: string[];
    messageCount: number;
    heartColorScheme: "whiteRed" | "blackRed";
    attachmentCount: number;
}

const Card: React.FC<CardProps> = ({ title, bodyText, userIconSources, messageCount, heartColorScheme, attachmentCount }) => {
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
                <StyledRectangleWrapper>
                    <ColoredRectangle variant="yellow" />
                    <ColoredRectangle variant="yellow" />
                </StyledRectangleWrapper>
                <Typography variant="card-body-text">
                    {bodyText}
                </Typography>

                <StyledCardStatWrapper>
                    <StyledUserIconWrapper smallMargin>
                        {userIconSources.map((src, i) => (
                            <Icon 
                                key={i}
                                variant="user-icon"
                                src={src}
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
                                {messageCount}
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
                                {attachmentCount}
                            </Typography>
                            <Icon 
                                variant='heart-icon'
                                colorScheme={heartColorScheme}
                                small
                            />
                        </StyledCardIconAndText>
                        <StyledCardIconAndText>
                            <Typography 
                                variant="card-body-text" 
                                smallFont
                            >
                                {attachmentCount}
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