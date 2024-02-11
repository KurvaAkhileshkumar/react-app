import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import MuiCalendar from "../../../components/common/MuiCalender";
import { poppinsFont, pxToRem } from "../../../theme/typography";
import palette from "../../../theme/palette";

export default function Calendar() {
    return (
        <>
            <Box sx={{
                margin: '0px',
                padding: '0px',
                bgcolor: '#FFF',
            }}>
                {/* CalenderText */}
                <Typography sx={{
                    width: '100%',
                    color: palette.grey[800],
                    fontFamily: poppinsFont.fontFamily,
                    fontSize: pxToRem(20),
                    fontStyle: 'normal',
                    lineHeight: pxToRem(28),
                    textAlign: 'start',
                    marginBottom: '10px',
                }}>
                    Calendar
                </Typography>

                {/* CalenderCard */}
                <Box
                    sx={{
                        margin: '0px',
                        padding: '0px',
                        height: '236px',
                        borderRadius: '10px',
                        border: '1px solid #F4F6F8',
                        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                        marginBottom: '20px',
                    }}
                >
                    <MuiCalendar />
                </Box>
            </Box>

        </>
    );
}