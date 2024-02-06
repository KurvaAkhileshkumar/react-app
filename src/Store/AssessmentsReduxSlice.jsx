import { createSlice } from '@reduxjs/toolkit'

const isSorting = false
const selectedSubject = 0
const assessmentsSliceData = {}
const recentAssessmentsData = []
const categories = []
const profile = {
    name: '',
    email: '',
    profilePic: ''

}
const subjects = []
const analyticsData = []
const leaderBoardData = []
const semester = 1
const intialDashBoardData = {}
const intialAsessmentsSliceData = {
    profile,
    ...assessmentsSliceData,
    coursesData: [],
    recentAssessmentsData,
    categories,
    analyticsData,
    leaderBoardData,
    isSorting,
    semester,
    intialDashBoardData,
    subjects,
    selectedSubject
}
const assessmentsSlice = createSlice({
    name: 'sliceOfAssessment',
    initialState: intialAsessmentsSliceData,
    reducers: {

        setDashBoardData(state, action) {
            state.intialDashBoardData = action.payload
            console.log(state.intialDashBoardData)
            state.coursesData = action.payload.courses
            state.analyticsData = action.payload.analytics
            state.profile.name = action.payload.name
            state.profile.email = action.payload.email
            state.profile.profilePic = action.payload.profile_picture
            state.leaderBoardData = action.payload.leaderboard
            state.subjects = action.payload.recent_assessments.subjects
        },
        isClickedForSorting(state, action) {
            state.isSorting = action.payload
        },
        setSubject(state, action) {
            state.selectedSubject = action.payload
        },
        setAssessmentSliceData(state, action) {
            state.assessmentsSliceData = action.payload
        },
        setSemester(state, action) {
            state.semester = action.payload
        }
    }
})

export default assessmentsSlice
