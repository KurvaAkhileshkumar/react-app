import { Box } from '@mui/material'
import React from 'react'

const CustomCard = ({ children, width = '100%', height = '100%' }) => {
    return (
        <Box sx={{
            width: width,
            height: height,
            padding: '0px',
            paddingTop: '11px',
            paddingLeft: '11px',
            paddingRight: '10px',
            backgroundColor: theme => theme.palette.grey[1000],
            borderRadius: '8px',
            boxShadow: '0px 12px 15px -4px rgba(16, 24, 40, 0.04);'
        }}>
            <>{children}</>
        </Box>
    )
}

export default CustomCard