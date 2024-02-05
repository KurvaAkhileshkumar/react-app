import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import vector from '../../assets/Vector.svg'
import { titleStyles } from "../../pages/CoursesPage/CourseLayoutStyles";
import MuiCustomChipCount from '../../components/common/MuiCustomChipCount'

const chipColors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']
const chipTextColor = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']
export default function CourseNameTag() {
    const id = useSelector((state) => state.coursesReducer.id)
    const courseName = useSelector((state) => state.coursesReducer.courseName)
    const courseTag = useSelector((state) => state.coursesReducer.courseTag)
    return (
        <>
            <Box display={'flex'} direction={'row'}>
                <Link to='/dashboard'>
                    <img style={{
                        cursor: 'pointer',
                        fontSize: '24px',
                        marginRight: '29.5px',
                        marginLeft: '33.5px',
                        color: '#252525'
                    }} src={vector} alt="Arrow backIcon" />
                </Link>
                <Typography sx={titleStyles}>
                    {courseName}
                </Typography>
                <MuiCustomChipCount
                    width={'max-content'}
                    height={'20px'}
                    label={courseTag}
                    fontSize={'14px'}
                    background={chipColors[id - 1]}
                    color={chipTextColor[id - 1]}
                />
            </Box>
        </>
    );
}