import { Box } from "@mui/material";
import MuiCustomChipCount from "../../../components/common/MuiCustomChipCount";
import Typography from '@mui/material/Typography';

import { poppinsFont, pxToRem } from "../../../theme/typography";
import palette from "../../../theme/palette";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import CourseSkeleton from "../../../components/common/CourseSkeleton";

const chipColors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']
const chipTextColor = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']
export default function Courses() {

    const coursesData = useSelector((state) => state.assessmentsReducer.coursesData)
    const navigate = useNavigate()
    const handleClick = (index) => {
        navigate(`courses/${index + 1}`)
        window.scrollTo(0, 0)
    }
    return (
        <>
            {coursesData ?
                coursesData.map((item, index) => {
                    return (
                        <Box display={'flex'} flexDirection={'column'} gap={'14px'}
                            onClick={() => handleClick(index)}
                            sx={
                                {
                                    cursor: 'pointer',
                                    width: {
                                        md: '180px',
                                        lg: '255px',
                                        xl: '255px'
                                    },
                                    border: '1px solid #F4F6F8',
                                    borderRadius: '10px',
                                }
                            }
                        >
                            <Box height={'183px'}
                                sx={
                                    {
                                        width: {
                                            md: '180px',
                                            lg: '100%',
                                            xl: '100%'
                                        },
                                    }
                                }
                            >
                                <img
                                    style={{
                                        borderRadius: '10px 10px 0px 0px',
                                        width: '100%',
                                        height: '100%',

                                    }}
                                    src={item.image} alt="" />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                                <MuiCustomChipCount
                                    width={'max-content'}
                                    height={'20px'}
                                    label={item.tag}
                                    fontSize={'12px'}
                                    background={chipColors[index]}
                                    color={chipTextColor[index]}
                                />
                                <Typography
                                    sx={{
                                        height: '70px',
                                        maxWidth: {
                                            md: '170px',
                                            lg: '250px'
                                        },
                                        color: palette.grey[900],
                                        textAlign: 'start',
                                        fontFamily: poppinsFont.fontFamily,
                                        fontSize: {
                                            md: pxToRem(10),
                                            lg: pxToRem(14)
                                        },
                                        fontWeight: 600,
                                        lineHeight: '20px',
                                        letterSpacing: '-0.14px',
                                        padding: '0px 14px  14px',
                                        overflow:
                                        {
                                            md: 'hidden',
                                        },
                                        whiteSpace: {
                                            ms: 'nowrap'
                                        },
                                        textOverflow: {
                                            md: 'ellipsis'
                                        }
                                    }}
                                >{item.name}</Typography>
                            </Box>
                        </Box>
                    );
                }) : <CourseSkeleton />}
        </>
    );

}
