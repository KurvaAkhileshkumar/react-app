import { NavLink } from 'react-router-dom'
import { Stack, Box } from '@mui/material'
import palette from '../../theme/palette';
import edwiselyLogo from '../../assets/edwisely.svg'
import courseImg from '../../assets/courseimg.svg'
import courseActiveImg from '../../assets/courseActive.svg'
import dashBoardImg from '../../assets/dashboardimg.svg'
import dashBoardHoverImg from '../../assets/dashboardHover.svg'
import dashBoardNull from '../../assets/dashboardNULL.svg'
import logoutImg from '../../assets/logout.svg'
import { authSliceActions } from '../../Store/Store';
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useLocation } from 'react-router';

export default function SibeBarNavigation() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [hovered, setHovered] = useState(false);
    const location = useLocation();

    //handling dashboard click
    const handleDashboard = () => {
        navigate('/dashboard')
    }

    const handleScroll = () => {
        window.scrollTo(0, document.body.scrollHeight)
    }
    const logoutHandler = () => {
        dispatch(authSliceActions.logout())
        navigate('/')
    }
    return (
        <>
            <Stack width={'80px'} height={'100%'}
                sx={
                    {
                        background: palette.grey[100],
                        position: 'absolute',
                        top: '0px',
                    }
                }
            >
                <Box
                    sx={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        width: '80px',
                        height: '50px',
                        marginLeft: '19px',
                        marginBottom: '30px',
                        marginTop: '22px'
                    }}
                >
                    <NavLink
                        to=''
                    >
                        <img src={edwiselyLogo} alt="Logo Icon" />
                    </NavLink>
                </Box>

                <Stack gap={'16px'}>
                    <Box
                        sx={{
                            marginBottom: "16px",
                            width: "80px",
                            height: "56px",
                            display: "flex",
                            cursor: 'pointer'
                        }}
                        alignItems={"center"}
                    >
                        {location.pathname === "/dashboard" && (
                            <Box
                                component="span"
                                bgcolor="primary.main"
                                sx={{
                                    width: "3px",
                                    height: "40px",
                                    display: "inline",
                                    borderRadius: "5px",
                                }}
                            ></Box>
                        )}
                        <Box
                            sx={{
                                marginLeft: "16px",
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                padding: "8px",
                            }}
                            bgcolor={
                                location.pathname === "/dashboard" ? palette.primary[200] : ""
                            }
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <img
                                src={
                                    location.pathname === "/dashboard"
                                        ? (hovered ? dashBoardHoverImg : dashBoardImg)
                                        : (hovered ? dashBoardHoverImg : dashBoardNull)
                                }
                                width="24px"
                                height="24px"
                                alt="dashBoardLogo"
                                onClick={handleDashboard}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            marginBottom: "477px",
                            width: "80px",
                            height: "56px",
                            display: "flex",
                            cursor: 'pointer'
                        }}
                        alignItems={"center"}
                    >
                        {location.pathname.includes("/course") && (
                            <Box
                                component="span"
                                bgcolor="primary.main"
                                sx={{
                                    width: "3px",
                                    height: "40px",
                                    display: "inline",
                                    borderRadius: "5px",
                                }}
                            ></Box>
                        )}
                        <Box
                            sx={{
                                marginLeft: "16px",
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                padding: "8px",
                            }}
                            bgcolor={location.pathname.includes('/course') ? palette.primary[200] : ''}
                        >
                            <img
                                src={location.pathname.includes("/course") ? courseActiveImg : courseImg}
                                width="24px"
                                height="24px"
                                alt="courseLogo"
                                onClick={handleScroll}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '0',
                            width: '80px',
                            height: '50px',
                            padding: '8px 18px 8px 19px'
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                padding: '8px',
                                cursor: 'pointer'
                            }}
                        >
                            <img src={logoutImg} alt="Log out Icon" onClick={logoutHandler} />
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}