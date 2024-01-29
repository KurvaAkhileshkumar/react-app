import AssessmentDetailCard from "../components/common/AssessmentDetailCard";
import { MyDiv } from '../components/myStyledComponents/styledComponents'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { blue } from '@mui/material/colors';
import { dashBoardCard } from "./LayoutStyles";

export default function DashBoard({ data }) {
    const dashBoardKeys = Object.keys(data)
    const dashBoardValues = Object.values(data)
    return (
        <>
            {
                dashBoardValues.map((item, index) => {
                    return (
                        <MyDiv sx={dashBoardCard} key={index}>
                            <AssessmentDetailCard
                                icon={index}
                                iconBgColor={index}
                                title={dashBoardKeys[index].charAt(0).toUpperCase() + dashBoardKeys[index].slice(1)}
                                contentMagnitude={item}
                            />
                        </MyDiv>
                    );
                })
            }

        </>
    );
}