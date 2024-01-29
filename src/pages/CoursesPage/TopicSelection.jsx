import { Stack } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useState } from "react";
import { poppinsFont, pxToRem } from "../../theme/typography";
import palette from "../../theme/palette";

const arr = [1, 2, 3, 4, 5]
export default function TopicSelection() {
    return (
        <>
            {
                arr.map((index) => {
                    return (
                        <Stack key={index}
                            direction={'column'}
                            sx={
                                {
                                    position: 'relative',
                                    width: '504px',
                                    marginLeft: '136px',
                                }
                            }
                        >
                            <Stack direction={'row'}>
                                <Typography
                                    sx={
                                        {
                                            fontFamily: poppinsFont.fontFamily,
                                            fontSize: pxToRem(16),
                                            color: palette.grey[400],
                                        }
                                    }
                                >Euler and Hamilton Paths</Typography>
                                <ExpandMoreIcon
                                    sx={{
                                        cursor: 'pointer',
                                        color: palette.grey[400],
                                    }}
                                />
                            </Stack>
                            <Divider />
                        </Stack>
                    );
                })
            }
        </>
    );
}