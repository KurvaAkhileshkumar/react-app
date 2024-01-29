import Stack from '@mui/material/Stack'
import { MyDiv } from '../../components/myStyledComponents/styledComponents';
import ContinueReadingCard from './ContinueReadingCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { avgStyles, continueReadingStyles, sliderStyles, titleStyles, whatYouWillLearnStyles } from './CourseLayoutStyles';
import AccordianTopics from './AccordianTopics';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import palette from '../../theme/palette';
import Slider from "@mui/material/Slider";
import { poppinsFont, pxToRem } from '../../theme/typography';
import vector from '../../assets/Vector.svg'
import MuiCustomChipCount from '../../components/common/MuiCustomChipCount'

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
            <Stack direction={'column'} marginTop={'35px'} sx={{
                marginLeft: '80px',
            }}>
                <Stack direction={'row'}>
                    <Link to='/'>
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
                    />
                </Stack>
                <Stack direction={'row'} marginLeft={'85px'} marginTop={'18px'}>
                    <Slider
                        // disabled={true}
                        size="medium"
                        defaultValue={completionStatus}
                        valueLabelDisplay="auto"
                        max={100}
                        min={0}
                        sx={{
                            padding: '8px 0px 8px 0px',
                            color: '#0B58F5',
                            width: '300px',
                            "& .MuiSlider-thumb": {
                                width: 0,
                                height: 0,
                            },
                        }}
                    />
                    <MyDiv sx={{
                        marginLeft: '12px',
                        color: palette.primary[700],
                        fontSize: pxToRem(14),
                        fontFamily: poppinsFont.fontFamily,
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>
                        Avg. {completionStatus}%
                    </MyDiv>
                </Stack>
                <Stack direction={'column'} marginTop={'23px'} alignItems={'flex-start'} marginLeft={'85px'}>
                    <Typography
                        sx={whatYouWillLearnStyles}
                    >What you will learn</Typography>
                    <MyDiv sx={
                        {
                            width: '1095px',
                            color: '#000',
                            fontFamily: poppinsFont.fontFamily,
                            fontSize: pxToRem(14),
                            fontStyle: 'normal',
                            fontWeight: '300',
                            lineHeight: 'normal',
                            alignItems: 'start'
                        }
                    }>
                        <Stack sx={
                            {}
                        }>
                            {listArray?.map((item, index) => <li key={index} style={{
                                marginTop: '8px',
                                textAlign: 'start',
                            }}>{item}</li>)}
                        </Stack>
                    </MyDiv>
                </Stack>
                <Stack direction={'column'} marginTop={'40px'} alignItems={'flex-start'} gap={'10px'}>
                    <Typography
                        sx={continueReadingStyles}
                    >Continue reading</Typography>
                    <Stack marginLeft={'56px'}>
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