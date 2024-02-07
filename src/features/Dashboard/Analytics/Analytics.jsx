import AssessmentDetailCard from '../../../components/common/AssessmentDetailCard'
import { Box, Typography } from "@mui/material";
import { dashBoardCard } from "../../../pages/DummyStyles/LayoutStyles";
import { useSelector } from "react-redux";
import { dashBoardStack } from '../../../pages/DummyStyles/LayoutStyles';
import { poppinsFont, pxToRem } from '../../../theme/typography.js';
export default function Analytics() {
    const analyticsData = useSelector((state) => state.assessmentsReducer.analyticsData)
    const dashBoardKeys = Object.keys(analyticsData)
    const dashBoardValues = Object.values(analyticsData)
    return (
        <>
            <Box>
                <Typography
                    sx={{
                        fontFamily: poppinsFont.fontFamily,
                        fontSize: pxToRem(20),
                        fontWeight: '600',
                        lineHeight: '28px',
                        textAlign: 'start',
                    }}
                >Dashboard</Typography>
                <Box display={'flex'} flexDirection={'row'} sx={dashBoardStack} flexWrap={'wrap'}>
                    {
                        dashBoardValues.map((item, index) => {
                            return (
                                <Box sx={dashBoardCard} key={index}>
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