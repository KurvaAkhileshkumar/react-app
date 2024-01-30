
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

export default function MuiCustomChipCount({ width, color, fontSize, height, background, label, selected, padding, ...props }) {
  return (
    <Chip sx={{
      fontFamily: poppinsFont.fontFamily,
      width: width,
      height: height,
      mb: '2px',
      background: background,
      color: color,
      fontSize: fontSize,
      ml: '14px',
      ...props,
      '& .MuiChip-label': {
        p: padding,
      },
    }}
      label={label} />

  )
}
