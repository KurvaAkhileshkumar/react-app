import { Stack, Box } from "@mui/material";
import MuiCustomChipCount from "../components/common/MuiCustomChipCount";
import Typography from '@mui/material/Typography';

import { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const chipColors = ['#E7EEFE', '#FFF0D8', '#EDFAEE', '#FFF0D8']
const chipTextColor = ['#0B58F5', '#D89932', '#4ECD56', '#D89932']
export default function Courses() {

    const coursesData = useSelector((state) => state.assessmentsReducer.coursesData)
    return (
        <>
            {coursesData.map((item, index) => {
                return (
                    <Link key={index} to={`courses/${index + 1}`} style={{ textDecoration: 'none' }}>
                        <Stack direction={'column'} gap={'14px'}
                            sx={
                                {
                                    border: '1px solid #F4F6F8',
                                    borderRadius: '10px',
                                }
                            }
                        >
                            <Box
                                sx={{
                                    width: '244px',
                                    height: '183px',
                                }}
                            >
                                <img
                                    style={{
                                        borderRadius: '10px 10px 0px 0px',
                                        width: '244px',
                                        height: '183px',

                                    }}
                                    src={item.image} alt="" />
                            </Box>
                            <Stack direction={'column'} gap={'10px'}>
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
                                        height: '50px',
                                        color: palette.grey[900],
                                        textAlign: 'start',
                                        fontFamily: poppinsFont.fontFamily,
                                        fontSize: pxToRem(14),
                                        fontWeight: 600,
                                        lineHeight: '20px',
                                        letterSpacing: '-0.14px',
                                        padding: '0px 14px  14px',
                                    }}
                                >{item.name}</Typography>
                            </Stack>
                        </Stack>
                    </Link>
                );
            })}
        </>
    );

}

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import { MyDiv } from '../components/myStyledComponents/styledComponents';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// export default function DirectionStack() {
//     return (
//         <div>
//             <Stack direction="row" spacing={2}>
//                 <Box sx={{
//                     width: '244px',
//                 }}>
//                     <Item>Item 1</Item>
//                 </Box>>
//                 <Box
//                     sx={{
//                         width: '244px',
//                     }}
//                 >
//                     <Item>Item 1</Item>
//                 </Box>>
//                 <Box
//                     sx={{
//                         width: '244px',
//                     }}
//                 >
//                     <Item>Item 1</Item>
//                 </Box>>
//             </Stack>
//         </div>
//     );
// }