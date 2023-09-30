import React from "react";
import { StyledProfileDropdown } from "./ProfileDropdownStyles";
import Typography from "../Typography";
import { Link } from "react-router-dom";

interface ProfileDropdownProps {
    open: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ open }) => {
    return (
        <StyledProfileDropdown open={open}>
            <Typography variant="">
                Profile
            </Typography>
            <Typography variant="">
                Settings
            </Typography>
            <Link to="/login">
                Logout
            </Link>
        </StyledProfileDropdown>
    );
};

export default ProfileDropdown;