import { Box, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LeaderBoardDrawer from './LeaderBoardDrawer';
import LeaderBoardCard from '../../../components/common/LeaderBoardCard';
import { calendarText } from "../../../pages/DummyStyles/UserProfileStyles";
import { useState } from "react";
export default function LeaderBoard() {

    //Toggling the Drawer Should be handled in the store.
    const [state, setState] = useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <Box sx={{
            width: 'auto',
            position: 'relative',
            padding: '0px',
        }}>
            <Box display={'flex'} direction={'row'} justifyContent={'space-between'}>
                <Typography sx={calendarText}>
                    LeaderBoard
                </Typography>
                <ChevronRightIcon
                    sx={{
                        fontSize: '24px',
                    }}
                    onClick={toggleDrawer('right', true)}
                />
            </Box>
            <LeaderBoardDrawer state={state} toggleDrawer={toggleDrawer} />

            <Box
                sx={
                    {
                        height: '447px',
                        bgcolor: '#FFF',
                        borderRadius: '10px',
                        border: '1px solid #F4F6F8',
                        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                    }
                }
            >
                <LeaderBoardCard isDrawer={false} />
            </Box>
        </Box>
    );
}