import { createSlice } from '@reduxjs/toolkit'

const isSorting = false
const assessmentsSliceData = {}
const recentAssessmentsData = []
const categories = []
const profile = {
    name: '',
    email: '',
    profilePic: ''

}
const analyticsData = []
const leaderBoardData = []
const semester = 1

const intialAsessmentsSliceData = {
    profile,
    ...assessmentsSliceData,
    coursesData: [],
    recentAssessmentsData,
    categories,
    analyticsData,
    leaderBoardData,
    isSorting,
    semester
}

console.log(intialAsessmentsSliceData)
const assessmentsSlice = createSlice({
    name: 'sliceOfAssessment',
    initialState: intialAsessmentsSliceData,
    reducers: {

        isClickedForSorting(state, action) {
            state.isSorting = action.payload
        },
        setAssessmentSliceData(state, action) {
            state.assessmentsSliceData = action.payload
            console.log(state.assessmentsSliceData)
        },
        setCoursesData(state, action) {
            state.coursesData = action.payload.coursesData
        },
        setRecentAssessmentsData(state, action) {
            state.recentAssessmentsData = action.payload.data
        },
        setCategoriesData(state, action) {
            state.categories = action.payload.categories
        },
        setAnalyticsData(state, action) {
            state.analytics = action.payload.analyticsData
        },
        setLeaderBoardData(state, action) {
            state.leaderBoardData = action.payload.leaderBoardData
        },
        setProfile(state, action) {
            state.profile.name = action.payload.name
            state.profile.email = action.payload.email
            state.profile.profilePic = action.payload.profilePic
        },
        setSemester(state, action) {
            state.semester = action.payload
        }
    }
})

export default assessmentsSlice
