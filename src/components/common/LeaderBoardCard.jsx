import React from 'react'
import CustomCard from './CustomCard'
import { Skeleton, Stack, Typography } from '@mui/material'
import LeaderRanking from './LeaderRanking'

const LeaderBoardCard = ({ data, width = '100%', height = '100%', isDrawer }) => {
    return (
        <CustomCard width={width} height={height}>
            {data ? <Stack
                gap={'10px'}>
                {data?.map((item, index) => {
                    const noOfItemsWhenDrawerClosed = 6
                    const noOfItemInTheLeaderBoard = isDrawer ? data.length : noOfItemsWhenDrawerClosed
                    if (index < noOfItemInTheLeaderBoard) {
                        return <LeaderRanking isDrawer={isDrawer} key={index + 1} data={item} percentage={item.percentage} value={item.rank} index={index + 1} />
                    }
                }
                )}
            </Stack> :
                <LeaderPlaceHolder />
            }

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