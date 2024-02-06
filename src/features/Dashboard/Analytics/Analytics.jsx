import AssessmentDetailCard from '../../../components/common/AssessmentDetailCard'
import { Box } from "@mui/material";
import { dashBoardCard } from "../../../pages/DummyStyles/LayoutStyles";
import { useSelector } from "react-redux";
export default function Analytics() {
    const analyticsData = useSelector((state) => state.assessmentsReducer.analyticsData)
    const dashBoardKeys = Object.keys(analyticsData)
    const dashBoardValues = Object.values(analyticsData)
    return (
        <>
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

        </>
    );
}