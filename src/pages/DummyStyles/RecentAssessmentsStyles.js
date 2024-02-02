import palette from '../../theme/palette'
import { poppinsFont, pxToRem } from '../../theme/typography'
import typography from '../../theme/typography'

export const recentAssessmentsText = {
  marginTop: '16px',
  marginBottom: '13px',
  marginLeft: '23px',
  textAlign: 'start',
  color: palette.grey[900],
  fontFamily: poppinsFont.fontFamily,
  fontSize: pxToRem(20),
  fontStyle: 'normal',
  fontWeight: typography.fontWeightMedium,
  lineHeight: '28px',
}

export const avgPerformanceText = {
  textAlign: 'start',
  marginLeft: '23px',
  color: palette.grey[600],
  fontFamily: poppinsFont.fontFamily,
  fontSize: pxToRem(14),
  fontStyle: 'normal',
  fontWeight: typography.fontWeightMedium,
  lineHeight: '10px',
}

export const attemptedUnattemptedText = {
  position: 'relative',
  top: '-40px',
  left: '0px',
  color: '#161C24',
  fontFamily: poppinsFont.fontFamily,
  fontSize: pxToRem(14),
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
}

export const circleIcon = {
  width: '8px',
  height: '8px',
  marginRight: '5px',
}
