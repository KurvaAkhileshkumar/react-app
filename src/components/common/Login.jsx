import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Grid,
    TextField,
    Button,
    createTheme,
    ThemeProvider,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import loginImage from '../../assets/loginimg.svg'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import { authSliceActions } from "../../Store/Store.jsx";
import { poppinsFont, pxToRem } from "../../theme/typography.js";


const theme = createTheme({});

function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [usernameHelper, setUsernameHelper] = useState(false);
    const [passwordHelper, setPasswordHelper] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        setIsClicked((prevState) => !prevState);
    };


    //login routing and state update in store
    const handleLogin = () => {
        fetch(
            `https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`
        )
            .then((res) => res.json())
            .then((value) => {
                if (value.status === 200) {
                    dispatch(authSliceActions.login());
                    localStorage.setItem("isLogin", true);
                    navigate("/dashboard");
                } else {
                    setUsernameHelper((prevState) => !prevState);
                    setPasswordHelper((prevState) => !prevState);
                }
            });
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    //handling local storage
    const value = localStorage.getItem("isLogin");

    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={{ maxHeight: "100vh" }}>
                <Grid
                    md={6}
                    item
                    display="flex"
                    justifyContent="center"
                    backgroundColor="#0B58F5"
                >
                    <Stack gap={'71.41px'} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '405px',
                            height: {
                                md: '88.6px',
                                lg: '98px',
                            },
                            marginTop: '84px',
                            marginLeft: '86px',
                        }}>
                            <Box sx={{
                                color: '#fff',
                                fontFamily: poppinsFont.fontFamily,
                                fontSize: '57.251px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '50.094px',
                                textAlign: 'start',
                            }}>Welcome to</Box>
                            <Box sx={{
                                color: '#fff',
                                fontFamily: poppinsFont.fontFamily,
                                fontSize: '57.251px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '50.094px',
                            }
                            }>Student Portal</Box>
                            <Box sx={{
                                color: '#FFF',
                                fontFamily: poppinsFont.fontFamily,
                                fontSize: pxToRem(14),
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                textAlign: 'start',
                            }}>Login to access your account</Box>
                        </Box>
                        <Box>
                            <img src={loginImage} alt="" />
                        </Box>
                    </Stack>
                </Grid>
                <Grid
                    md={6}
                    item
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box>
                        <Box
                            id="login-header-div"
                            sx={{
                                fontSize: "48px",
                                fontStyle: "normal",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box
                                sx={{
                                    color: "#161c24",
                                    fontFamily: "Poppins",
                                    fontSize: "48px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    lineHeight: "normal",
                                }}
                            >
                                Login
                            </Box>
                            <Box
                                id="account-details"
                                sx={{
                                    color: "#161c24",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                }}
                            >
                                Enter your account details
                            </Box>
                        </Box>
                        <Box id="login-cred-div" sx={{ marginTop: "48px", width: "381px" }}>
                            <TextField
                                className="cred-field"
                                label="Username"
                                variant="standard"
                                autoComplete="off"
                                value={username}
                                onChange={handleUsername}
                                helperText={usernameHelper && "*Enter Valid Username"}
                                error={usernameHelper}
                                sx={{ width: "100%" }}
                            />
                            <TextField
                                className="cred-field"
                                sx={{ width: "100%" }}
                                label="Password"
                                variant="standard"
                                onChange={handlePassword}
                                value={password}
                                type={!isClicked ? "password" : "text"}
                                error={passwordHelper}
                                helperText={passwordHelper && "*Enter valid Password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                                            {!isClicked ? (
                                                <VisibilityOffIcon
                                                    className="visibility-button"
                                                    onClick={handleClick}
                                                />
                                            ) : (
                                                <Visibility
                                                    className="visibility-button"
                                                    onClick={handleClick}
                                                />
                                            )}
                                        </InputAdornment>
                                    ),
                                }}
                            ></TextField>
                            <Box
                                id="login-remember-div"
                                sx={{ marginTop: "2px", display: "flex", alignItems: "center" }}
                            >
                                <input
                                    type="checkbox"
                                    id="remember"
                                    style={{
                                        width: "14.823px",
                                        height: "14.823px",
                                        borderRadius: "3px",
                                        marginRight: "5px",
                                        marginTop: "5px",
                                        fontWeight: 100,
                                    }}
                                />
                                <label
                                    htmlFor="remember"
                                    id="remember-text"
                                    style={{
                                        marginTop: "3px",
                                        color: "#919EAB",
                                        textAlign: "center",
                                        fontFamily: "Poppins",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "normal",
                                    }}
                                >
                                    Remember me
                                </label>
                            </Box>
                            <Button
                                className="cred-field"
                                variant="contained"
                                sx={{
                                    marginTop: "30px",
                                    backgroundColor: "#0B58F5",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    fontFamily: "Poppins",
                                    width: "100%",
                                }}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;