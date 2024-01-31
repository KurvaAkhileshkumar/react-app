import { createSlice } from '@reduxjs/toolkit'

const assessmentsSliceData = {}
const intialAsessmentsSliceData = { ...assessmentsSliceData, ass: '', profilePicLink: '' }
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
        }
    }
})

export default assessmentsSlice
