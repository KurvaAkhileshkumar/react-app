import MuiColumnChart from "../components/common/MuiColumnChart";
import palette from "../theme/palette";
import Typography from '@mui/material/Typography';
import AttemptedUnattempted from "./AttemptedUnattempted";
import typography from "../theme/typography";


export default function RecenetAssessmentsChart(props) {
    const categories = props.categories
    const series = [
        {
            data: props.data
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
