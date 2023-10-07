import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import MeatballsIcon from "../../assets/images/icons/Meatballs.png";
import Image from "../Image";
import { StyledCard, StyledCardTitleWrapper, StyledCardContentWrapper, StyledCardStatWrapper, StyledCardIconAndText, StyledIconAndTextGroup, StyledRectangleWrapper } from "./CardStyles";
import { StyledUserIconWrapper } from "../Brackets/BracketsStyles";
import { ColoredRectangle } from "../ColoredRectangle";
import { Color } from "../../utils/types";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export interface CardProps {
    title?: string;
    bodyText: string;
    userIconSources: string[];
    messageCount: number;
    heartColorScheme: "whiteRed" | "blackRed";
    attachmentCount: number;
    likesCount: number;
    rectangleColors: Color[];
    showTitle?: boolean;
    additionalText?: string;
    showAdditionalText?: boolean;
    imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ title, bodyText, userIconSources, messageCount, attachmentCount, rectangleColors, showTitle = true, showAdditionalText = true, additionalText, likesCount, imageSrc }) => {
    const viewportWidth = useSelector((state: RootState) => state.viewport.width);
    
    return (
        <StyledCard>
            
            {showTitle && (
                <StyledCardTitleWrapper>
                    <Typography variant="card-title">
                        {title}
                    </Typography>
                    <Icon 
                        variant="meatballs-icon"
                        src={MeatballsIcon}
                    />
                </StyledCardTitleWrapper>
            )}

            <StyledCardContentWrapper>
                {imageSrc && (
                    <Image 
                        src={imageSrc}
                        alt="card image"
                        variant="card-image"
                    />
                )}
                <StyledRectangleWrapper>
                    {rectangleColors.map((color, i) => (
                        <ColoredRectangle 
                            key={i}
                            variant={color}
                        />
                    ))}
                </StyledRectangleWrapper>
                <Typography variant="card-body-text">
                    {bodyText}
                </Typography>
                {showAdditionalText && (
                    <Typography variant="card-sub-text">
                        {additionalText}
                    </Typography>
                )}

                <StyledCardStatWrapper>
                    {viewportWidth <= 321 ? (
                        <StyledUserIconWrapper>
                            {userIconSources.map((src, i) => (
                                <Icon 
                                    key={i}
                                    variant="user-icon"
                                    src={src}
                                    small
                                />
                            ))}
                    </StyledUserIconWrapper>
                    ) : <StyledUserIconWrapper smallMargin>
                    {userIconSources.map((src, i) => (
                        <Icon 
                            key={i}
                            variant="user-icon"
                            src={src}
                            small
                        />
                    ))}
                    </StyledUserIconWrapper>}

                    <StyledIconAndTextGroup>
                        <StyledCardIconAndText>
                            <Typography 
                                variant="card-body-text" 
                                smallFont
                            >
                                {messageCount}
                            </Typography>
                            {viewportWidth <= 321 ? (
                                <Icon 
                                    variant='message-box-icon'
                                    small
                                    style={{width: "14px", height: "14px"}}
                            /   >
                            ) : <Icon 
                                    variant='message-box-icon'
                                    small
                            />}
                        </StyledCardIconAndText>
                        <StyledCardIconAndText>
                            <Typography 
                                variant="card-body-text" 
                                smallFont
                            >
                                {likesCount}
                            </Typography>
                            {viewportWidth <= 321 ? (
                                <Icon 
                                    variant='heart-icon'
                                    colorScheme="whiteRed"
                                    small
                                    style={{width: "14px", height: "14px"}}
                            /   >
                            ) : <Icon 
                                    variant='heart-icon'
                                    colorScheme="whiteRed"
                                    small
                            />}
                        </StyledCardIconAndText>
                        <StyledCardIconAndText>
                            <Typography 
                                variant="card-body-text" 
                                smallFont
                            >
                                {attachmentCount}
                            </Typography>
                            {viewportWidth <= 321 ? (
                                <Icon 
                                    variant='attachment-icon'
                                    small
                                    style={{width: "14px", height: "14px"}}
                            />
                            ) : <Icon 
                                    variant='attachment-icon'
                                    small
                            />}
                            
                        </StyledCardIconAndText>
                    </StyledIconAndTextGroup>
                </StyledCardStatWrapper>
            </StyledCardContentWrapper>
        </StyledCard>
    );
};

export default Card;