import React, { useEffect, createRef, useState } from 'react'
import { poppinsFont, pxToRem } from '../../theme/typography'
import errorImg from '../../assets/errorMark.svg'
import palette from '../../theme/palette'
import {
  Typography,
  Table,
  TableBody,
  TableHead,
  Paper,
  Stack,
  Pagination,
  Box,
  Skeleton
} from '@mui/material'
import { Link } from 'react-router-dom'
import MuiCustomTableHeaderRowWithSortandSelect from './MuiCustomTableHeaderRowWithSortandSelect'
import MuiCustomStudentTableRow from './MuiCustomStudentTableRow'
import { useDispatch, useSelector } from 'react-redux'
import { assessmentsSliceActions } from '../../Store/Store'



const HeaderArr = ['Subject', 'TimeSpent', 'Submission', 'Internet speed', 'Percentage', 'Attempted']


const MuiCustomTableWithSortandSelect = () => {

  //Variable for displaying the no of items per page
  const noOfItemsPerPage = 7
  const [assessmentsTableData, setAssessmentsTableData] = useState([])
  const [isError, setIsError] = useState(true)
  const dispatch = useDispatch()

  //Retrieving the data from store of Assessments
  const assessmentsData = useSelector((state) => state.assessmentsReducer.assessmentsData)

  //IsSorting is retrieved from the store to check if clicked for sorting.
  const isSorting = useSelector((state) => state.assessmentsReducer.isSorting)

  setTimeout(() => {
    if (isSorting) {
      //Setting the table data for updating the table with sorted data            
      setAssessmentsTableData(assessmentsData?.slice(0, noOfItemsPerPage))
      dispatch(assessmentsSliceActions.isClickedForSorting(false))
    }
  }, 1000)

  //Setting the data when the page is Changed
  function handleChange(event, page) {
    setAssessmentsTableData(assessmentsData.slice(noOfItemsPerPage * (page - 1), noOfItemsPerPage * (page)))
  }

  const handleReload = () => {
    setIsError(false)
  }
  //Fetching the data from api and setting the data in the store.
  useEffect(() => {
    fetch('https://stagingstudentpython.edwisely.com/reactProject/assessments').then((response) => {
      return response.json()
    }).then((resData) => {
      if (resData.status !== 200) {
        setIsError(true)
        console.log('Error Occured')
      }
      else {
        setIsError(false)
      }
      setAssessmentsTableData(resData.assessments?.slice(0, noOfItemsPerPage))
      dispatch(assessmentsSliceActions.setAssessmentsData(resData.assessments))
    })
  }, [isError])

  //Rendering the component
  return (
    <>
      {isError ?
        <Box
          height='537px'
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
          paddingBottom={'100px'}
          width={'100%'}
        >
          <img src={errorImg} alt="Error Img" />
          <Typography variant='h2' color={(theme) => theme.palette.grey[400]}>Error Loading Assessment</Typography>
          <Link variant='h5' color={(theme) => theme.palette.info.main} onClick={handleReload}>Reload</Link>
        </Box>
        : assessmentsData ? <Box>
          <Box
            sx={{
              margin: '0px',
              padding: '0px',
              border: '0px',
              boxShadow: 'none',
              maxWidth: '100%',
            }}
          >
            <Table
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                margin: '0px',
                padding: '0px',
                width: '100%',
              }} aria-label='responsive table'>
              <TableHead
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  width: '100%',
                  background: (theme) => theme.palette.grey[100],
                }}
              >
                <MuiCustomTableHeaderRowWithSortandSelect
                  headerArray={HeaderArr}
                />
              </TableHead>
              <TableBody sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
                <Box marginTop={'20px'}>
                  {assessmentsTableData?.map((stu, i) => (
                    <MuiCustomStudentTableRow
                      stu={stu}
                      key={i}
                    />
                  ))}
                </Box>
              </TableBody>
            </Table>
          </Box>

          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent='center'
            alignItems='center'
            sx={{ marginTop: '1rem' }}
          >
            <Pagination
              count={~~Math.ceil(assessmentsData?.length / noOfItemsPerPage)}
              onChange={(event, page) => handleChange(event, page)}
              color='primary'
              sx={{
                '& .MuiPaginationItem-previousNext': {
                  background: palette.grey[200]
                },
                fontFamily: poppinsFont.fontFamily
              }}
            />
          </Box>
        </Box> : <h1>Error Occured</h1>}
    </>
  )
}

export default MuiCustomTableWithSortandSelect

// const ErrorElement = () => {
//   <Stack direction={'column'}
//     sx={{
//       margin: '163px 193px 154px 190x'
//     }}
//   >
//     <MyDiv
//       sx={{
//         width: '100px',
//         heigh: '100px'
//       }}
//     >
//       <img src={errorMark} alt="Error mark Broken" />
//     </MyDiv>
//     <Typography
//       sx={{
//         color: palette.grey[400],
//         fontFamily: poppinsFont.fontFamily,
//         fontWeight: 400,
//         fontSize: pxToRem(40),
//         fontStyle: 'normal',
//         line: 'normal'
//       }}
//     >
//       Error Loading Assessment
//     </Typography>
//     <Typography sx={{
//       color: palette.info.main,
//       fontFamily: poppinsFont.fontFamily,
//       fontSize: pxToRem(20),
//       fontStyle: 'normal',
//       lineHeight: 'normal',
//       textDecoration: 'underline'
//     }}>
//       Reload
//     </Typography>
//   </Stack>
// }