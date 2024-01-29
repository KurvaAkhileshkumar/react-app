import React from 'react'
import { TableRow } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import MuiCustomTableHeaderCellWithSortandSelect from './MuiCustomTableHeaderCellWithSortandSelect'

const MuiCustomTableHeaderRowWithSortandSelect = ({
  headerArray,
  sortHandler,
  selectHandler,
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
            isSortable={header.isSortable}
            isSelectable={header.isSelectable}
            arrayLength={headerArray.length}
            sortHandler={sortHandler}
            selectHandler={selectHandler}
          />
        )
      })}
    </TableRow>
  )
}

export default MuiCustomTableHeaderRowWithSortandSelect
