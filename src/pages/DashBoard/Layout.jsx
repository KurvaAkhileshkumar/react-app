import { Stack, Box, Typography, Grid } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Left Children imports
import RecenetAssessmentsChart from '../../features/RecentAssessments/RecentAssesments.jsx';
import Assessments from '../../features/Assessments/Assessments.jsx';

//RightChildren imports
import UserProfile from '../../features/UserProfile/UserProfile.jsx';
import Calendar from '../../features/Calendar/Calendar.jsx';
import LeaderBoard from '../../features/LeaderBoard/LeaderBoard.jsx';


//These 3 imports should be removed after sperating Dashboard from the layout
import { poppinsFont, pxToRem } from '../../theme/typography.js';
import { assessmentsSliceActions } from '../../Store/Store.jsx';
import { dashBoardStack } from '../DummyStyles/LayoutStyles.js';
import Analytics from '../../features/Analytics/Analytics.jsx';

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
                const data = []
                const categories = []
                resData.recent_assessments.subjects[0].tests.forEach((item) => {
                    data.push(item.percentage)
                    categories.push(item.name)
                })

                //Dispatching the Profile(name email pic) into Store
                const email = resData.email
                const name = resData.name
                const profilePic = resData.profile_picture
                dispatch(assessmentsSliceActions.setProfile({ email, name, profilePic }))

                //Dispatching the Data of 5 Cards of Dashboard into Store.
                const analyticsData = resData.analytics
                dispatch(assessmentsSliceActions.setAnalyticsData({ analyticsData }))


                //Dispatching the Data Recent Assessments into Store.
                dispatch(assessmentsSliceActions.setRecentAssessmentsData({ data }))
                dispatch(assessmentsSliceActions.setCategoriesData({ categories }))


                //Dispatching the Data of Leader Board into Store.
                const leaderBoardData = resData.leaderboard
                dispatch(assessmentsSliceActions.setLeaderBoardData({ leaderBoardData }))


                //Dispatching the Courses Data into Store
                const coursesData = resData.courses
                dispatch(assessmentsSliceActions.setCoursesData({ coursesData }))

            })

    }, [])



    return (
        <>

            {/* DashBoardLayout */}
            <Box>
                <Typography
                    sx={{
                        fontFamily: poppinsFont.fontFamily,
                        fontSize: pxToRem(20),
                        fontWeight: '600',
                        lineHeight: '28px',
                        textAlign: 'start',
                        marginLeft: '98px',
                        marginTop: '12px'
                    }}
                >Dashboard</Typography>
                <Box display={'flex'} flexDirection={'row'} sx={dashBoardStack} flexWrap={'wrap'}>
                    <Analytics />
                </Box>
            </Box>
            {/* MiddleLayout */}
            {
                <Box marginRight={'28px'} marginLeft={'108px'} marginTop={'28px'} height={'907px'}>

                    {/* Parend Container */}
                    <Grid container columnSpacing={3.75} height={'907px'}>

                        {/* LeftColumn */}
                        <Grid item xs={8} md={7} lg={8} height={'100%'}>

                            {/* Child1 */}
                            <RecenetAssessmentsChart />

                            {/* Child2*/}
                            <Assessments />

                        </Grid>


                        {/* RightColumn */}
                        <Grid item xs={4} md={5} lg={4} height={'100%'}>

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

