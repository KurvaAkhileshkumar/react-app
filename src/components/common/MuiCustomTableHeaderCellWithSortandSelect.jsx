import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  TableCell,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

const options = [
  { id: 1, value: 'Timeout' },
  { id: 2, value: 'Interrupted' },
  { id: 3, value: 'On Submit' },
  { id: 4, value: 'Tabswitch' },
]

const ITEM_HEIGHT = 48

const MuiCustomTableHeaderCellWithSortandSelect = ({
  itemData,
  index,
}) => {
  const theme = useTheme()
  return (
    <>
      <TableCell
        sx={{
          height: '30px',
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          gap={'0.5rem'}
          sx={{ height: '20px' }}
        >
          <Typography
            variant='body2'
            sx={{
              color: theme.palette.grey[500],
              lineHeight: '1rem',
            }}
          >
            {itemData}
          </Typography>
        </Stack>
      </TableCell>
    </>
  )
}

export default MuiCustomTableHeaderCellWithSortandSelect
