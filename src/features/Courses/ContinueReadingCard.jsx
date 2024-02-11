import { Box } from "@mui/material";
import document from '../../assets/document.svg'
import presentationChart from '../../assets/presention-chart.svg'
import Typography from '@mui/material/Typography';
import { continueReadingStyles, continueReadingCardTestStyles } from "../../pages/CoursesPage/CourseLayoutStyles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const icons = [document, presentationChart, presentationChart]
export default function ContinueReadingCard() {
    const continueReadingCardData = useSelector((state) => state.coursesReducer.continueReadingCardData)
    return (
        <>
            <Box
                display={'flex'}
                maxWidth={'auto'}
                flexDirection={'column'}
                marginTop={'40px'}
                alignItems={'flex-start'}
                gap={'10px'}
            >
                <Typography
                    sx={continueReadingStyles}
                >Continue reading</Typography>
                <Box marginLeft={'56px'} display={'flex'} flexDirection={'row'} gap={'22px'} flexWrap={'wrap'} >
                    {
                        continueReadingCardData?.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Box sx={
                                        {
                                            maxWidth: '285px',
                                            height: '80px',

                                        }
                                    }>
                                        <Box display={'flex'} flexDirection={'row'} gap={'15px'}
                                            sx={
                                                {
                                                    borderRadius: '10px',
                                                    border: '1px solid #F4F6F8',
                                                    background: '#FFF',
                                                    padding: '10px 27px 10px 10px',
                                                    boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                                                }
                                            }
                                        >
                                            <Box sx={{
                                                width: '60px',
                                                height: '60px',
                                                padding: '15px',
                                                borderRadius: '5px',
                                                background: '#DFE3E8'
                                            }}>
                                                <img src={icons[index]} alt="Broken" />
                                            </Box>
                                            <Box
                                                sx={
                                                    {
                                                        width: '135px',
                                                        height: '32px'
                                                    }
                                                }
                                            >
                                                <Typography
                                                    sx={continueReadingCardTestStyles}
                                                >
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                            <Link to={`/pdf/viewpdf/${encodeURIComponent(item.url)}`}>
                                                <ArrowForwardIcon
                                                    sx={{
                                                        width: '20px',
                                                        height: '15px',
                                                        marginTop: '25px',
                                                        alignContent: 'flex-start',
                                                        strokeWidth: '2px',

                                                    }}
                                                /></Link>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })
                    }
                </Box>
            </Box>
        </>
    );
}