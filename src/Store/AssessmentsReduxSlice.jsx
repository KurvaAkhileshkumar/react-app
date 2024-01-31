import { createSlice } from '@reduxjs/toolkit'
const intialAsessmentsSliceData = { assessmentsSliceData: {}, asseOrDesc: '', category: '' }

const assessmentsSlice = createSlice({
    name: 'sliceOfAssessment',
    initialState: intialAsessmentsSliceData,
    reducers: {
        setAssessmentSliceData(state, action) {
            state.assessmentsSliceData = action.payload
        },
        isClickedForSorting(state, action) {
            if (state.asseOrDesc === '')
                state.asseOrDesc = 'ass'
            else if (state.asseOrDesc === 'ass')
                state.asseOrDesc = 'desc'
            else if (state.asseOrDesc === 'desc')
                state.asseOrDesc = 'ass'
            console.log(state.category)
            if (state.category == '')
                state.category = action.payload
            else
                state.category = ''
        }
    }
})

export default assessmentsSlice
