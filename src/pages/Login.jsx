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
} from "@mui/material";
import { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import loginImage from "../assets/loginimg.svg";
import { MyDiv } from "../components/myStyledComponents/styledComponents.jsx";
import { leftContent, leftHeader, loginHelper, studentPortal, welcome } from "./LoginStlyes.js";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { login } from '../Store/authSlice.jsx'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [helper, setHelper] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

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
        const validUsername = 'demo'
        const validPassword = 'demo'
        console.log(password)
        if (username === validUsername && password === validPassword) {
            navigate('/dashboard')
            setHelper(prevState => !prevState)
            dispatch(login())
        } else {
            alert("Invalid Credentials")
            setHelper(prevState => !prevState)
        }
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
                        <MyDiv sx={leftHeader}>
                            <MyDiv sx={welcome}>Welcome to</MyDiv>
                            <MyDiv sx={studentPortal}>Student Portal</MyDiv>
                            <MyDiv sx={loginHelper}>Login to access your account</MyDiv>
                        </MyDiv>
                        <MyDiv>
                            <img sx={{
                            }} src={loginImage} alt="" />
                        </MyDiv>
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
                        <h1 style={{ display: 'none' }}></h1>
                        <Input
                            placeholder="Username"
                            type="Username"
                            autoComplete="off"
                            helperText={helper && '*Enter Valid Username'}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <InputLabel htmlFor="password" />
                        <h1 style={{ display: 'none' }}></h1>
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