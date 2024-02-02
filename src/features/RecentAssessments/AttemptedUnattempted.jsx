import { Box } from '@mui/material';
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
    const [isClicked, setIsClicked] = useState(false)
    const subjectsArray = [1, 2, 3, 4]
    function subjectsHandler() {
        setIsClicked((isClicked) => !isClicked)
    }
    return (
        <>
            <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-evenly'}
            >
                <Box>
                    <CircleIcon sx={{ ...circleIcon, color: 'blue', }} />
                    Attempted
                </Box>
                <Box>
                    <CircleIcon sx={{ ...circleIcon, color: 'red', }} />
                    Unattempted
                </Box>
                <InputLabel sx={
                    {
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
                <KeyboardArrowDownIcon sx={{
                    cursor: 'pointer',
                    color: palette.grey[400],
                    fontSize: pxToRem(24)
                }} onClick={subjectsHandler} />
            </Box>
            {isClicked && <FormControl sx={{
                position: 'absolute',
                right: '30px',
                top: '40px'
            }}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{
                        background: '#FFF',
                    }}
                >
                    {subjectsArray.map((index) => {
                        return <FormControlLabel sx={{
                            padding: '0px',
                            margin: '0px'
                        }} value={`subject0${index}`} control={<Radio />} label={`Subject 0${index}`} />
                    })}
                </RadioGroup>
            </FormControl>}
        </>
    );
}