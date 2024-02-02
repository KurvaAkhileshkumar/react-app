import {
    Grid, FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
    Checkbox,
    FormControlLabel,
    Button,
    Stack,
    Typography,
    Box
} from "@mui/material";
import loginImage from "../../assets/loginimg.svg";
import { leftContent, leftHeader, loginHelper, studentPortal, welcome } from "../../pages/DummyStyles/LoginStlyes.js";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { authSliceActions } from "../../Store/Store.jsx";


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [helper, setHelper] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const storedUsername = localStorage.getItem('rememberMeUsername')
        const storedPassword = localStorage.getItem('rememberMePassword')

        if (storedUsername && storedPassword) {
            setUsername(storedUsername)
            setPassword(storedPassword)
            setRememberMe(true)
        }
    }, [])

    const handleLogin = () => {
        fetch(`https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`).
            then((resposne) => resposne.json()).
            then((res) => {
                if (res.status === 200) {
                    navigate('/dashboard')
                    setHelper(prevState => !prevState)
                    dispatch(authSliceActions.login())
                } else {
                    alert(res.message)
                    setHelper(prevState => !prevState)
                }
            })

    }
    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe)

        if (!rememberMe) {
            localStorage.setItem('rememberMeUsername', username)
            localStorage.setItem('rememberMePassword', password)
            localStorage.setItem('rememberMe', 'true')
        } else {
            localStorage.removeItem('rememberMeUsername')
            localStorage.removeItem('rememberMePassword')
            localStorage.removeItem('rememberMe')
        }
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Grid
                    md={6}
                    item
                    display="flex"
                    justifyContent="center"
                    backgroundColor="#0B58F5"
                >
                    <Stack gap={'71.41px'} sx={leftContent}>
                        <Box sx={leftHeader}>
                            <Box sx={welcome}>Welcome to</Box>
                            <Box sx={studentPortal}>Student Portal</Box>
                            <Box sx={loginHelper}>Login to access your account</Box>
                        </Box>
                        <Box>
                            <img sx={{
                            }} src={loginImage} alt="" />
                        </Box>
                    </Stack>
                </Grid>
                <Stack
                    sx={{
                        width: '381px',
                        margin: '204px 151px'
                    }}
                >
                    <Typography
                        sx={{
                            color: '#161C24',
                            fontSize: '48px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            textAlign: 'start'
                        }}
                    >
                        Login
                    </Typography>
                    <Typography
                        sx={{
                            color: '#161C24',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            my: '12px',
                            textAlign: 'start'
                        }}
                    >
                        Enter your account details
                    </Typography>
                    <FormControl>
                        <InputLabel htmlFor="name"></InputLabel>
                        {/* <Typography sx={{ display: 'none' }}></Typography> */}
                        <Input
                            placeholder="Username"
                            type="Username"
                            autoComplete="off"
                            helperText={helper && '*Enter Valid Username'}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <InputLabel htmlFor="password" />
                        {/* <Typography sx={{ display: 'none' }}></Typography> */}
                        <Input
                            sx={{
                                marginTop: '20px'
                            }}
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            autoComplete="off"
                            helperText={helper && '*Enter Valid Username'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        <FormControlLabel
                            control={
                                <Checkbox id="rememberMe"
                                    onChange={handleCheckboxChange}
                                />
                            }
                            label="Remember Me"
                        />

                        <Button variant="contained" color="primary"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </FormControl>
                </Stack>
            </Grid>


        </>
    );
}