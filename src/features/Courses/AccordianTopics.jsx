import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import typography, { poppinsFont, pxToRem } from '../../theme/typography'
import palette from '../../theme/palette'
import { useState } from 'react'
import { Box, InputBase } from '@mui/material'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import document from '../../assets/document.svg'
import VectorBlue from '../../assets/VectorBlue.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Search from '../../assets/Search'

export default function AccordianTopics() {

    const [topicIndex, setTopicIndex] = useState(0)


    function unitIdClickHandler(id) {
        setTopicIndex(id)
    }

    //Data from store
    const unitsData = useSelector((state) => state.coursesReducer.unitsData)

    let intialTopicState = ''

    if (unitsData !== undefined) {
        intialTopicState = unitsData?.map((item, index) => {
            if (index === topicIndex) return item.topics
        })
        console.log(intialTopicState)
    }
    const [searchInput, setSearchInput] = useState('')

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value)
    }
    return (
        <>
            <Box
                position={'relative'}
                display={'flex'}
                width={'600px'}
                flexDirection={'row'}
                marginTop={'25px'}
                marginLeft={'56px'}
                marginBottom={'25px'}
            >
                {unitsData?.map((item, index) => (
                    <Tabs key={index} value={topicIndex}>
                        <Tab
                            onClick={() => unitIdClickHandler(index)}
                            value={index}
                            label={item.unit_name}
                            sx={{
                                fontFamily: typography.fontFamily,
                                fontSize: pxToRem(15),
                                fontWeight: '600',
                                fontStyle: 'normal',
                                opacity: '0.5',
                            }}
                        />
                    </Tabs>
                ))}
                <InputBase
                    placeholder="Search topics"
                    startAdornment={<Search />}
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    sx={{
                        borderRadius: '6.64px',
                        border: '1px solid #F4F6F8',
                        background: '#F4F6F8',
                        display: 'flex',
                        height: '35px',
                        width: '144px',
                        padding: '7.589px 9.486px',
                        alignItems: 'center',
                        gap: '11.383px',
                        flexShrink: 0,
                        '&:hover': {
                            border: '1px solid #919EAB',
                        },
                    }}
                />
            </Box>

            {
                intialTopicState[topicIndex]?.map((item, index) => {
                    if (item.topic_name.toLowerCase().includes(searchInput.toLowerCase())) {
                        return (
                            <Box
                                key={index}
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{
                                    marginLeft: '56px',
                                    position: 'relative',
                                    width: '504px',
                                    background: '#FFF',
                                }}
                            >
                                <Accordion
                                    position={'relative'}
                                    sx={{
                                        border: '0px',
                                        background: '#FFF',
                                        boxShadow: 'none',
                                    }}
                                >
                                    <AccordionSummary
                                        sx={{
                                            padding: '0px',
                                            background: '#FFF',
                                            boxShadow: 'none',
                                            fontFamily: poppinsFont.fontFamily,
                                            fontSize: pxToRem(16),
                                            color: palette.grey[400],
                                            marginLeft: '5px',
                                        }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                    >
                                        {item.topic_name}
                                    </AccordionSummary>

                                    {item.materials?.map((materialItems, materialItemsIndex) => {
                                        return (
                                            <AccordionDetails
                                                key={materialItemsIndex}
                                                sx={{
                                                    padding: '0px 0px 12px 12px',
                                                    display: 'flex',
                                                    width: '504px',
                                                    fontFamily: poppinsFont.fontFamily,
                                                    fontSize: pxToRem(16),
                                                    color: palette.grey[400],
                                                }}
                                            >
                                                <Box display={'flex'} flexDirection={'row'}>
                                                    <Box
                                                        sx={{
                                                            width: '16px',
                                                            height: '16px',
                                                            borderRadius: '5px',
                                                            background: '#DFE3E8',
                                                            marginRight: '5px',
                                                        }}
                                                    >
                                                        <img src={document} alt="Broken" />
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            padding: '0px',
                                                            fontFamily: poppinsFont.fontFamily,
                                                            fontSize: pxToRem(16),
                                                            color: palette.grey[900],
                                                        }}
                                                    >
                                                        {materialItems.name}
                                                    </Typography>
                                                    <Link
                                                        to={`/pdf/viewpdf/${encodeURIComponent(
                                                            materialItems.url
                                                        )}`}
                                                    >
                                                        <Box
                                                            display={'flex'}
                                                            flexDirection={'row'}
                                                            position={'absolute'}
                                                            right={'10px'}
                                                        >
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
                                                            <Box
                                                                sx={{
                                                                    width: '14px',
                                                                    height: '14px',
                                                                    borderRadius: '5px',
                                                                    marginTop: '4px',
                                                                    marginLeft: '8px',
                                                                }}
                                                            >
                                                                <img src={VectorBlue} alt="Broken" />
                                                            </Box>
                                                        </Box>
                                                    </Link>
                                                </Box>
                                            </AccordionDetails>
                                        )
                                    })}
                                </Accordion>
                                <Divider hard={1} />
                            </Box>
                        )
                    }
                    return null
                })}
        </>
    )
}
