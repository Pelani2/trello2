import React from "react";
import { StyledProfileDropdown } from "./ProfileDropdownStyles";
import Typography from "../Typography";

const ProfileDropdown: React.FC = () => {
    return (
        <StyledProfileDropdown>
            <p>
                Profile
            </p>
            <p>
                Settings
            </p>
            <p>
                Logout
            </p>
        </StyledProfileDropdown>
    );
};

export default ProfileDropdown;