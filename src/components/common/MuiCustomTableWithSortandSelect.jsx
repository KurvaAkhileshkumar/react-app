import React, { useEffect, createRef, useState } from 'react'
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

const HeaderArr = ['a', 'b', 'c', 'd', 'e', 'f']
const tableData = [
  {
    subject: "Subject 01",
    semester: 3,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0
  },
  {
    subject: "Subject 02",
    semester: 3,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0
  },
  {
    subject: "Subject 03",
    semester: 2,
    total_timespent: 74,
    submission_type: 3,
    internet_speed: 5,
    percentage_scored: 5,
    attempted: 1
  },
  {
    subject: "Subject 04",
    semester: 1,
    total_timespent: 53,
    submission_type: 3,
    internet_speed: 7,
    percentage_scored: 29,
    attempted: 1
  },
  {
    subject: "Subject 05",
    semester: 1,
    total_timespent: null,
    submission_type: null,
    internet_speed: null,
    percentage_scored: null,
    attempted: 0
  },
  {
    subject: "Subject 06",
    semester: 3,
    total_timespent: 48,
    submission_type: 3,
    internet_speed: 3,
    percentage_scored: 69,
    attempted: 1
  },
]
console.log(tableData)
const MuiCustomTableWithSortandSelect = (props) => {
  const {
    // HeaderArr,
    // tableData,
    viewStudentResult,
    sortHandler,
    selectHandler,
    loading_reportData,
    currentPageforTablepaginaton,
    tablePaginationHandler,
    filtered_studentAssessmentList,
    submissionTypesToShowinStudentTable,
  } = props

  return (
    <>
      <Paper
        sx={{
          boxShadow: 'none',
          marginTop: '1.5rem',
        }}
      >
        <Table sx={{ width: '100%' }} aria-label='sticky table'>
          <TableHead
            sx={{
              position: 'sticky',
              top: '162px',
              zIndex: 100,
              background: 'white',
            }}
          >
            <MuiCustomTableHeaderRowWithSortandSelect
              headerArray={HeaderArr}
              sortHandler={sortHandler}
              selectHandler={selectHandler}
            />
          </TableHead>
          <TableBody>
            {tableData?.map((stu, i) => (
              <MuiCustomStudentTableRow
                stu={stu}
                key={i}
                viewStudentResult={viewStudentResult}
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
          count={Math.ceil(15)}
          // filtered_studentAssessmentList?.filter((stu) =>
          //   submissionTypesToShowinStudentTable.includes(stu.submission_type)
          // ).length / 15                  
          page={currentPageforTablepaginaton}
          onChange={tablePaginationHandler}
        />
      </Stack>
    </>
  )
}

export default MuiCustomTableWithSortandSelect
