import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import typography, { poppinsFont, pxToRem } from '../../theme/typography'
import palette from '../../theme/palette'
// import StarSvg from '../../assets/LeaderBoardProfile.jpeg'

const LeaderRanking = ({ data, index, value, percentage }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        margin: '0px',
        padding: '0px',
        width: '298px',
        height: '65px',
        borderRadius: () => (index == 1 ? '5px' : '0px'),
        bgcolor: () => (index == 1 ? palette.grey[100] : '#FFF'),
      }}
    >
      <Stack position={'relative'} direction={'row'} alignItems={'center'} gap={'15px'}>
        <Avatar
          alt="Avatar"
          sx={{
            width: '50px',
            height: '50px',
            margin: '8px 0px 7px 8px',
            borderRadius: '50px',
          }}
          src={data.profile_pic}
        />
        <Stack direction={'column'} gap={'10px'}>
          <Typography
            component={'p'}
            sx={{
              width: '180px',
              height: '11px',
              textAlign: 'start',
              fontFamily: poppinsFont.fontFamily,
              fontSize: pxToRem(16),
              fontWeight: typography.fontWeightMedium,
              color: (theme) => theme.palette.grey[900],
            }}
          >
            {data.name}
          </Typography>
          <Typography
            sx={{
              margin: '0px',
              padding: '0px',
              textAlign: 'start',
              fontFamily: poppinsFont.fontFamily,
              fontSize: pxToRem(12),
              fontWeight: typography.fontWeightMedium,
              color: (theme) => theme.palette.grey[800],
            }}
          >
            Avg: {percentage}%
          </Typography>
        </Stack>

        <Typography
          component={'p'}
          sx={{
            width: '26px',
            height: '26px',
            margin: '20px 20px 20px 0px',
            paddingLeft: () => value < 10 ? '8px' : '6px',
            fontFamily: poppinsFont.fontFamily,
            fontSize: pxToRem(16),
            lineHeight: '24px',
            fontWeight: typography.fontWeightMedium,
            color: () =>
              value < 4 ? palette.success.main : palette.primary.main,
            bgcolor: () =>
              value < 4 ? palette.success[100] : palette.primary[100],
            borderRadius: '27px',
          }}
        >
          {value}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default LeaderRanking
