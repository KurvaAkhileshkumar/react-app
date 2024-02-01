import { Stack, Box } from '@mui/material'
import RecenetAssessmentsChart from './RecentAssesments';
import UserProfile from './UserProfile';
import { dashBoardStack } from './LayoutStyles';
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
import { Grid, Paper } from '@mui/material';
import AssessmentDetailsSkeleton from '../Skeletons/AssessmentDetailsSkeleton.jsx'
import AssessmentSkeleton from '../Skeletons/AssessmentSkeleton.jsx'
import CourseSkeleton from '../Skeletons/CourseSkeleton.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { assessmentsSliceActions } from '../Store/Store.jsx';


export default function Layout() {


    //Toggling the Drawer Should be handled in the store.
    const [state, setState] = useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    //Accessing the data before assignment for Skeleton Loading
    const analyticsData = useSelector((state) => state.assessmentsReducer.analyticsData)

    //Fetching and Dispatching the Data into Store
    const dispatch = useDispatch()
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
                <Box marginRight={'28px'} marginLeft={'108px'} marginTop={'28px'} height={'907px'}>
                    <Grid container columnSpacing={3.75} height={'907px'}>

                        {/* LeftColumn */}
                        <Grid item xs={8} md={8} lg={8} height={'100%'}>
                            <Box sx={{
                                padding: '0px',
                                height: '352px',
                                bgcolor: '#FFF',
                                marginBottom: '20px',
                                borderRadius: '10px',
                                border: '1px solid #F4F6F8',
                                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                            }}>
                                <RecenetAssessmentsChart />
                            </Box>
                            {analyticsData === undefined ? <AssessmentSkeleton /> :
                                <Box sx={{
                                    padding: '0px',
                                    height: '535px',
                                    bgcolor: '#FFF',
                                    borderRadius: '10px',
                                    border: '1px solid #F4F6F8',
                                    boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                                }}>
                                    <Assessments />
                                </Box>}
                        </Grid>
                        {/* RightColumn */}
                        <Grid item xs={4} md={4} lg={4} height={'100%'}>

                            <Box sx={{
                                margin: '0px',
                                padding: '0px',
                                bgcolor: '#FFF'
                            }}>
                                {/* UserProfileText */}
                                <Typography sx={userProfileText}>
                                    User profile
                                </Typography>

                                {/* UserProfileCard */}
                                <Box
                                    sx={{
                                        height: '70px',
                                        bgcolor: '#FFF',
                                        marginBottom: '20px',
                                        borderRadius: '10px',
                                        border: '1px solid #F4F6F8',
                                        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                                    }}
                                >
                                    <UserProfile />
                                </Box>
                            </Box>

                            <Box sx={{
                                margin: '0px',
                                padding: '0px',
                                bgcolor: '#FFF',
                            }}>
                                {/* CalenderText */}
                                <Typography sx={calendarText}>
                                    Calendar
                                </Typography>

                                {/* CalenderCard */}
                                <Box
                                    sx={{
                                        margin: '0px',
                                        padding: '0px',
                                        height: '236px',
                                        borderRadius: '10px',
                                        border: '1px solid #F4F6F8',
                                        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <Calendar />
                                </Box>
                            </Box>

                            {/* LeaderBoardText */}
                            {/* LeaderBoardCard */}
                            <Box sx={{
                                position: 'relative',
                                padding: '0px',
                            }}>
                                <Box display={'flex'} direction={'row'} justifyContent={'space-between'}>
                                    <Typography sx={calendarText}>
                                        LeaderBoard
                                    </Typography>
                                    <ChevronRightIcon
                                        sx={{
                                            fontSize: '24px',
                                        }}
                                        onClick={toggleDrawer('right', true)}
                                    />
                                </Box>
                                <TemporaryDrawer state={state} toggleDrawer={toggleDrawer} />

                                <Box
                                    sx={
                                        {
                                            height: '447px',
                                            bgcolor: '#FFF',
                                            borderRadius: '10px',
                                            border: '1px solid #F4F6F8',
                                            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                                        }
                                    }
                                >
                                    <LeaderBoardCard isDrawer={false} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            }

            {/* Courses Section */}
            {/* {analyticsData === undefined ? (
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
            } */}
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

