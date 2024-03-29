import React from 'react'
import {
  TableRow,
  TableCell,
  Typography,
  Box,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { poppinsFont, pxToRem } from '../../theme/typography';

const dataStyling = {
  textAlign: 'start',
  fontFamily: poppinsFont.fontFamily,
  fontSize: {
    md: pxToRem(10),
    lg: pxToRem(14)
  },
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: 'normal',
  textTransform: 'capitalize',
}

const tableCellStyling = {
  padding: '0px',
  margin: '0px',
  height: '50px',
  minWidth: {
    md: '60px',
    lg: '100px'
  }
}
function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  if (remainingSeconds > 0)
    return `${minutes} minutes ${remainingSeconds} seconds`
  return `${minutes} minutes`
}

function getInternetQuality(speed) {
  if (speed >= 1 && speed <= 3) return 'Poor'
  else if (speed >= 4 && speed <= 7) return 'Average'
  else return 'Excellent'
}

const MuiCustomStudentTableRow = ({ stu }) => {
  const theme = useTheme()

  return (
    <TableRow
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '0px',
        padding: '0px',
        background:
          stu.submission_type === 0
            ? theme.palette.error[200]
            : '',
        '&:hover': {
          background:
            stu.submission_type === 0
              ? theme.palette.error[300]
              : theme.palette.grey[100], // Set your desired background color
        },
      }}
    >

      {/* Subject name cell */}
      <TableCell
        scope='row'
        sx={
          {
            ...tableCellStyling,
            border: 'none',
            borderRadius: '6px 0 0 6px',
          }

        }
      >
        <Typography variant='body1' sx={{ ...dataStyling, color: theme.palette.grey[900] }}>
          {stu.subject}
        </Typography>


        {/* Time Spent Cell */}
      </TableCell>
      {(
        <TableCell scope='row' sx={{ ...tableCellStyling, border: 'none' }}>
          <Typography variant='body1' sx={{ ...dataStyling, color: theme.palette.grey[900], }}>
            {stu.total_timespent ? stu.total_timespent + ' Mins' : '--'}
          </Typography>
        </TableCell>
      )}

      {/* Submisson type cell */}
      <TableCell scope='row' sx={{ ...tableCellStyling, border: 'none' }}>
        <Typography
          variant='body1'
          sx={{
            ...dataStyling,
            color:
              stu.submission_type === 3
                ? theme.palette.success[700]
                : stu.submission_type === 1
                  ? theme.palette.info[700]
                  : stu.submission_type === 4
                    ? theme.palette.error[700]
                    : stu.submission_type === 2
                      ? theme.palette.warning[700]
                      : theme.palette.error[800],
          }}
        >
          {stu.submission_type === 1
            ? 'Timeout'
            : stu.submission_type === 2
              ? 'Interrupted'
              : stu.submission_type === 3
                ? 'On Submit'
                : 'Tabswitch'}
        </Typography>
      </TableCell>

      {/* Internet quality Cell */}
      <TableCell scope='row' sx={{ ...tableCellStyling, border: 'none' }}>
        <Typography variant='body1' sx={{ ...dataStyling, color: theme.palette.grey[900] }}>
          {getInternetQuality(stu.internet_speed)}
        </Typography>
      </TableCell>

      {/* Percentage cell */}
      <TableCell scope='row' sx={{ ...tableCellStyling, border: 'none' }}>
        <Typography variant='body1' sx={{ ...dataStyling, color: theme.palette.grey[900], textAlign: 'center', }}>
          {stu.percentage_scored ? stu.percentage_scored + ' %' : '--'}
        </Typography>
      </TableCell>

      {/* Attempeted ceLL */}
      <TableCell
        scope='row'
        sx={{ ...tableCellStyling, border: 'none', borderRadius: '0 6px 6px 0' }}
      >
        <Typography variant='body3' sx={{ ...dataStyling, color: theme.palette.grey[900], marginLeft: '15px' }}>
          {stu.attempted ? 'Attempted' : 'Unattempted'}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

export default MuiCustomStudentTableRow
