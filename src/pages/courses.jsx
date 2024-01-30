import { Stack } from "@mui/material";
import MuiCustomChipCount from "../components/common/MuiCustomChipCount";
import Typography from '@mui/material/Typography';
import { MyDiv } from "../components/myStyledComponents/styledComponents";
import typography, { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import { Link } from 'react-router-dom'


export default function Courses({ coursesData }) {
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
                            <MyDiv
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
                            </MyDiv>
                            <Stack direction={'column'} gap={'10px'}>
                                <MuiCustomChipCount
                                    width={'max-content'}
                                    height={'20px'}
                                    label={item.tag}
                                    fontSize={'12px'}
                                />
                                <Typography
                                    sx={{
                                        width: '216px',
                                        height: '50px',
                                        color: palette.grey[900],
                                        textAlign: 'start',
                                        fontFamily: poppinsFont.fontFamily,
                                        fontSize: pxToRem(14),
                                        fontWeight: typography.fontWeightMedium,
                                        lineHeight: '20px',
                                        letterSpacing: '-0.14px',
                                        marginLeft: '20px',
                                        padding: '0px 14px  14px',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
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
//                 <MyDiv sx={{
//                     width: '244px',
//                 }}>
//                     <Item>Item 1</Item>
//                 </MyDiv>
//                 <MyDiv
//                     sx={{
//                         width: '244px',
//                     }}
//                 >
//                     <Item>Item 1</Item>
//                 </MyDiv>
//                 <MyDiv
//                     sx={{
//                         width: '244px',
//                     }}
//                 >
//                     <Item>Item 1</Item>
//                 </MyDiv>
//             </Stack>
//         </div>
//     );
// }