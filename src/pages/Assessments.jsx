import MuiCustomTableWithSortandSelect from "../components/common/MuiCustomTableWithSortandSelect";
import { Stack, Typography, colors } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import typography, { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import { useDispatch, useSelector } from "react-redux";
import { assessmentsSliceActions } from "../Store/Store";
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
            <Stack direction={'column'} position={'relative'} margin={'14px 14px 20px 16px'}>
                <Stack direction={'row'}>
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
                    <Stack direction={'row'} position={'absolute'} top={'2px'} right={'2px'}>
                        <ChevronLeftIcon onClick={() => changeSemester('left')}
                            sx={{
                                color: () => semester === 1 ? palette.grey[400] : palette.grey[800]
                            }}
                        />
                        <Typography
                            variant={typography.h1}
                            sx={
                                {
                                    marginTop: '3.5px',
                                    color: palette.grey[800],
                                    // fontFamily: poppinsFont.fontFamily,
                                    // fontStyle: pxToRem(14),
                                    // fontStyle: 'normal',
                                    // fontWeight: 400,
                                    // lineHeight: '16px',
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
                    </Stack>
                </Stack>
                <MuiCustomTableWithSortandSelect />
            </Stack>
        </>
    );
}
