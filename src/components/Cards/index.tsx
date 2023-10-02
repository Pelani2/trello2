import React from "react";
import Card from "../Card";
import UserIcon from "../../assets/images/icons/users/user5.png";
import OvalPlusIcon from "../../assets/images/icons/users/OvalPlusIcon.png";

const Cards: React.FC = () => {
    return (
        <div className="card-container">
            <Card 
                title="Design"
                bodyText="Old fashioned recipe for preventing allergies and chemical sensitivities."
                userIconSources={[UserIcon, OvalPlusIcon]}
                messageCount={34}
                heartColorScheme="whiteRed"
                attachmentCount={14}
                rectangleColors={['yellow']}
            />
            <Card 
                showTitle={false}
                bodyText="Home business advertising ideas."
                userIconSources={[UserIcon, OvalPlusIcon]}
                messageCount={34}
                heartColorScheme="whiteRed"
                attachmentCount={14}
                rectangleColors={['yellow', 'red', 'lightPurple', 'lightGreen']}
            />
        </div>
    );
};

export default Cards;