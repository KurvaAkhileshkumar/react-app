import MuiColumnChart from "../../components/common/MuiColumnChart";
import palette from "../../theme/palette";
import Typography from '@mui/material/Typography';
import AttemptedUnattempted from "./AttemptedUnattempted";
import typography from "../../theme/typography";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";


export default function RecenetAssessmentsChart() {
    const categories = useSelector((state) => state.assessmentsReducer.categories)
    const helperSeriesData = useSelector((state) => state.assessmentsReducer.recentAssessmentsData)
    const series = [
        {
            data: [...helperSeriesData]
        }
    ]
    return (
        <>
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
                        sx={{
                            ...typography.h5,
                            marginLeft: '23px',
                            textAlign: 'start',
                            color: palette.grey[900],
                        }}>
                        Recent Assessments
                    </Typography>
                    <AttemptedUnattempted />
                </Box>
                <Typography sx={{
                    textAlign: 'start',
                    marginLeft: '23px',
                    color: palette.grey[600],
                    ...typography.subtitle2,
                    fontWeight: typography.fontWeightMedium
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
        </>
    );
}


