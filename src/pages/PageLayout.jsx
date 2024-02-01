import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PageLayout() {
    return (
        <Box marginRight={'28px'} marginLeft={'108px'} marginTop={'28px'} height={'907px'}>
            <Grid container columnSpacing={3.75} height={'907px'}>


                <Grid item xs={8} md={8} lg={8} height={'100%'}>
                    <Item sx={{
                        padding: '0px',
                        height: '352px',
                        bgcolor: 'red',
                        marginBottom: '20px',
                        borderRadius: '10px',
                    }}>Item 1</Item>
                    <Item sx={{
                        padding: '0px',
                        height: '535px',
                        bgcolor: 'yellow'
                    }}>Item 1</Item>
                </Grid>


                <Grid item xs={4} md={4} lg={4} height={'100%'}>
                    <Item sx={{
                        padding: '0px',
                        height: '108px',
                        bgcolor: 'red',
                        marginBottom: '20px'
                    }}>xs=6 md=4</Item>
                    <Item sx={{
                        padding: '0px',
                        height: '274px',
                        bgcolor: 'yellow',
                        marginBottom: '20px',
                    }}>xs=6 md=4</Item>
                    <Item sx={{
                        padding: '0px',
                        height: '485px',
                        bgcolor: 'red'
                    }}>xs=6 md=4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
