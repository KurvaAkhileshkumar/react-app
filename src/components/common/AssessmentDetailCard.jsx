import React from 'react'
import { Box, Stack, Typography, Icon } from '@mui/material'
import CountUp from 'react-countup'
import typography, { poppinsFont, pxToRem } from '../../theme/typography'
import assessmentLogo from '../../assets/assess.svg'
import assignmentLogo from '../../assets/assisgnment.svg'
import attendanceLogo from '../../assets/attendance.svg'
import avgPerLogo from '../../assets/avgper.svg'
import codignLogo from '../../assets/coding.svg'

const icons = [attendanceLogo, avgPerLogo, assessmentLogo, assignmentLogo, codignLogo]
const colors = ["#E7EEFE", "#E6F2FD", "#FFF8EC", "#FEECEB", "#EDFAEE"];

const AssessmentDetailCard = ({
  icon,
  iconSize = 'medium',
  title,
  contentMagnitude,
  contentType,
  showCountingAnimation,
}) => {
  return (
    <Box
      sx={{
        height: {
          sm: '80px', // Height for small screens
          md: '70px', // Height for medium screens
          lg: '60px', // Height for large screens
          xl: '60px',
        },
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '60px',
        minWidth: '100px',
        width: '100%',
        maxWidth: '200px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        padding: '8px 8px 8px 8px',
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        gap='0 10px'
        alignItems='center'
        sx={{ width: '100%', height: '100%' }}
      >
        <Box
          display={'flex'}
          flexDirection='row'
          alignItems='center'
          gap={'15px'}
          sx={{
            width: '44px',
            height: '44px',
            background: `${colors[icon]}`,
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          <img src={icons[icon]} alt="" />
        </Box>

        <Box display={'flex'} flexDirection='column' justifyContent='center'>
          <Typography variant='caption2'
            sx={{
              fontFamily: poppinsFont.fontFamily,
              fontSize: pxToRem(14),
              fontWeight: typography.fontWeightMedium,
              textAlign: 'start'
            }}
          >{title}</Typography>
          <Typography variant='h5' sx={{ textAlign: 'start' }}>
            {showCountingAnimation ? (
              <CountUp
                start={0}
                end={contentMagnitude}
                duration={3}
                suffix={
                  contentType === 'percent'
                    ? '%'
                    : contentType === 'time'
                      ? ' Min'
                      : contentType === 'count'
                        ? ''
                        : ''
                }
              />
            ) : contentType === 'percent' ? (
              `${contentMagnitude}%`
            ) : contentType === 'time' ? (
              `${contentMagnitude} Min`
            ) : (
              contentMagnitude
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AssessmentDetailCard
