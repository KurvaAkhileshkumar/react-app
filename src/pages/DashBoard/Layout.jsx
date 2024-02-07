import { Box, Typography, Grid } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Left Children imports
import RecenetAssessmentsChart from '../../features/Dashboard/RecentAssessments/RecentAssesments.jsx';
import Assessments from '../../features/Dashboard/Assessments/Assessments.jsx';

//RightChildren imports
import UserProfile from '../../features/Dashboard/UserProfile/UserProfile.jsx';
import Calendar from '../../features/Dashboard/Calendar/Calendar.jsx';
import LeaderBoard from '../../features/Dashboard/LeaderBoard/LeaderBoard.jsx';





import { assessmentsSliceActions } from '../../Store/Store.jsx';

import Analytics from '../../features/Dashboard/Analytics/Analytics.jsx'

import { yourCoursesText } from '../DummyStyles/UserProfileStyles.js';
import Courses from '../../features/Courses/Courses.jsx'
import { courses } from '../DummyStyles/LayoutStyles.js';

export default function Layout() {

    //Fetching and Dispatching the Data into Store
    const dispatch = useDispatch()
    useEffect(() => {

        fetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData').
            then((response) => response.json()).
            then((resData) => {
                //Dispatching the DashBoardData
                dispatch(assessmentsSliceActions.setDashBoardData(resData))
            })

    }, [])



    return (
        <>

            {/* MiddleLayout */}
            {
                <Box marginRight={'28px'} marginLeft={'108px'} marginTop={'28px'}>

                    {/* Parend Container */}
                    <Grid container columnSpacing={3.75}>

                        <Grid item xs={12}>
                            <Analytics />
                        </Grid>
                        {/* LeftColumn */}
                        <Grid item xs={8} md={8} lg={8}>

                            {/* Child1 */}
                            <RecenetAssessmentsChart />

                            {/* Child2*/}
                            <Assessments />

                        </Grid>


                        {/* RightColumn */}
                        <Grid item xs={4} md={4} lg={4}>

                            {/* RightChild-1 */}
                            <UserProfile />
                            {/* RightChild-2 */}
                            <Calendar />
                            {/* RightChild-3 */}
                            <LeaderBoard />
                        </Grid>
                    </Grid>
                </Box>

            }

            {/* Courses Section */}
            <>
                <Box display='flex' flexDirection={'column'} gap={'15px'}>
                    <Typography sx={yourCoursesText} marginLeft={'100px'}>
                        Your courses
                    </Typography>
                    <Box display={'flex'} flexDirection={'row'}
                        gap={'22px'}
                        sx={courses}>
                        <Courses />
                    </Box>
                </Box>
            </>
        </>
    )
}


// const SkeletonLayout = () => {
//     return (
//         <Stack spacing={1}>
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//             <Skeleton variant="text" sx={{ fontSize: '1rem', background: theme => theme.palette.grey[200] }} />
//         </Stack>
//     )
// }

