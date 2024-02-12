import MuiColumnChart from "../../../components/common/MuiColumnChart";
import palette from "../../../theme/palette";
import Typography from '@mui/material/Typography';
import AttemptedUnattempted from "./AttemptedUnattempted";
import typography, { pxToRem } from "../../../theme/typography";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';


export default function RecenetAssessmentsChart() {
    const categories = []
    const helperSeriesData = []
    const selectedSubject = useSelector((state) => state.assessmentsReducer.selectedSubject)
    const tests = useSelector((state) => state.assessmentsReducer.subjects[selectedSubject]?.tests)
    tests?.forEach((item) => {
        helperSeriesData.push(item.percentage)
        categories.push(item.name)
    })
    const series = [
        {
            data: [...helperSeriesData]
        }
    ]
    return (
        <>
            {tests ?
                <Box sx={{
                    padding: '0px',
                    height: '352px',
                    bgcolor: '#FFF',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    border: '1px solid #F4F6F8',
                    boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                }}>
                    <Box
                        sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '16px',
                                marginBottom: '13px',
                                justifyContent: 'space-between'
                            }
                        }
                    >
                        <Typography
                            variant='h5'
                            sx={{
                                marginLeft: '23px',
                                textAlign: 'start',
                                color: (theme) => theme.palette.grey[900],
                                fontSize: {
                                    md: pxToRem(14),
                                    lg: pxToRem(20)
                                }
                            }}>
                            Recent Assessments
                        </Typography>
                        <AttemptedUnattempted />
                    </Box>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            textAlign: 'start',
                            marginLeft: '23px',
                            color: (theme) => theme.palette.grey[900],
                            fontWeight: typography.fontWeightMedium,
                            fontSize: {
                                md: pxToRem(10),
                                lg: pxToRem(14)
                            }
                        }}>
                        Avg.performance
                    </Typography>
                    <MuiColumnChart
                        height={'267px'}
                        series={series}
                        categories={categories}
                        primaryBarColor={palette.primary.main}
                        secondarybarColor={palette.error.main}
                        xaxisTitle={'Tests'} />
                </Box>
                : <Skeleton variant='rounded' height='352px' marginBottom='20px' />
            }
        </>
    );
}


