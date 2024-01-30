import React from 'react'
import { TableRow } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import MuiCustomTableHeaderCellWithSortandSelect from './MuiCustomTableHeaderCellWithSortandSelect'
import palette from '../../theme/palette';

const MuiCustomTableHeaderRowWithSortandSelect = ({
  headerArray,
}) => {

  const theme = useTheme()
  return (
    <TableRow
      sx={{
        color: palette.grey[100],
        padding: '0px',
        margin: '0px',
        background: theme.palette.grey[100],
        borderRadius: '10px',
        height: '31px',
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
