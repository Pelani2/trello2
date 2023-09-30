import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import MeatballsIcon from "../../assets/images/icons/Meatballs.png";
import { StyledCard, StyledCardTitleWrapper, StyledCardContentWrapper } from "./CardStyles";
import { ColoredRectangle } from "../ColoredRectangle";

const Card:  React.FC = () => {
    return (
        <StyledCard>
            <StyledCardTitleWrapper>
                <Typography variant="card-title">
                    Design
                </Typography>
                <Icon 
                    variant="meatballs-icon"
                    src={MeatballsIcon}
                />
                
            </StyledCardTitleWrapper>
            <StyledCardContentWrapper>
                <ColoredRectangle variant="yellow" />
                <Typography variant="">
                    Old fashioned recipe for preventing allergies and chemical sensitivities.
                </Typography>
            </StyledCardContentWrapper>
        </StyledCard>
    );
};

export default Card;