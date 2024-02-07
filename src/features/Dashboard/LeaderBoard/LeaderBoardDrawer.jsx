import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import { calendarText } from "../../../pages/DummyStyles/UserProfileStyles";
import LeaderBoardCard from '../../../components/common/LeaderBoardCard';
import { drawerStyles, } from '../../../pages/DummyStyles/LayoutStyles';
export default function LeaderBoardDrawer({ state, toggleDrawer, data }) {

    const list = (anchor) => (
        <Box
            sx={
                {
                    padding: '0px',
                    margin: '0px',
                    width: '470px',
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
            <Box sx={drawerStyles}>
                <LeaderBoardCard data={data} isDrawer={true} />
            </Box>
        </Box>


    );
    return (
        <>
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
        </>
    );
}
