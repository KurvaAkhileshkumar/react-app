import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import typography, { poppinsFont, pxToRem } from '../../theme/typography';
import palette from '../../theme/palette';
import { useState } from 'react';
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import document from '../../assets/document.svg'
import VectorBlue from '../../assets/VectorBlue.svg'
import searchStatus from '../../assets/searchstatus.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';

const arr = [1, 2, 3, 4, 5]
export default function AccordianTopics() {


    const [topicIndex, setTopicIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)

    //Data from store
    const unitsData = useSelector((state) => state.coursesReducer.unitsData)
    let intialTopicState = ''
    if (unitsData !== undefined) {
        intialTopicState = unitsData?.map((item, index) => { if (index === topicIndex) return item.topics })
    }
    function unitIdClickHandler(id) {
        setTopicIndex(id)
    }
    return (
        <>
            <Box position={'relative'} display={'flex'} width={'600px'} flexDirection={'row'} marginTop={'25px'} marginLeft={'56px'} marginBottom={'25px'}>
                {unitsData?.map((item, index) =>
                    <Tabs sx={{
                        "& button": {
                            color: 'black!important',
                        }
                    }} key={index} value={index} onClick={() => unitIdClickHandler(index)}>
                        <Tab label={item.unit_name} value={index}
                            sx={
                                {
                                    fontFamily: typography.fontFamily,
                                    fontSize: pxToRem(15),
                                    fontWeight: '600',
                                    fontStyle: 'normal',
                                    opacity: '0.5'
                                }
                            } />
                    </Tabs>
                )}

                <Box
                    position={'absolute'}
                    top={'10px'}
                    right={'0px'}
                    display={'flex'}
                    flexDirection={'row'}
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
                    <Box sx={{
                        width: '17.514px',
                        borderRadius: '5px',
                        marginTop: '4px',
                        marginLeft: '8px',
                        marginBottom: '8px'
                    }}>
                        <img src={searchStatus} alt="Broken" />
                    </Box>
                    {/* <Typography
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
                    </Typography> */}

                    <TextField margin='0px' padding='0px' label="Search-topics" variant="standard" />
                </Box>
            </Box>




            {
                intialTopicState[topicIndex]?.map((item, index) => {
                    return (
                        <Box key={index} display={'flex'} flexDirection={'column'}
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
                                    boxShadow: 'none'
                                }}
                            >
                                <AccordionSummary
                                    sx={
                                        {
                                            padding: '0px',
                                            background: '#FFF',
                                            boxShadow: 'none',
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

                                {
                                    item.materials?.map((materialItems, materialItemsIndex) => {
                                        return (
                                            <AccordionDetails
                                                key={materialItemsIndex}
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
                                                <Box display={'flex'} flexDirection={'row'}>
                                                    <Box sx={{
                                                        width: '16px',
                                                        height: '16px',
                                                        borderRadius: '5px',
                                                        background: '#DFE3E8',
                                                        marginRight: '5px'
                                                    }}>
                                                        <img src={document} alt="Broken" />
                                                    </Box>
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
                                                        {materialItems.name}
                                                    </Typography>
                                                    <Link to={`/viewpdf/${encodeURIComponent(materialItems.url)}`}>
                                                        <Box display={'flex'} flexDirection={'row'} position={'absolute'} right={'10px'}>
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
                                                            <Box sx={{
                                                                width: '14px',
                                                                height: '14px',
                                                                borderRadius: '5px',
                                                                marginTop: '4px',
                                                                marginLeft: '8px'
                                                            }}>
                                                                <img src={VectorBlue} alt="Broken" />
                                                            </Box>
                                                        </Box>
                                                    </Link>
                                                </Box>
                                            </AccordionDetails>
                                        );
                                    })
                                }
                            </Accordion>
                            <Divider hard={1} />
                        </Box >
                    );
                })}
        </>
    );
}