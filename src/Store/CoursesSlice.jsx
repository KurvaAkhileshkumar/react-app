import { createSlice } from "@reduxjs/toolkit";

const id = ''
const coursesStatus = false;
const courseName = ''
const courseTag = ''
const courseCompletionPercentage = ''
const courseDescription = ''
const continueReadingCardData = []

const unitsData = []

const intialCoursesData = {
    coursesStatus,
    courseName,
    courseTag,
    courseCompletionPercentage,
    courseDescription,
    continueReadingCardData,
    unitsData
}

const courseSlice = createSlice({
    name: 'sliceOfCourses',
    initialState: intialCoursesData,
    reducers: {
        setCourseId(state, action) {
            state.id = action.payload
        },
        setCourseStatus(state, action) {
            state.coursesStatus = action.payload
        },
        setCourseName(state, action) {
            state.courseName = action.payload
        },
        setCourseTag(state, action) {
            state.courseTag = action.payload
        },
        setCoursesCompletionPercentage(state, action) {
            state.courseCompletionPercentage = action.payload
        },
        setCourseDescription(state, action) {
            state.courseDescription = action.payload
            console.log(state.courseDescription)
        },
        setContinueReadingCard(state, action) {
            state.continueReadingCardData = action.payload
        },
        setUnitsData(state, action) {
            state.unitsData = action.payload
        }
    }
})


export default courseSlice


