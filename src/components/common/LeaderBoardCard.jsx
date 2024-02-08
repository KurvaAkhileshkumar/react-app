import React from 'react'
import CustomCard from './CustomCard'
import { Skeleton } from '@mui/material'
import LeaderRanking from './LeaderRanking'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

const LeaderBoardCard = ({ width = '100%', height = '100%', isDrawer }) => {
    const leaderBoardData = useSelector((state) => state.assessmentsReducer.leaderBoardData)
    return (
        <CustomCard width={width} height={height}>
            <Box>
                {leaderBoardData?.map((item, index) => {
                    const noOfItemsWhenDrawerClosed = 6
                    const noOfItemInTheLeaderBoard = isDrawer ? leaderBoardData.length : noOfItemsWhenDrawerClosed
                    if (index < noOfItemInTheLeaderBoard) {
                        return <LeaderRanking key={index + 1} data={item} percentage={item.percentage} value={item.rank} index={index + 1} />
                    }
                }
                )}
            </Box>
        </CustomCard>
    )
}

export default LeaderBoardCard
