import React, { useEffect, createRef, useState } from 'react'
import { poppinsFont, pxToRem } from '../../theme/typography'
import { MyDiv } from '../myStyledComponents/styledComponents'
import errorMark from '../../assets/errorMark.svg'
import palette from '../../theme/palette'
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Paper,
  Skeleton,
  Stack,
  Pagination,
} from '@mui/material'
import MuiCustomTableHeaderRowWithSortandSelect from './MuiCustomTableHeaderRowWithSortandSelect'
import MuiCustomStudentTableRow from './MuiCustomStudentTableRow'

const HeaderArr = ['Subject', 'TimeSpent', 'Submission', 'Internet speed', 'Percentage', 'Attempted']


const MuiCustomTableWithSortandSelect = () => {
  const noOfItemsPerPage = 8
  const [totalAssessmentsData, setTotalAssessmentsData] = useState([])
  const [assessmentsTableData, setAssessmentsTableData] = useState([])
  const [isError, setIsError] = useState(true)
  function handleChange(event, page) {
    setAssessmentsTableData(totalAssessmentsData.slice(noOfItemsPerPage * (page - 1), noOfItemsPerPage * (page)))
  }
  useEffect(() => {
    fetch('https://stagingstudentpython.edwisely.com/reactProject/assessments').then((response) => {
      return response.json()
    }).then((resData) => {
      if (resData.status !== 200)
        console.log('Error Occured')
      setTotalAssessmentsData(resData.assessments)
      setAssessmentsTableData(resData.assessments?.slice(0, noOfItemsPerPage))
    })
  }, [])
  return (
    <>
      {isError ? <MyDiv>
        <Paper
          sx={{
            boxShadow: 'none',
          }}
        >
          <Table sx={{ width: '100%' }} aria-label='sticky table'>
            <TableHead
              sx={{
                height: '30px',
                zIndex: 100,
                background: 'white',
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
            count={Math.ceil(totalAssessmentsData?.length / noOfItemsPerPage)}
            onChange={(event, page) => handleChange(event, page)}
            color='primary'
            sx={{
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