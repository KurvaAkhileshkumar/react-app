import React, { useEffect, createRef, useState } from 'react'
import { poppinsFont, pxToRem } from '../../theme/typography'
import { MyDiv } from '../myStyledComponents/styledComponents'
import errorMark from '../../assets/errorMark.svg'
import palette from '../../theme/palette'
import {
  Typography,
  Table,
  TableBody,
  TableHead,
  Paper,
  Stack,
  Pagination,
} from '@mui/material'
import MuiCustomTableHeaderRowWithSortandSelect from './MuiCustomTableHeaderRowWithSortandSelect'
import MuiCustomStudentTableRow from './MuiCustomStudentTableRow'
import { useDispatch, useSelector } from 'react-redux'
import { assessmentsSliceActions } from '../../Store/Store'



const HeaderArr = ['Subject', 'TimeSpent', 'Submission', 'Internet speed', 'Percentage', 'Attempted']


const MuiCustomTableWithSortandSelect = () => {
  const noOfItemsPerPage = 7
  const [assessmentsTableData, setAssessmentsTableData] = useState([])
  const [isError, setIsError] = useState(true)
  const dispatch = useDispatch()

  const assessmentsSliceData = useSelector((state) => state.assessmentsReducer.assessmentsSliceData)
  const sorting = useSelector((state) => state.assessmentsReducer.ass)
  function handleChange(event, page) {
    setAssessmentsTableData(assessmentsSliceData.slice(noOfItemsPerPage * (page - 1), noOfItemsPerPage * (page)))
  }
  console.log(sorting)
  if (sorting !== '') {
    console.log('entered')
    const dummyData = [...assessmentsSliceData]
    console.log(sorting)
    if (sorting == 'ass')
      dummyData.sort((a, b) => a.percentage_scored - b.percentage_scored)
    console.log(dummyData)
    dispatch(assessmentsSliceActions.setAssessmentSliceData(dummyData))
  }
  useEffect(() => {
    fetch('https://stagingstudentpython.edwisely.com/reactProject/assessments').then((response) => {
      return response.json()
    }).then((resData) => {
      if (resData.status !== 200)
        console.log('Error Occured')
      setAssessmentsTableData(resData.assessments?.slice(0, noOfItemsPerPage))
      dispatch(assessmentsSliceActions.setAssessmentSliceData(resData.assessments))
    })
  }, [])
  return (
    <>
      {isError ? <MyDiv>
        <Paper
          sx={{
            margin: '0px',
            padding: '0px',
            border: '0px',
            boxShadow: 'none',
          }}
        >
          <Table sx={{ width: '861px', margin: '0px', padding: '0px' }} aria-label='sticky table'>
            <TableHead
              sx={{
                height: '31px',
                background: palette.grey[100],
              }}
            >
              <MuiCustomTableHeaderRowWithSortandSelect
                headerArray={HeaderArr}
              />
            </TableHead>
            <TableBody>
              {assessmentsTableData?.map((stu, i) => (
                <MuiCustomStudentTableRow
                  stu={stu}
                  key={i}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>

        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{ marginTop: '1rem' }}
        >
          <Pagination
            count={parseInt(Math.ceil(assessmentsSliceData?.length / noOfItemsPerPage))}
            onChange={(event, page) => handleChange(event, page)}
            color='primary'
            sx={{
              '& .MuiPaginationItem-previousNext': {
                background: palette.grey[200]
              },
              fontFamily: poppinsFont.fontFamily
            }}
          />
        </Stack>
      </MyDiv> : <ErrorElement />}
    </>
  )
}

export default MuiCustomTableWithSortandSelect

const ErrorElement = () => {
  <Stack direction={'column'}
    sx={{
      margin: '163px 193px 154px 190x'
    }}
  >
    <MyDiv
      sx={{
        width: '100px',
        heigh: '100px'
      }}
    >
      <img src={errorMark} alt="Error mark Broken" />
    </MyDiv>
    <Typography
      sx={{
        color: palette.grey[400],
        fontFamily: poppinsFont.fontFamily,
        fontWeight: 400,
        fontSize: pxToRem(40),
        fontStyle: 'normal',
        line: 'normal'
      }}
    >
      Error Loading Assessment
    </Typography>
    <Typography sx={{
      color: palette.info.main,
      fontFamily: poppinsFont.fontFamily,
      fontSize: pxToRem(20),
      fontStyle: 'normal',
      lineHeight: 'normal',
      textDecoration: 'underline'
    }}>
      Reload
    </Typography>
  </Stack>
}