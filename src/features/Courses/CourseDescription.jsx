import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { whatYouWillLearnStyles } from "../../pages/CoursesPage/CourseLayoutStyles";
import { pxToRem, poppinsFont } from "../../theme/typography";
export default function CourseDescription() {
    const description = useSelector((state) => state.coursesReducer.courseDescription)
    let listArray = description?.split("\n").map((text) => text)
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} marginTop={'23px'} alignItems={'flex-start'} marginLeft={'85px'}>
                <Typography
                    sx={whatYouWillLearnStyles}
                >What you will learn</Typography>
                <Box
                    component={'ul'}
                    sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            textIndent: '0px',
                            justifyContent: 'flex-start',
                            maxWidth: '1095px',
                            color: '#000',
                            fontFamily: poppinsFont.fontFamily,
                            fontSize: pxToRem(14),
                            fontStyle: 'normal',
                            fontWeight: '300',
                            lineHeight: 'normal',
                        }
                    }>
                    {listArray?.map((item, index) => <li key={index}
                        style={{
                            listStylePosition: 'outside',
                            textAlign: 'start',
                            marginTop: '8px',
                        }}>{item}</li>)}
                </Box>
            </Box>
        </>
    );
}