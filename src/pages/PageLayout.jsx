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
        <Box sx={{ flexGrow: 1 }} marginRight={'28px'} marginLeft={'108px'} marginTop={'28px'} height={'907px'}>
            <Grid container columnSpacing={3.75} sx={{
                marginLeft: '0px'
            }}>
                <Grid item xs={8} md={8} lg={8} height={'100%'} sx={{
                    maxWidth: '100%',
                    marginLeft: '0px',
                }}>
                    <Item height={'100%'} sx={{
                        padding: '0px'
                    }}>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Item sx={{
                        padding: '0px'
                    }}>xs=6 md=4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
