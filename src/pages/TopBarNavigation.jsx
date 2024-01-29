import { Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import { MyDiv } from "../components/myStyledComponents/styledComponents";
import { poppinsFont, pxToRem } from "../theme/typography";
import profilePic from '../assets/profile.jpeg'
import Divider from '@mui/material/Divider';
export default function TopBarNavigation() {
    return (
        <>
            <Stack
                sx={{
                    position: 'relative',
                    left: '80px',
                    height: '80px',
                }}
            >
                <Stack direction={'row'}>
                    <Typography
                        sx={{
                            marginTop: '27px',
                            fontFamily: poppinsFont.fontFamily,
                            fontSize: pxToRem(24),
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '32px'
                        }}
                    >
                        Good morning, Maharram
                    </Typography>
                </Stack>
            </Stack>
            <Divider />
        </>
    );
}