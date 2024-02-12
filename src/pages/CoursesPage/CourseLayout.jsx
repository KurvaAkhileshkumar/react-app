import { Box, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import CourseNameTag from '../../features/Courses/components/CourseNameTag';
import SliderStatus from '../../features/Courses/components/Slider';
import CourseDescription from '../../features/Courses/components/CourseDescription';
import ContinueReadingCard from '../../features/Courses/components/ContinueReadingCard'
import AccordianTopics from '../../features/Courses/components/AccordianTopics';
import { courseSliceActions } from '../../Store/Store';
import SkeletonLoader from '../../features/Courses/components/SkeletonLoader';


export default function CourseLayout() {

    const [data, setData] = useState('')
    const params = useParams();
    console.log(params)
    const fetchUrl = 'https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=' + params.id

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(fetchUrl).
            then((response) => response.json()).
            then((res) => {
                const resData = res.data
                setData(resData)
                console.log(resData)
                dispatch(courseSliceActions.setCoursesData(resData))
            })
    }, [])

    return (
        <>
            {
                data ?
                    <Box display={'flex'} flexDirection={'column'} marginTop={'35px'} sx={{
                        marginLeft: '80px',
                    }}>
                        <CourseNameTag />
                        <SliderStatus />
                        <CourseDescription />
                        <ContinueReadingCard />
                        <AccordianTopics />
                    </Box>
                    : <SkeletonLoader />}
        </>
    );
}