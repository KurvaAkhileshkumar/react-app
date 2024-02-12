import { Box } from "@mui/material";
import document from '../../../assets/document.svg'
import presentationChart from '../../../assets/presention-chart.svg'
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import typography from "../../../theme/typography";
import { poppinsFont, pxToRem } from "../../../theme/typography";
import palette from "../../../theme/palette";
import { courseSliceActions } from "../../../Store/Store";

const icons = [document, presentationChart, presentationChart]
export default function ContinueReadingCard() {
    const continueReadingCardData = useSelector((state) => state.coursesReducer.continueReadingCardData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const goToPdf = (name, url) => {
        window.scrollTo(0, 0)
        dispatch(courseSliceActions.setPdf({ name, url }))
        navigate(`/pdf/viewpdf/${encodeURIComponent(url)}`)
    }
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
                    sx={{
                        color: palette.grey[900],
                        fontFamily: poppinsFont.fontFamily,
                        fontSize: pxToRem(20),
                        fontStyle: 'normal',
                        fontWeight: typography.fontWeightMedium,
                        lineHeight: 'normal',
                        marginLeft: '56px'
                    }}
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
                                                    sx={{
                                                        color: palette.grey[900],
                                                        textEdge: 'cap',
                                                        fontFamily: poppinsFont.fontFamily,
                                                        fontSize: pxToRem(14),
                                                        fontStyle: 'normal',
                                                        fontWeight: typography.fontWeightRegular,
                                                        fontHeight: 'normal',
                                                        textAlign: 'start',
                                                        paddingTop: '15px'
                                                    }
                                                    }
                                                >
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                            <ArrowForwardIcon
                                                cursor={'pointer'}
                                                onClick={() => goToPdf(item.name, item.url)}
                                                sx={{
                                                    width: '20px',
                                                    height: '15px',
                                                    marginTop: '25px',
                                                    alignContent: 'flex-start',
                                                    strokeWidth: '2px',

                                                }}
                                            />
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