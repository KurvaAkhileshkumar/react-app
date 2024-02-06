import { Box, Button, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import CircleIcon from '@mui/icons-material/Circle';
import { circleIcon } from "../../pages/DummyStyles/RecentAssessmentsStyles";
import InputLabel from '@mui/material/InputLabel';
import { poppinsFont, pxToRem } from "../../theme/typography";
import palette from "../../theme/palette";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";


export default function AttemptedUnattempted() {

    const subjectsArray = [1, 2, 3, 4]
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Box
                display={'flex'}
                flexDirection={'row'}
            >
                <Box
                    sx={{
                        padding: '5px'
                    }}
                >
                    <CircleIcon sx={{ ...circleIcon, color: 'blue', }} />
                    Attempted
                </Box>
                <Box
                    sx={{
                        padding: '5px'
                    }}
                >
                    <CircleIcon sx={{ ...circleIcon, color: 'red', }} />
                    Unattempted
                </Box>
                <InputLabel sx={
                    {
                        padding: '5px',
                        paddingRight: '0px',
                        fontFamily: poppinsFont.fontFamily,
                        textEdge: 'cap',
                        fontSize: pxToRem(12),
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        textTransform: 'capitalize',
                        color: palette.grey[400],
                    }
                }>subjects</InputLabel>
                <KeyboardArrowDownIcon
                    onClick={handleClick}
                    sx={{
                        paddingTop: '5px',
                        cursor: 'pointer',
                        color: palette.grey[400],
                        fontSize: pxToRem(24)
                    }} />
            </Box>
            <Popover
                sx={{
                }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {subjectsArray.map((index) => {
                        return <FormControlLabel sx={{
                            padding: '0px',
                            margin: '0px'
                        }} value={`subject0${index}`} control={<Radio />} label={`Subject 0${index}`} />
                    })}
                </RadioGroup>
            </Popover>
        </>
    );
}
