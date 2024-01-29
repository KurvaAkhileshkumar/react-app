import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MyDiv } from '../components/myStyledComponents/styledComponents';
import { calenderSx } from './CalendarStyles';

export default function Calendar() {
    return (
        <MyDiv >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    sx={calenderSx}
                />
            </LocalizationProvider>
        </MyDiv>
    );
}
