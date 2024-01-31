import { createSlice } from '@reduxjs/toolkit'

const assessmentsSliceData = {}
const recentAssessmentsData = []
const categories = []
const name = ''
const email = ''
const profilePicLink = ''
const analyticsData = []
const leaderBoardData = []
const intialAsessmentsSliceData = { ...assessmentsSliceData, ass: '', profilePicLink, coursesData: [], name, email, recentAssessmentsData, categories, analyticsData, leaderBoardData }
console.log(intialAsessmentsSliceData)
const assessmentsSlice = createSlice({
    name: 'sliceOfAssessment',
    initialState: intialAsessmentsSliceData,
    reducers: {
        setAssessmentSliceData(state, action) {
            state.assessmentsSliceData = action.payload
        },
        isClickedForSorting(state, action) {
            if (state.ass === '')
                state.ass = action.payload
            else if (state.ass === 'ass')
                state.ass = ' '
        },
        setProfile(state, action) {
            state.profilePicLink = action.payload.profilePicture
        },
        setCoursesData(state, action) {
            state.coursesData = action.payload.coursesData
        },
        setName(state, action) {
            state.name = action.payload.name
        },
        setEmail(state, action) {
            state.email = action.payload.email
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
        }
    }
})

export default assessmentsSlice
