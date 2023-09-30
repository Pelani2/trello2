import React from "react";
import { StyledProfileDropdown, StyledProfileLogoutLink } from "./ProfileDropdownStyles";
import Typography from "../Typography";

interface ProfileDropdownProps {
    open: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ open }) => {
    return (
        <StyledProfileDropdown open={open}>
            <Typography variant="profile-options-text">
                Profile
            </Typography>
            <Typography variant="profile-options-text">
                Settings
            </Typography>
            <StyledProfileLogoutLink to="/login">
                Logout
            </StyledProfileLogoutLink>
        </StyledProfileDropdown>
    );
};

export default ProfileDropdown;