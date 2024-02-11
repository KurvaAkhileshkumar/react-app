import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";
import palette from "../../../theme/palette";
import { pxToRem, poppinsFont } from "../../../theme/typography";
export default function SliderStatus() {
    const courseCompletionPercentage = useSelector((state) => state.coursesReducer.courseCompletionPercentage)
    return (
        <>
            <Box display={'flex'} direction={'row'} marginLeft={'85px'} marginTop={'18px'}>
                <Slider
                    size="medium"
                    value={courseCompletionPercentage}
                    valueLabelDisplay="auto"
                    max={100}
                    min={0}
                    sx={{
                        padding: '8px 0px 8px 0px',
                        color: '#0B58F5',
                        width: '300px',
                    }}
                />
                <Box sx={{
                    marginLeft: '12px',
                    color: palette.primary[700],
                    fontSize: pxToRem(14),
                    fontFamily: poppinsFont.fontFamily,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }}>
                    Avg. {courseCompletionPercentage}%
                </Box>
            </Box>
        </>
    );
}