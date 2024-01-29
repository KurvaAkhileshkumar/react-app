import { Stack, Typography, Grid } from "@mui/material";
import { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import Input from '@mui/material/Input';
import loginImage from "../assets/loginimg.svg";
import { MyDiv } from "../components/myStyledComponents/styledComponents.jsx";
import { leftContent, leftHeader, loginHelper, studentPortal, welcome } from "./LoginStlyes.js";

export default function Login() {
    const ariaLabel = { 'aria-label': 'description' };
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
                    <MyDiv sx={leftContent}>
                        <MyDiv sx={leftHeader}>
                            <span sx={welcome}>Welcome to</span>
                            <span sx={studentPortal}>Student Portal</span>
                            <span sx={loginHelper}>Login to access your account</span>
                        </MyDiv>
                        <MyDiv>
                            <img sx={loginImage} src={loginImage} alt="" />
                        </MyDiv>
                    </MyDiv>
                </Grid>
            </Grid>
        </>
    );
}