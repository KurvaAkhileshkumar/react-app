import React, { useEffect, createRef, useState } from 'react'
import { poppinsFont } from '../../theme/typography'
import {
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
          count={noOfItemsPerPage}
          onChange={(event, page) => handleChange(event, page)}
          color='primary'
          sx={{
            fontFamily: poppinsFont.fontFamily
          }}
        />
      </Stack>
    </>
  )
}

export default MuiCustomTableWithSortandSelect
