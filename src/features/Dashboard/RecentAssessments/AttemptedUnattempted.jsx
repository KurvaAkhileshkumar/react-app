import { Box, Button, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import CircleIcon from '@mui/icons-material/Circle';
import { circleIcon } from "../../../pages/DummyStyles/RecentAssessmentsStyles";
import InputLabel from '@mui/material/InputLabel';
import { poppinsFont, pxToRem } from "../../../theme/typography";
import palette from "../../../theme/palette";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { assessmentsSliceActions } from '../../../Store/Store';


export default function AttemptedUnattempted() {


    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const subjects = useSelector((state) => state.assessmentsReducer.subjects)
    const selectedSubject = useSelector((state) => state.assessmentsReducer.selectedSubject)
    const handleSubject = (index) => {
        dispatch(assessmentsSliceActions.setSubject(index))
    }

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
                }>{subjects[selectedSubject]?.name}</InputLabel>
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
                    defaultValue={subjects[selectedSubject]?.name}
                    name="radio-buttons-group"
                >
                    {subjects.map((item, index) => {
                        return <FormControlLabel
                            key={index}
                            onChange={() => handleSubject(index)}
                            sx={{
                                padding: '0px',
                                paddingRight: '10px',
                                margin: '0px'
                            }}
                            value={item.name}
                            control={<Radio />}
                            label={item.name} />
                    })}
                </RadioGroup>
            </Popover>
        </>
    );
}
