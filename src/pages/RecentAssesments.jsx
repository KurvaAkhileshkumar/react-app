import MuiColumnChart from "../components/common/MuiColumnChart";
import palette from "../theme/palette";
import Typography from '@mui/material/Typography';
import AttemptedUnattempted from "./AttemptedUnattempted";
import typography from "../theme/typography";
import { useSelector } from "react-redux";



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
            <Typography sx={{
                ...typography.h5, marginTop: '16px',
                marginBottom: '13px',
                marginLeft: '23px',
                textAlign: 'start',
                color: palette.grey[900],
            }}>
                Recent Assessments
            </Typography>
            <AttemptedUnattempted />
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
        </>
    );
}
