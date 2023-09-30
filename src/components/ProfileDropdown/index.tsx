import React from "react";
import { StyledProfileDropdown } from "./ProfileDropdownStyles";
import Typography from "../Typography";

interface ProfileDropdownProps {
    open: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ open }) => {
    return (
        <StyledProfileDropdown open={open}>
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