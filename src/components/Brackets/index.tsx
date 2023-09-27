import React from "react";
import Typography from "../Typography";
import HeartIcon from "../HeartIcon";

const Brackets: React.FC = () => {
    return (
        <div className="brackets-container">
            <Typography variant="navbar-text">
                Brackets
            </Typography>

            <div className="brackets__icons">
                <HeartIcon />
            </div>
        </div>
    );
};

export default Brackets;