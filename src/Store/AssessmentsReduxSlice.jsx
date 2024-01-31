import { createSlice } from '@reduxjs/toolkit'

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

const intialAsessmentsSliceData = {
    profile,
    ...assessmentsSliceData,
    ass: '',
    coursesData: [],
    recentAssessmentsData,
    categories,
    analyticsData,
    leaderBoardData
}

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
        }
    }
})

export default assessmentsSlice
