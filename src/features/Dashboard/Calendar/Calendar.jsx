import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import MuiCalendar from "../../../components/common/MuiCalender";
import { pxToRem } from "../../../theme/typography";

export default function Calendar() {
    return (
        <>
            <Box sx={{
                margin: '0px',
                padding: '0px',
                bgcolor: (theme) => theme.palette.primary[0],
            }}>
                {/* CalenderText */}
                <Typography
                    variant="h5"
                    color={(theme) => theme.palette.grey[800]}
                    sx={{
                        width: '100%',
                        fontStyle: 'normal',
                        lineHeight: pxToRem(28),
                        textAlign: 'start',
                        marginBottom: '12px',
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
                        marginBottom: '10px',
                    }}
                >
                    <MuiCalendar />
                </Box>
            </Box>

        </>
    );
}