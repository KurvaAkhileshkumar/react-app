import { Box, Skeleton, Typography } from "@mui/material";
import MuiCustomTableWithSortandSelect from "../../../components/common/MuiCustomTableWithSortandSelect";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from "react-redux";
import { assessmentsSliceActions } from "../../../Store/Store";

export default function Assessments() {

    const semester = useSelector((state) => state.assessmentsReducer.semester)


    const dispatch = useDispatch()

    const changeSemester = (whichIcon) => {
        if (whichIcon === 'left' && semester !== 1) {
            dispatch(assessmentsSliceActions.setSemester(semester - 1))
        }
        else if (whichIcon === 'right' && semester !== 8) {
            dispatch(assessmentsSliceActions.setSemester(semester + 1))
        }
    }

    return (
        <>
            <Box sx={{
                height: '535px',
                maxWidth: '100%',
                bgcolor: '#FFF',
                borderRadius: '10px',
                border: '1px solid #F4F6F8',
                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
            }}>
                <Box display={'flex'} flexDirection={'column'} margin={'0px 14px 0px 16px'}>

                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        marginTop={'5px'}
                        marginBottom={'5px'}
                    >
                        <Typography variant="h5" color={(theme) => theme.palette.grey[900]}>
                            Assessments
                        </Typography>

                        <Box display={'flex'} flexDirection={'row'}>
                            <ChevronLeftIcon onClick={() => changeSemester('left')}
                                sx={{
                                    color: (theme) => semester === 1 ? theme.palette.grey[400] : theme.palette.grey[800]
                                }}
                            />
                            <Typography
                                variant='subtitle2'
                                marginTop={'2px'}
                                fontWeight={'400'}
                                color={(theme) => theme.palette.grey[800]}
                            >
                                Semester{` 0${semester}`}
                            </Typography>
                            <ChevronRightIcon onClick={() => changeSemester('right')}
                                sx={
                                    {
                                        color: (theme) => semester === 8 ? theme.palette.grey[400] : theme.palette.grey[800]
                                    }
                                }
                            />
                        </Box>
                    </Box>

                    <MuiCustomTableWithSortandSelect />
                </Box>
            </Box>
        </>
    );
}

