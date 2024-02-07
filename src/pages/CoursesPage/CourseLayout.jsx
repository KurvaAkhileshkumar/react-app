import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import CourseNameTag from '../../features/Courses/CourseNameTag';
import SliderStatus from '../../features/Courses/Slider';
import CourseDescription from '../../features/Courses/CourseDescription';
import ContinueReadingCard from '../../features/Courses/ContinueReadingCard'
import AccordianTopics from '../../features/Courses/AccordianTopics';
import { courseSliceActions } from '../../Store/Store';
import { useSelector } from 'react-redux';


export default function CourseLayout() {
    const params = useParams();
    const fetchUrl = 'https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=' + params.id

    console.log(fetchUrl)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(fetchUrl).
            then((response) => response.json()).
            then((res) => {
                const resData = res.data
                console.log(resData)
                dispatch(courseSliceActions.setCoursesData(resData))
            })
    }, [])

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} marginTop={'35px'} sx={{
                marginLeft: '80px',
            }}>
                <CourseNameTag />
                <SliderStatus />
                <CourseDescription />
                <ContinueReadingCard />
                <AccordianTopics />
            </Box>
        </>
    );
}