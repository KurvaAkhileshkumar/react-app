import React, { useState } from "react";
import { navStyles, goodMorningStyles, avatarStyles } from "./TopNavigationBarStyles.js";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, Typography } from "@mui/material";
import profileImg from '../assets/profile.jpeg'
import { Stack } from "@mui/material";
import { MyDiv } from "../components/myStyledComponents/styledComponents.jsx";
import { useSelector } from "react-redux";


export default function TopBarNavigation({ name, email }) {
    const navigate = useNavigate();
    const profilePicLink = useSelector((state) => state.assessmentsReducer.profilePicLink)
    const [profileClick, setProfileClick] = useState(false);

    const handleLogout = () => {
        setProfileClick(true);
    };

    const handleClose = () => {
        setProfileClick(false);
    };

    return (
        <>
            <Stack direction={'row'} sx={navStyles}>
                <Typography sx={goodMorningStyles}>Good morning, Maharram</Typography>

                <Box sx={avatarStyles}>
                    <img
                        src={profilePicLink}
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                        onClick={handleLogout}
                    />
                    {profileClick && (
                        <Menu
                            open={profileClick}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}

                        >
                            <MenuItem>
                                <img
                                    src={profileImg}
                                    width="50px"
                                    height="50px"
                                    style={{ borderRadius: "50%" }}
                                />
                            </MenuItem>
                            <MenuItem>{name}</MenuItem>
                            <MenuItem>{email}</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    )}
                </Box>
            </Stack>
        </>
    );
}
