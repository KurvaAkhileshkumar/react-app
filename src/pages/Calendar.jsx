import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import { poppinsFont, pxToRem } from '../theme/typography';

export default function Calendar() {
    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    views={['day']}
                    sx={{
                        // '&.MuiDateCalendar-root': {
                        //     width: '100%',
                        //     height: '100%',
                        //     marginLeft: 0,

                        // },
                        '&.MuiDayCalendar-header': {
                            margin: '0px',
                            padding: '0px',
                            width: '100%',
                            fontSize: '0px'
                        },
                        '& .MuiPickersCalendarHeader-root': {
                            margin: '0px',
                            padding: '0px',
                            width: '100%',
                            marginTop: '2px',
                        },
                        '& .MuiPickersCalendarHeader-labelContainer': {
                            marginLeft: '20px',
                            padding: '0px',
                            gap: '20px'
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
                        },
                        '& .MuiDateCalendar-root': {
                            margin: '0px',
                            padding: '0px',
                        }

                    }}
                />
            </LocalizationProvider>
        </Box>
    );
}
