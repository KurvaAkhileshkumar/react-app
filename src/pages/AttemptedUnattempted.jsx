import { MyDiv } from "../components/myStyledComponents/styledComponents";
import { Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { attemptedUnattemptedText, circleIcon } from "./RecentAssessmentsStyles";
import InputLabel from '@mui/material/InputLabel';
import { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";


export default function AttemptedUnattempted() {
    const [isClicked, setIsClicked] = useState(false)
    const subjectsArray = [1, 2, 3, 4]
    function subjectsHandler() {
        setIsClicked((isClicked) => !isClicked)
    }
    return (
        <>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                spacing={2}
                sx={attemptedUnattemptedText}
            >
                <Stack>
                    <MyDiv>
                        <CircleIcon sx={{ ...circleIcon, color: 'blue', }} />
                        Attempted
                    </MyDiv>
                </Stack>
                <Stack>
                    <MyDiv>
                        <CircleIcon sx={{ ...circleIcon, color: 'red', }} />
                        Unattempted
                    </MyDiv>
                </Stack>
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
                        paddingTop: '2px'
                    }
                }>subjects</InputLabel>
                <KeyboardArrowDownIcon sx={{
                    cursor: 'pointer',
                    position: 'relative',
                    left: '-12px',
                    color: palette.grey[400],
                    fontSize: '24px'
                }} onClick={subjectsHandler} />
            </Stack>
            {isClicked && <FormControl sx={{
                position: 'absolute',
                right: '30px',
                top: '40px'
            }}>
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
            </FormControl>}
        </>
    );
}