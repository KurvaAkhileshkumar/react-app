import { Box, Typography, Skeleton } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LeaderBoardDrawer from './LeaderBoardDrawer';
import LeaderBoardCard from '../../../components/common/LeaderBoardCard';
import { useState } from "react";
import { useSelector } from "react-redux";
import { poppinsFont, pxToRem } from "../../../theme/typography";
import palette from "../../../theme/palette";
export default function LeaderBoard() {

    //Toggling the Drawer Should be handled in the store.
    const leaderBoardData = useSelector((state) => state.assessmentsReducer.leaderBoardData)
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
                <Typography sx={{
                    width: '319px',
                    color: palette.grey[800],
                    fontFamily: poppinsFont.fontFamily,
                    fontSize: pxToRem(20),
                    fontStyle: 'normal',
                    lineHeight: pxToRem(28),
                    textAlign: 'start',
                    marginBottom: '10px',
                }}>
                    LeaderBoard
                </Typography>
                <ChevronRightIcon
                    sx={{
                        fontSize: '24px',
                    }}
                    onClick={toggleDrawer('right', true)}
                />
            </Box>
            {leaderBoardData ? <Box
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
            </Box> : <Skeleton variant='rounded' height='447px' />}
            <LeaderBoardDrawer state={state} toggleDrawer={toggleDrawer} />
        </Box>
    );
}