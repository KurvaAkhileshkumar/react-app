import Stack from '@mui/material/Stack'
import { MyDiv } from '../../components/myStyledComponents/styledComponents';
import ContinueReadingCard from './ContinueReadingCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { continueReadingStyles, titleStyles, whatYouWillLearnStyles } from './CourseLayoutStyles';
import AccordianTopics from './AccordianTopics';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import palette from '../../theme/palette';

// const description = "Learn the fundamental principles of user interface (UI) design, including layout, color, and typography, to create visually appealing and effective designs.\nUnderstand the basics of user experience (UX) design, focusing on enhancing user satisfaction by improving the usability and accessibility of digital products.\nExplore the importance of user research and usability testing in the UI/UX design process, gaining insights into user behavior and preferences.\nDive into the principles of interaction design, mastering the art of creating intuitive and engaging user interactions through navigation, feedback, and animation.\nGain hands-on experience with industry-standard design tools and software, honing your skills in wireframing, prototyping, and mockup creation for web and mobile applications."
export default function CourseLayout() {
    const params = useParams();
    const fetchUrl = 'https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=' + params.id
    console.log(fetchUrl)
    const [courseName, setCourseName] = useState()
    const [courseTag, setCourseTag] = useState()
    const [completionStatus, setCompletionStatus] = useState()
    const [description, setDescription] = useState()
    const [continueReadingData, setContinueReadingData] = useState()
    const [unitsData, setUnitsData] = useState()
    useEffect(() => {
        fetch(fetchUrl).
            then((response) => response.json()).
            then((res) => {
                setCourseName(res.data.name)
                setCourseTag(res.data.tag)
                setCompletionStatus(res.data.percentage)
                setDescription(res.data.description)
                setContinueReadingData(res.data.continue_reading)
                setUnitsData(res.data.units)
            })
    }, [])

    let listArray = description?.split("\n").map((text) => text)
    return (
        <>
            <Stack direction={'column'} marginTop={'35px'}>
                <Stack direction={'row'}>
                    <Link to='/'> <ArrowBackIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: '24px',
                            marginRight: '15px',
                            marginLeft: '95px',
                            color: palette.grey[900]
                        }}
                    /></Link>
                    <Typography sx={titleStyles}>
                        {courseName}
                    </Typography>
                </Stack>
                <Stack direction={'column'} marginTop={'62px'} alignItems={'flex-start'}>
                    <Typography
                        sx={whatYouWillLearnStyles}
                    >What you will learn</Typography>
                    <MyDiv sx={
                        {
                            // marginTop: '8px',
                            marginLeft: '165px',
                            color: '#000',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '300',
                            lineHeight: 'normal'
                        }
                    }>
                        <ul style={
                            {
                                listStyleType: 'disc',
                                listStylePosition: 'inside',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between'
                            }
                        }>
                            {listArray?.map((item, index) => <li key={index} style={{
                                marginTop: '8px'
                            }}>{item}</li>)}
                        </ul>
                    </MyDiv>
                </Stack>
                <Stack direction={'column'} marginTop={'40px'} alignItems={'flex-start'} gap={'10px'}>
                    <Typography
                        sx={continueReadingStyles}
                    >Continue reading</Typography>
                    <Stack marginLeft={'136px'}>
                        <Stack direction={'row'} gap={'22px'}>
                            <ContinueReadingCard continueReadingData={continueReadingData} />
                        </Stack>
                    </Stack>
                </Stack>
                {/* <TopicSelection /> */}
                <AccordianTopics unitsData={unitsData} />
            </Stack>
        </>
    );
}