import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MyDiv } from '../components/myStyledComponents/styledComponents';
import { calenderSx } from './CalendarStyles';
import { poppinsFont, pxToRem } from '../theme/typography';

export default function Calendar() {
    return (
        <MyDiv >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    views={['day']}
                    sx={{
                        position: 'relative',
                        '& .MuiDateCalendar-root': {
                            width: '273px',
                            height: '100px',

                        },
                        '& .MuiDayCalendar-header': {
                            margin: '0px',
                            padding: '0px',
                            width: '273px'
                        },
                        '& .MuiPickersCalendarHeader-root': {
                            margin: '0px',
                            padding: '0px',
                            width: '273px',
                        },
                        '& .MuiPickersCalendarHeader-labelContainer': {
                            margin: '0px',
                            padding: '0px'
                        },
                        '& .MuiPickersCalendarHeader-label': {
                            margin: '0px',
                            padding: '0px',
                            color: '#0B58F5',
                            fontSize: pxToRem(14),
                            fontFamily: poppinsFont.fontFamily,
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            textAlign: 'center'

                        },
                        '& .MuiPickersArrowSwitcher-button': {
                            margin: '0px',
                            padding: '0px'
                        },
                        '& .MuiPickersArrowSwitcher-spacer': {
                            width: '0px',
                            height: '0px'
                        },
                        '& .MuiDayCalendar-header': {
                            fontSize: '0px'
                        },
                        '& .MuiDayCalendar-weekDayLabel': {
                            margin: '0px',
                            padding: '0px',
                            fontSize: pxToRem(10),
                            fontFamily: poppinsFont.fontFamily,
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal'
                        },
                        '& .MuiDayCalendar-weekContainer': {
                            margin: '0px',
                            padding: '0px',

                        },
                        '& .MuiPickersDay-root': {
                            margin: '0px',
                            padding: '0px',
                            width: '36px',
                            height: '28px',
                            color: '#212B36',
                            fontFamily: poppinsFont.fontFamily,
                            fontStyle: 'normal',
                            fontSize: pxToRem(12),
                            fontWeight: 500,
                            lineHeight: 'normal'
                        }
                    }}
                />
            </LocalizationProvider>
        </MyDiv>
    );
}
