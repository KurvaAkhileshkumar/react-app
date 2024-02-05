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


export default function CourseLayout() {
    const params = useParams();
    const fetchUrl = 'https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=' + params.id


    const dispatch = useDispatch()

    useEffect(() => {
        fetch(fetchUrl).
            then((response) => response.json()).
            then((res) => {
                const resData = res.data
                dispatch(courseSliceActions.setCourseId(params.id))
                dispatch(courseSliceActions.setCourseName(resData.name))
                dispatch(courseSliceActions.setCourseTag(resData.tag))
                dispatch(courseSliceActions.setCoursesCompletionPercentage(resData.percentage))
                dispatch(courseSliceActions.setContinueReadingCard(resData.continue_reading))
                dispatch(courseSliceActions.setUnitsData(resData.units))
                dispatch(courseSliceActions.setCourseDescription(resData.description))
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