import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import MeatballsIcon from "../../assets/images/icons/Meatballs.png";
import { StyledCard, StyledCardTitleWrapper, StyledCardContentWrapper, StyledCardStatWrapper } from "./CardStyles";
import { ColoredRectangle } from "../ColoredRectangle";
import UserIcon from "../../assets/images/icons/users/user5.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";
import MessageBoxIcon from "../../assets/images/icons/MessageBoxIcon.png";

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
                <Typography variant="card-body-text">
                    Old fashioned recipe for preventing allergies and chemical sensitivities.
                </Typography>

                <StyledCardStatWrapper>
                    <div>
                        <Icon 
                            variant="user-icon"
                            src={UserIcon}
                        />
                        <Icon 
                            variant="user-icon"
                            src={OvalPlusIcon}
                        />
                    </div>
                    <div>
                        <Typography variant="">
                            34
                        </Typography>
                        <Icon 
                            variant=""
                            src={MessageBoxIcon}
                        />
                    </div>
                </StyledCardStatWrapper>
            </StyledCardContentWrapper>
        </StyledCard>
    );
};

export default Card;