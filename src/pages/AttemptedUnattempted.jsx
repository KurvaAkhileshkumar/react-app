import { MyDiv } from "../components/myStyledComponents/styledComponents";
import { Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { attemptedUnattemptedText, circleIcon } from "./RecentAssessmentsStyles";
export default function AttemptedUnattempted() {
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
            </Stack>
        </>
    );
}