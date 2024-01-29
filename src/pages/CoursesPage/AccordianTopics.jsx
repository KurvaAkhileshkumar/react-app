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
const arr = [1, 2, 3, 4, 5]
export default function AccordianTopics({ unitsData }) {
    console.log('executing')
    // unitsData?.filter((item) => item.unit_id == unitId ? item.topics : '')    
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
            <Stack direction={'row'} gap={'42.5px'} marginTop={'25px'} marginLeft={'143px'} marginBottom={'25px'}>
                {unitsData?.map((item, index) => <Typography sx={{ fontFamily: typography.fontFamily, fontSize: pxToRem(15), fontWeight: '600', fontStyle: 'normal', opacity: '0.5' }} key={index} onClick={() => unitIdClickHandler(index)}>{item.unit_name}</Typography>)}
            </Stack>




            {
                intialTopicState[topicIndex]?.map((item, index) => {
                    return (
                        <Stack key={index} direction={'column'}
                            sx={
                                {
                                    marginLeft: '130px',
                                    position: 'relative',
                                    width: '504px',
                                    background: '#FFF'
                                }
                            }
                        >
                            <Accordion>
                                <AccordionSummary
                                    sx={
                                        {
                                            fontFamily: poppinsFont.fontFamily,
                                            fontSize: pxToRem(16),
                                            color: palette.grey[400]
                                        }
                                    }
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                >{item.topic_name}
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={
                                        {
                                            display: 'flex',
                                            width: '504px',
                                            fontFamily: poppinsFont.fontFamily,
                                            fontSize: pxToRem(16),
                                            color: palette.grey[400]
                                        }
                                    }
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </AccordionDetails>
                            </Accordion>
                            <Divider />
                        </Stack>
                    );
                })}
        </>
    );
}