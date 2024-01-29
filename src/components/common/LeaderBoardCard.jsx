import React from 'react'
import CustomCard from './CustomCard'
import { Skeleton, Stack, Typography } from '@mui/material'
import LeaderRanking from './LeaderRanking'

const LeaderBoardCard = ({ data, width = '100%', height = '100%', isDrawer }) => {

    // console.log(data, '--> LeaderBoardCard')

    return (
        <CustomCard width={width} height={height}>
            <Stack gap={'16px'}>
                {/* <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                    <img src={crownSvg} width={20} height={20} alt='crownSvg'></img>
                    <Typography component={'p'} sx={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: '16px',
                        color: 'grey.900'
                    }}>Leader Board</Typography>
                </Stack> */}
                {data ? <Stack
                    gap={'11px'}>
                    {data?.map((item, index) => {
                        const noOfItemInTheLeaderBoard = isDrawer ? data.length : 6
                        if (index < noOfItemInTheLeaderBoard) {
                            return <LeaderRanking key={index + 1} data={item} value={item.rank} index={index + 1} />
                        }
                    }
                    )}
                </Stack> :
                    <LeaderPlaceHolder />
                }

            </Stack>
        </CustomCard>
    )
}

export default LeaderBoardCard


const LeaderPlaceHolder = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
        </Stack>
    )
}