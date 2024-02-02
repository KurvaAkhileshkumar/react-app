import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import MuiCalendar from "../../components/common/MuiCalender";
import { calendarText } from "../../pages/DummyStyles/UserProfileStyles";
export default function Calendar() {
    return (
        <>
            <Box sx={{
                margin: '0px',
                padding: '0px',
                bgcolor: '#FFF',
            }}>
                {/* CalenderText */}
                <Typography sx={calendarText}>
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