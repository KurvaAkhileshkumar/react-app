import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import { calendarText } from "./UserProfileStyles";
import LeaderBoardCard from '../components/common/LeaderBoardCard';
import { drawerStyles, rightItem3 } from './LayoutStyles';
import { MyDiv } from '../components/myStyledComponents/styledComponents';
import { useSelector } from 'react-redux';
export default function TemporaryDrawer({ state, toggleDrawer, data }) {
    const leaderBoardData = useSelector((state) => state.assessmentsReducer.leaderBoardData)
    const list = (anchor) => (
        <Box
            sx={
                {
                    padding: '0px',
                    margin: '0px',
                    maxWidth: '364px',
                    width: '100%px',
                    height: '100%',
                }
            }
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Stack direction={'row'}>
                <ArrowBackIcon
                    sx={{
                        cursor: 'pointer',
                        fontSize: '24px',
                        marginTop: '19px',
                        marginRight: '15px',
                        marginLeft: '27px'

                    }}
                    onClick={toggleDrawer(anchor, false)}
                />
                <Typography sx={calendarText} marginTop={'19px'}>
                    Leaderboard
                </Typography>
            </Stack>
            <MyDiv sx={drawerStyles}>
                <LeaderBoardCard data={data} isDrawer={true} />
            </MyDiv>
        </Box>


    );
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
