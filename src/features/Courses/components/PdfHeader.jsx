import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Stack, Typography, Box, InputBase } from '@mui/material'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import pdfPresentation from '../../../assets/pdfPresentation.svg'
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";


const commonStyles = {
    cursor: 'pointer'
}

function PdfHeader({ pageNumber, numPages, scale, handleZoomIn, handleZoomOut, handleClose, handleRotation }) {

    const pdfName = useSelector((state) => state.coursesReducer.pdf.name)

    const [currPage, setCurrPage] = useState(pageNumber)
    const handleChange = (event) => {
        setCurrPage(event.target.value)
    }

    return (<>
        <Stack direction='row' sx={{ width: '309px', gap: '2rem' }} alignItems={'center'}>
            <ArrowBackIcon sx={{ ...commonStyles }} onClick={handleClose} />
            <Typography variant='subtitle2'>
                {pdfName}
            </Typography>
        </Stack>
        <Stack direction='row' sx={{ width: '437px' }} alignItems={'center'}>
            <Stack direction='row' sx={{ width: '114px' }} alignItems={'center'} justifyContent={'space-evenly'}>
                {/* <Typography variant='body2'>{pageNumber}</Typography> */}
                <Box padding={'0px'} margin={'0px'} width={'40px'}>
                    <InputBase
                        placeholder={pageNumber}
                        padding='0px'
                        margin='0px'
                        variant="outlined"
                        onChange={handleChange}
                    />
                </Box>
                <span>/</span>
                <Typography variant='body2'>{numPages}</Typography>
            </Stack>
            <Stack direction='row' sx={{ width: '180px' }} alignItems={'center'} justifyContent={'space-evenly'}>
                <RemoveIcon fontSize='medium' sx={{ ...commonStyles }} onClick={handleZoomOut} />
                <Typography>
                    {(scale * 100).toFixed(2)}%
                </Typography>
                <AddIcon fontSize='medium' sx={{ ...commonStyles }} onClick={handleZoomIn} />
            </Stack>
            <Stack direction='row' sx={{ width: '114px' }} alignItems={'center'} justifyContent={'space-evenly'}>
                <img src={pdfPresentation} alt="" style={{ ...commonStyles }} />
                <Rotate90DegreesCcwIcon sx={{ ...commonStyles }} onClick={handleRotation} />
            </Stack>
        </Stack>
    </>);
}

export default PdfHeader