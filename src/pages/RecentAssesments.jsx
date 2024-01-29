import MuiColumnChart from "../components/common/MuiColumnChart";
import palette from "../theme/palette";
import Typography from '@mui/material/Typography';
import { recentAssessmentsText, avgPerformanceText } from "./RecentAssessmentsStyles";
import AttemptedUnattempted from "./AttemptedUnattempted";


export default function RecenetAssessmentsChart(props) {
    const categories = props.categories
    const series = [
        {
            data: props.data
        }
    ]
    return (
        <>
            <Typography sx={recentAssessmentsText}>
                Recent Assessments
            </Typography>
            <AttemptedUnattempted />
            <Typography sx={avgPerformanceText}>
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
