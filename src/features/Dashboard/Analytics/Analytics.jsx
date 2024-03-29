import AssessmentDetailCard from '../../../components/common/AssessmentDetailCard'
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
export default function Analytics() {
    const analyticsData = useSelector((state) => state.assessmentsReducer.analyticsData)
    const dashBoardKeys = Object.keys(analyticsData)
    const dashBoardValues = Object.values(analyticsData)
    return (
        <>
            <Box>
                <Typography
                    variant='h4'
                    textAlign={'start'}
                    fontWeight={'600'}
                >Dashboard</Typography>
                <Box display={'flex'} flexDirection={'row'}
                    sx={{
                        padding: '0px',
                        margin: '0px',
                        marginTop: '20px',
                        marginBottom: '15px',
                        alignItems: 'center',
                        flexWrap: {
                            md: 'wrap',
                            lg: 'nowrap'
                        }
                    }}
                >
                    {
                        dashBoardValues.map((item, index) => {
                            return (
                                <Box sx={{
                                    margin: '0px',
                                    marginRight: '24px',
                                    width: '230px',
                                    height: '80px',
                                }} key={index}>
                                    <AssessmentDetailCard
                                        icon={index}
                                        iconBgColor={index}
                                        title={dashBoardKeys[index].charAt(0).toUpperCase() + dashBoardKeys[index].slice(1)}
                                        contentMagnitude={item}
                                    />
                                </Box>
                            );
                        })
                    }
                </Box>
            </Box>

        </>
    );
}