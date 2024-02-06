import { Box, Typography } from "@mui/material";
import MuiCustomTableWithSortandSelect from "../../../components/common/MuiCustomTableWithSortandSelect";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import typography, { poppinsFont } from "../../../theme/typography";
import palette from "../../../theme/palette";
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
                padding: '0px',
                height: '535px',
                maxWidth: '100%',
                bgcolor: '#FFF',
                borderRadius: '10px',
                border: '1px solid #F4F6F8',
                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
            }}>
                <Box display={'flex'} flexDirection={'column'} position={'relative'} margin={'14px 14px 20px 16px'}>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}>
                        <Typography sx={{
                            color: '#161C24',
                            fontFamily: poppinsFont.fontFamily,
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '28px',
                        }}>
                            Assessments
                        </Typography>
                        <Box direction={'row'} position={'absolute'} top={'-10px'} right={'2px'}>
                            <ChevronLeftIcon onClick={() => changeSemester('left')}
                                sx={{
                                    color: () => semester === 1 ? palette.grey[400] : palette.grey[800]
                                }}
                            />
                            <Typography
                                variant={typography.h1}
                                sx={
                                    {
                                        color: palette.grey[800],
                                    }
                                }
                            >
                                Semester{` 0${semester}`}
                            </Typography>
                            <ChevronRightIcon onClick={() => changeSemester('right')}
                                sx={
                                    {
                                        color: () => semester === 8 ? palette.grey[400] : palette.grey[800]
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

