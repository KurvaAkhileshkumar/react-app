import { createSlice } from "@reduxjs/toolkit";


const profile = {
    name: '',
    email: '',
    profilePic: ''

}
const id = ''
const coursesStatus = false;
const courseName = ''
const courseTag = ''
const courseCompletionPercentage = 0
const courseDescription = ''
const continueReadingCardData = []

const unitsData = []
const pdf = {
    name: '',
    url: ''
}

const intialCoursesData = {
    courseName,
    courseTag,
    courseCompletionPercentage,
    courseDescription,
    continueReadingCardData,
    unitsData,
    pdf
}

const courseSlice = createSlice({
    name: 'sliceOfCourses',
    initialState: intialCoursesData,
    reducers: {
        setCoursesData(state, action) {
            state.id = action.payload.id
            state.courseCompletionPercentage = action.payload.percentage
            state.courseName = action.payload.name
            state.courseTag = action.payload.tag
            state.courseDescription = action.payload.description
            state.continueReadingCardData = action.payload.continue_reading
            state.unitsData = action.payload.units
        },
        setPdf(state, action) {
            state.pdf.name = action.payload.name
            state.pdf.url = action.payload.url
        }
    }
})


export default courseSlice


