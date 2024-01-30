import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import typography, { poppinsFont, pxToRem } from '../../theme/typography';
import palette from '../../theme/palette';
import { useState } from 'react';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import document from '../../assets/document.svg'
import { MyDiv } from '../../components/myStyledComponents/styledComponents';
import VectorBlue from '../../assets/VectorBlue.svg'
import searchStatus from '../../assets/searchstatus.svg'
import { Link } from 'react-router-dom';

const arr = [1, 2, 3, 4, 5]
export default function AccordianTopics({ unitsData }) {
    console.log('executing')
    const [topicIndex, setTopicIndex] = useState(0)
    let intialTopicState = ''
    if (unitsData !== undefined) {
        intialTopicState = unitsData?.map((item, index) => { if (index == topicIndex) return item.topics })
    }
    function unitIdClickHandler(id) {
        setTopicIndex(id)
    }
    return (
        <>
            <Stack position={'relative'} direction={'row'} gap={'42.5px'} marginTop={'25px'} marginLeft={'56px'} marginBottom={'25px'}>
                {unitsData?.map((item, index) => <Typography sx={{ fontFamily: typography.fontFamily, fontSize: pxToRem(15), fontWeight: '600', fontStyle: 'normal', opacity: '0.5' }} key={index} onClick={() => unitIdClickHandler(index)}>{item.unit_name}</Typography>)}

                <Stack
                    position={'absolute'}
                    top={'-8px'}
                    left={'454px'}
                    direction={'row'}
                    gap={'11.383px'}
                    sx={
                        {
                            width: '144px',
                            height: '35px',
                            padding: '7.589px 9.486px',
                            borderRadius: '6.64px',
                            border: '1px solid #F4F6F8',
                            background: '#F4F6F8'
                        }
                    }
                >
                    <MyDiv sx={{
                        width: '17.514px',
                        borderRadius: '5px',
                        marginTop: '4px',
                        marginLeft: '8px',
                        marginBottom: '8px'
                    }}>
                        <img src={searchStatus} alt="Broken" />
                    </MyDiv>
                    <Typography
                        sx={{
                            color: '#919EAB',
                            fontFamily: poppinsFont.fontFamily,
                            fontSize: pxToRem(12),
                            fontStyle: 'normal',
                            fontWeight: 300,
                            lineHeight: 'normal'
                        }}
                    >
                        Search topics
                    </Typography>
                </Stack>
            </Stack>




            {
                intialTopicState[topicIndex]?.map((item, index) => {
                    return (
                        <Stack key={index} direction={'column'}
                            sx={
                                {
                                    marginLeft: '56px',
                                    position: 'relative',
                                    width: '504px',
                                    background: '#FFF'
                                }
                            }
                        >
                            <Accordion
                                position={'relative'}
                                sx={{
                                    border: '0px',
                                    background: '#FFF',
                                }}
                            >
                                <AccordionSummary
                                    sx={
                                        {
                                            padding: '0px',
                                            fontFamily: poppinsFont.fontFamily,
                                            fontSize: pxToRem(16),
                                            color: palette.grey[400],
                                            marginLeft: '5px'
                                        }
                                    }
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                >{item.topic_name}
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={
                                        {
                                            padding: '0px 0px 12px 12px',
                                            display: 'flex',
                                            width: '504px',
                                            fontFamily: poppinsFont.fontFamily,
                                            fontSize: pxToRem(16),
                                            color: palette.grey[400]
                                        }
                                    }
                                >
                                    <Stack direction={'row'}>
                                        <MyDiv sx={{
                                            width: '16px',
                                            height: '16px',
                                            borderRadius: '5px',
                                            background: '#DFE3E8',
                                            marginRight: '5px'
                                        }}>
                                            <img src={document} alt="Broken" />
                                        </MyDiv>
                                        <Typography
                                            sx={
                                                {
                                                    padding: '0px',
                                                    fontFamily: poppinsFont.fontFamily,
                                                    fontSize: pxToRem(16),
                                                    color: palette.grey[900]
                                                }
                                            }
                                        >
                                            {item.topic_name}
                                        </Typography>
                                        <Link to={`/viewpdf/${item.url}`}>
                                            <Stack direction={'row'} position={'absolute'} right={'10px'}>
                                                <Typography
                                                    color={palette.primary.main}
                                                    fontFamily={poppinsFont.fontFamily}
                                                    fontSize={pxToRem(14)}
                                                    fontWeight={400}
                                                    fontStyle={'normal'}
                                                    lineHeight={'normal'}
                                                >
                                                    Start
                                                </Typography>
                                                <MyDiv sx={{
                                                    width: '14px',
                                                    height: '14px',
                                                    borderRadius: '5px',
                                                    marginTop: '4px',
                                                    marginLeft: '8px'
                                                }}>
                                                    <img src={VectorBlue} alt="Broken" />
                                                </MyDiv>
                                            </Stack>
                                        </Link>
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                            <Divider />
                        </Stack >
                    );
                })}
        </>
    );
}