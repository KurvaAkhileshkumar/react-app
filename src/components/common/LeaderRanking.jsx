import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import typography, { poppinsFont, pxToRem } from '../../theme/typography'
import palette from '../../theme/palette'
// import StarSvg from '../../assets/LeaderBoardProfile.jpeg'


const LeaderRanking = ({ data, index, value }) => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}
      sx={{
        margin: '0px',
        padding: '0px',
        width: '298px',
        height: '65px',
        borderRadius: () => index == 1 ? '5px' : '0px',
        bgcolor: () => index == 1 ? palette.grey[100] : '#FFF',
      }}
    >
      <Stack direction={'row'} alignItems={'center'} gap={'27px'}>
        {/* <Typography component={'p'} sx={{
          fontFamily: 'Poppins-Medium',
          fontSize: '14px',
          color: (theme) => theme.palette.grey[900]
        }}>{index}</Typography> */}
        <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
          <Avatar alt="Avatar" sx={{ width: 30, height: 30 }} src={data.profile_pic} />
          <Typography component={'p'} sx={{
            fontFamily: poppinsFont.fontFamily,
            fontSize: pxToRem(16),
            fontWeight: typography.fontWeightMedium,
            color: (theme) => theme.palette.grey[900]
          }}>{data.name}</Typography>
        </Stack>
      </Stack>

      {/* ratings */}

      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Stack direction={'row'} alignItems={'center'} gap={0}>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => theme.palette.warning.main
              }
            }
          }}>
            {/* <StarSvg /> */}
          </Box>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => value >= 80 ? theme.palette.warning.main : theme.palette.warning[300]
              }
            }
          }}>
            {/* <StarSvg /> */}
          </Box>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => (value >= 90 && value <= 100) ? theme.palette.warning.main : theme.palette.warning[300]
              }
            }
          }}>
            {/* <StarSvg /> */}
          </Box>
        </Stack>
        <Typography component={'p'} sx={{
          width: '26px',
          height: '26px',
          paddingLeft: '6px',
          fontFamily: poppinsFont.fontFamily,
          fontSize: pxToRem(16),
          lineHeight: '24px',
          fontWeight: typography.fontWeightMedium,
          color: () => value < 4 ? palette.success.main : palette.primary.main,
          bgcolor: () => value < 4 ? palette.success[100] : palette.primary[100],
          borderRadius: '50%'
        }}>{value}</Typography>
      </Stack>

    </Stack>
  )
}

export default LeaderRanking