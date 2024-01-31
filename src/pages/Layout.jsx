import { Stack, Box } from '@mui/material'
import RecenetAssessmentsChart from './RecentAssesments';
import UserProfile from './UserProfile';
import {
    parentStack, dashBoardStack,
    leftStack, leftItem1, leftItem2,
    rightStack, rightItem1, rightItem2, rightItem3,
    courses,
    rightItemStack1
} from './LayoutStyles';
import { userProfileText, calendarText, yourCoursesText } from "./UserProfileStyles";
import Typography from '@mui/material/Typography';
import Calendar from './Calendar';
import LeaderBoardCard from '../components/common/LeaderBoardCard';
import { useEffect, useState } from 'react';
import DashBoard from './DashBoard';
import Assessments from './Assessments';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TemporaryDrawer from './Drawer';
import Courses from './courses.jsx';
import { poppinsFont, pxToRem } from '../theme/typography.js';

import AssessmentDetailsSkeleton from '../Skeletons/AssessmentDetailsSkeleton.jsx'
import AssessmentSkeleton from '../Skeletons/AssessmentSkeleton.jsx'
import CourseSkeleton from '../Skeletons/CourseSkeleton.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { assessmentsSliceActions } from '../Store/Store.jsx';




export default function Layout() {


    const [state, setState] = useState({
        right: false,
    });
    const dispatch = useDispatch()
    const analyticsData = useSelector((state) => state.assessmentsReducer.analyticsData)
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    useEffect(() => {

        fetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData').
            then((response) => response.json()).
            then((resData) => {

                const data = []
                const categories = []



                resData.recent_assessments.analysis.forEach((item) => {
                    data.push(item.percentage)
                    categories.push(item.name)
                })


                //Dispatching the Data of 5 Cards of Dashboard into Store.
                const analyticsData = resData.analytics
                dispatch(assessmentsSliceActions.setAnalyticsData({ analyticsData }))

                //Dispatching the Data Recent Assessments into Store.
                dispatch(assessmentsSliceActions.setRecentAssessmentsData({ data }))
                dispatch(assessmentsSliceActions.setCategoriesData({ categories }))

                //Dispatching the Data of Leader Board into Store.
                const leaderBoardData = resData.leaderboard
                dispatch(assessmentsSliceActions.setLeaderBoardData({ leaderBoardData }))

                //Dispatching the mail into Store
                const email = resData.email
                dispatch(assessmentsSliceActions.setEmail({ email }))

                //Dispatching the name into Store
                const name = resData.name
                dispatch(assessmentsSliceActions.setCoursesData({ name }))

                //Dispatching the Courses Data into Store
                const coursesData = resData.courses
                dispatch(assessmentsSliceActions.setCoursesData({ coursesData }))

                //Dispatching the Profile Pic into Store
                const profilePicture = resData.profile_picture
                dispatch(assessmentsSliceActions.setProfile({ profilePicture }))

                //Dispatching the Profile(name email pic) into Store
                dispatch(assessmentsSliceActions.setProfile({ email, name, profilePicture }))

            })

    }, [])

    return (
        <>

            {/* DashBoardLayout */}
            {analyticsData === undefined ? <AssessmentDetailsSkeleton /> :
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
                    <Stack direction={'row'} sx={dashBoardStack}>
                        <DashBoard />
                    </Stack></Box>}

            {/* MiddleLayout */}
            {
                <Stack direction={'row'} sx={parentStack}>

                    {/* LeftColumn */}
                    <Stack direction={'column'} sx={leftStack} gap={'21px'}>
                        <Box sx={leftItem1}>
                            <RecenetAssessmentsChart />
                        </Box>
                        {analyticsData === undefined ? <AssessmentSkeleton /> :
                            <Box sx={leftItem2}>
                                <Assessments />
                            </Box>}
                    </Stack>

                    {/* RightColumn */}
                    <Stack direction={'column'} sx={rightStack}>

                        <Stack sx={rightItemStack1}>
                            {/* UserProfileText */}
                            <Typography sx={userProfileText}>
                                User profile
                            </Typography>

                            {/* UserProfileCard */}
                            <Box sx={rightItem1}>
                                <UserProfile />
                            </Box>
                        </Stack>

                        {/* CalenderText */}
                        <Typography sx={calendarText}>
                            Calendar
                        </Typography>

                        {/* CalenderCard */}
                        <Box sx={rightItem2}>
                            <Calendar />
                        </Box>

                        {/* LeaderBoardText */}
                        <Stack direction={'row'} width={'319px'} position={'relative'}>
                            <Typography sx={calendarText}>
                                LeaderBoard
                            </Typography>
                            <ChevronRightIcon
                                sx={{
                                    position: 'absolute',
                                    right: '20px',
                                    cursor: 'pointer',
                                    fontSize: '24px',
                                    marginTop: '4px',

                                }}
                                onClick={toggleDrawer('right', true)}
                            />
                            <TemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
                        </Stack>
                        {/* LeaderBoardCard */}
                        <Box sx={rightItem3}>
                            <LeaderBoardCard isDrawer={false} />
                        </Box>
                    </Stack>
                </Stack >
            }

            {/* Courses Section */}
            {analyticsData === undefined ? (
                <CourseSkeleton />
            ) : (
                <>
                    <Stack direction={'column'} gap={'15px'}>
                        <Typography sx={yourCoursesText} marginLeft={'100px'}>
                            Your courses
                        </Typography>
                        <Stack height={'281px'} direction={'row'}
                            gap={'22px'}
                            sx={courses}>
                            <Courses />
                        </Stack>
                    </Stack>
                </>
            )
            }
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

