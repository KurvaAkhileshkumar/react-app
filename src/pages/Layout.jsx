import { MyDiv } from '../components/myStyledComponents/styledComponents'
import Stack from '@mui/material/Stack'
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
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import DashBoard from './DashBoard';
import Assessments from './Assessments';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TemporaryDrawer from './Drawer';
import Courses from './courses.jsx';
import { poppinsFont, pxToRem } from '../theme/typography.js';
import { useRef } from 'react';

import AssessmentDetailsSkeleton from '../Skeletons/AssessmentDetailsSkeleton.jsx'
import AssessmentSkeleton from '../Skeletons/AssessmentSkeleton.jsx'
import CourseSkeleton from '../Skeletons/CourseSkeleton.jsx'
import LeaderBoardSkeleton from '../Skeletons/LeaderBoardSkeleton.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { assessmentsSliceActions } from '../Store/Store.jsx';




export default function Layout() {

    const [recnetAssessmentsData, setRecentAssessmentsData] = useState([])
    const [categoriesData, setCategoriesData] = useState([])
    const [dashBoardData, setDashBoardData] = useState([])
    const [leaderBoardData, setLeaderBoardData] = useState([])
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [state, setState] = useState({
        right: false,
    });
    const [coursesData, setCoursesData] = useState([])
    const dispatch = useDispatch()
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const profilePicLink = useSelector((state) => state.assessmentsReducer.profilePicLink)
    useEffect(() => {
        fetch('https://stagingstudentpython.edwisely.com/reactProject/dashboardData').then((response) => {
            return response.json()
        }).then((resData) => {
            const data = []
            const categories = []
            resData.recent_assessments.analysis.map((item) => {
                data.push(item.percentage)
                categories.push(item.name)
            })
            setLeaderBoardData(resData.leaderboard)
            setDashBoardData(resData.analytics)
            setCategoriesData(categories)
            setRecentAssessmentsData(data)
            setEmail(resData.email)
            setName(resData.name)
            setCoursesData(resData.courses)
            const profilePicture = resData.profile_picture
            dispatch(assessmentsSliceActions.setProfile({ profilePicture }))
        })
    }, [])

    return (
        <>

            {/* DashBoardLayout */}
            {dashBoardData == undefined ? <AssessmentDetailsSkeleton /> :
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
                        <DashBoard data={dashBoardData} />
                    </Stack></Box>}

            {/* MiddleLayout */}
            {
                <Stack direction={'row'} sx={parentStack}>

                    {/* LeftColumn */}
                    <Stack direction={'column'} sx={leftStack} gap={'21px'}>
                        <Box sx={leftItem1}>
                            <RecenetAssessmentsChart
                                data={recnetAssessmentsData}
                                categories={categoriesData}
                            />
                        </Box>
                        {dashBoardData == undefined ? <AssessmentSkeleton /> :
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
                                <UserProfile name={name} email={email} />
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
                            <TemporaryDrawer state={state} toggleDrawer={toggleDrawer} data={leaderBoardData} />
                        </Stack>
                        {/* LeaderBoardCard */}
                        <Box sx={rightItem3}>
                            <LeaderBoardCard data={leaderBoardData} isDrawer={false} />
                        </Box>
                    </Stack>
                </Stack >
            }

            {/* Courses Section */}
            {dashBoardData === undefined ? (
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
                            <Courses coursesData={coursesData} />
                        </Stack>
                    </Stack>
                </>
            )
            }
        </>
    )
}


const SkeletonLayout = () => {
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

