import React from 'react'
import { TableRow } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import MuiCustomTableHeaderCellWithSortandSelect from './MuiCustomTableHeaderCellWithSortandSelect'

const MuiCustomTableHeaderRowWithSortandSelect = ({
  headerArray,
}) => {

  const theme = useTheme()
  return (
    <TableRow
      sx={{
        background: theme.palette.grey[100],
        borderRadius: '5px',
        height: '30px',
      }}
    >
      {headerArray?.map((header, i) => {
        return (
          <MuiCustomTableHeaderCellWithSortandSelect
            key={i}
            itemData={header}
            index={i}
          />
        )
      })}
    </TableRow>
  )
}

export default MuiCustomTableHeaderRowWithSortandSelect
