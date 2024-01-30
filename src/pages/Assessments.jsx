import MuiCustomTableWithSortandSelect from "../components/common/MuiCustomTableWithSortandSelect";
import { Stack, Typography, colors } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
export default function Assessments() {
    return (
        <>
            <Stack direction={'column'} position={'relative'} margin={'14px 14px 20px 16px'}>
                <Stack direction={'row'}>
                    <Typography sx={{
                        color: '#161C24',
                        fontFamily: poppinsFont.fontFamily,
                        fontStyle: pxToRem(28),
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '28px',
                    }}>
                        Assessments
                    </Typography>
                    <Stack direction={'row'} position={'absolute'} top={'2px'} right={'2px'}>
                        <ChevronLeftIcon />
                        <Typography
                            sx={
                                {
                                    marginTop: '3.5px',
                                    color: palette.grey[800],
                                    fontFamily: poppinsFont.fontFamily,
                                    fontStyle: pxToRem(14),
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '16px',
                                }
                            }
                        >
                            Semester
                        </Typography>
                        <ChevronRightIcon />
                    </Stack>
                </Stack>
                <MuiCustomTableWithSortandSelect />
            </Stack>
        </>
    );
}
