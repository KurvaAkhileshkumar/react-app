import { Stack, Typography } from "@mui/material";
import { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import Input from '@mui/material/Input';
export default function Login() {
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <>
            <Stack direction={'row'}>
                <Stack>

                </Stack>
                <Stack direction={'column'} marginLeft={'683px'} marginTop={'204px'} marginBottom={'201px'} marginRight={'151px'}>
                    <Stack gap={'20px'}>
                        <Typography sx={
                            {
                                fontFamily: poppinsFont.fontFamily,
                                fontSize: pxToRem(48),
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: 'normal',
                                color: palette.grey[900],
                                textAlign: 'start'
                            }
                        }>Login</Typography>
                        <Typography sx={
                            {
                                fontFamily: poppinsFont.fontFamily,
                                fontSize: pxToRem(16),
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: 'normal',
                                color: palette.grey[900],
                                textAlign: 'start'
                            }
                        }>Enter your account details</Typography>
                    </Stack>
                    <Stack marginTop={'48px'}>
                        <Input placeholder="Placeholder" inputProps={ariaLabel} />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}