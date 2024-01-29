
import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import palette from '../../theme/palette';
import { poppinsFont } from '../../theme/typography';

MuiCustomChipCount.defaultProps = {
  label: 0,
  selected: true,
  padding: '4px 6px 4px 6px',
  width: 'auto',
  height: '16px'
}

export default function MuiCustomChipCount({ width, height, label, selected, padding, ...props }) {
  return (
    <Chip sx={{
      fontFamily: poppinsFont.fontFamily,
      width: width,
      height: height,
      mb: '2px',
      background: palette.primary[100],
      color: '#0B58F5',
      fontSize: '12px',
      ml: '14px',
      ...props,
      '& .MuiChip-label': {
        p: padding,
      },
    }}
      label={label} />

  )
}