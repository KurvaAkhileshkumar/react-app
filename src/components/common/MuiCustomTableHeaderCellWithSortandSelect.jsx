import React, { useState } from 'react'
import { assessmentsSliceActions } from '../../Store/Store';
import { useSelector } from 'react-redux'
import {
  TableCell,
  Typography,
  Box,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { poppinsFont, pxToRem } from '../../theme/typography';
import palette from '../../theme/palette';
import { useDispatch } from 'react-redux'

const options = [
  { id: 1, value: 'Timeout' },
  { id: 2, value: 'Interrupted' },
  { id: 3, value: 'On Submit' },
  { id: 4, value: 'Tabswitch' },
]

const ITEM_HEIGHT = 48

const MuiCustomTableHeaderCellWithSortandSelect = ({
  itemData,
  index,
}) => {
  const theme = useTheme()

  const assessmentsData = useSelector((state) => state.assessmentsReducer.assessmentsSliceData)
  const isSorting = useSelector((state) => state.assessmentsReducer.isSorting)
  const dispatch = useDispatch()
  function sortingTheData() {
    console.log(isSorting)
    console.log('Entered')
    if (!isSorting) {
      console.log(isSorting)
      console.log('Enter the sorting cell')
      const dummyData = [...assessmentsData]
      dispatch(assessmentsSliceActions.isClickedForSorting(true))
      dummyData.sort((a, b) => b.percentage_scored - a.percentage_scored)
      dispatch(assessmentsSliceActions.setAssessmentSliceData(dummyData))
    }
  }
  return (
    <>
      <TableCell
        sx={{
          padding: '0px',
          margin: '0px',
          padding: '12px',
          background: theme.palette.grey[100]
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems='center'
          sx={{ height: '10px' }}
        >
          <Typography
            onClick={sortingTheData}
            variant='body2'
            sx={{
              fontFamily: poppinsFont.fontFamily,
              fontSize: pxToRem(14),
              fontStyle: 'normal',
              fontWeight: 500,
              color: theme.palette.grey[500],
              lineHeight: 'normal',
              cursor: () => itemData === 'Percentage' ? 'pointer' : ''
            }}
          >
            {itemData}
          </Typography>
          {itemData === 'Percentage' ? <ArrowUpward
            sx={{
              margin: '0px',
              padding: '0px',
              height: '15px',
              width: 'auto',
              color: palette.grey[400]
            }}
          /> : ''}
        </Box>
      </TableCell>
    </>
  )
}

export default MuiCustomTableHeaderCellWithSortandSelect
