import { MyDiv } from "../../components/myStyledComponents/styledComponents";
import { Stack } from "@mui/material";
import document from '../../assets/document.svg'
import presentationChart from '../../assets/presention-chart.svg'
import Typography from '@mui/material/Typography';
import palette from "../../theme/palette";
import { continueReadingCardTestStyles } from './CourseLayoutStyles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

const icons = [document, presentationChart, presentationChart]
export default function ContinueReadingCard({ continueReadingData }) {
    return (
        <>
            {
                continueReadingData?.map((item, index) => {
                    return (
                        <MyDiv key={index}>
                            <MyDiv sx={
                                {
                                    width: '285px',
                                    height: '80px',

                                }
                            }>
                                <Stack direction={'row'} gap={'15px'}
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
                                    <MyDiv sx={{
                                        width: '60px',
                                        height: '60px',
                                        padding: '15px',
                                        borderRadius: '5px',
                                        background: '#DFE3E8'
                                    }}>
                                        <img src={icons[index]} alt="Broken" />
                                    </MyDiv>
                                    <MyDiv
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
                                    </MyDiv>
                                    <Link to={`/viewpdf/${encodeURIComponent(item.url)}`}>
                                        <ArrowForwardIcon
                                            sx={{
                                                width: '20px',
                                                height: '15px',
                                                marginTop: '25px',
                                                alignContent: 'flex-start',
                                                strokeWidth: '2px',

                                            }}
                                        /></Link>
                                </Stack>
                            </MyDiv>
                        </MyDiv>
                    );
                })
            }
        </>
    );
}