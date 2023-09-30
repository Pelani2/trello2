import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import MeatballsIcon from "../../assets/images/icons/Meatballs.png";
import { StyledCard, StyledCardTitleWrapper } from "./CardStyles";

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
        </StyledCard>
    );
};

export default Card;