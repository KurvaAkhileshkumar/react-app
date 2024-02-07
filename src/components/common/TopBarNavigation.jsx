import React, { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import profileImg from '../../assets/profile.jpeg'
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { poppinsFont } from "../../theme/typography.js";


export default function TopBarNavigation() {

    const profilePicLink = useSelector((state) => state.assessmentsReducer.profile.profilePic)
    const name = useSelector((state) => state.assessmentsReducer.profile.name)
    const email = useSelector((state) => state.assessmentsReducer.profile.email)
    const [profileClick, setProfileClick] = useState(false);

    const handleLogout = () => {
        setProfileClick(true);
    };

    const handleClose = () => {
        setProfileClick(false);
    };

    return (
        <>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}
                sx={{
                    marginLeft: '80px',
                    marginTop: '27px',

                }}
            >
                <Typography sx={
                    {
                        height: '32px',
                        marginLeft: '18px',
                        fontFamily: poppinsFont.fontFamily,
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '32px',
                    }
                }>Good morning, {name}👋</Typography>

                <Box
                    sx={{
                        position: 'relative',
                        marginRight: '20px',
                        cursor: 'pointer'
                    }}
                >
                    <img
                        src={profilePicLink}
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                        onClick={handleLogout}
                        alt=""
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            right: '200px'
                        }}
                    >
                        {profileClick && (
                            <Menu
                                open={profileClick}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                anchorPosition={{
                                    left: 100,
                                    top: 100
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}

                            >
                                <MenuItem>
                                    <img
                                        src={profilePicLink}
                                        width="50px"
                                        height="50px"
                                        style={{ borderRadius: "50%" }}
                                        alt=""
                                    />
                                </MenuItem>
                                <MenuItem>{name}</MenuItem>
                                <MenuItem>{email}</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </Menu>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}
