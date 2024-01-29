import palette from '../../theme/palette'
import typography, { pxToRem, poppinsFont } from '../../theme/typography'

export const titleStyles = {
    color: palette.grey[900],
    fontFamily: poppinsFont.fontFamily,
    fontSize: pxToRem(25),
    fontWeight: typography.fontWeightMedium,
    lineHeight: '20px',
    letterSpacing: '-0.25px'
}
export const whatYouWillLearnStyles = {
    color: palette.info.contrastText,
    fontFamily: poppinsFont.fontFamily,
    fontSize: pxToRem(16),
    fontStyle: 'normal',
    fontWeight: typography.fontWeightMedium,
    lineHeight: 'normal',
    marginLeft: '135px'
}

export const continueReadingStyles = {
    color: palette.grey[900],
    fontFamily: poppinsFont.fontFamily,
    fontSize: pxToRem(20),
    fontStyle: 'normal',
    fontWeight: typography.fontWeightMedium,
    lineHeight: 'normal',
    marginLeft: '120px'
}

export const continueReadingCardTestStyles = {
    color: palette.grey[900],
    textEdge: 'cap',
    fontFamily: poppinsFont.fontFamily,
    fontSize: pxToRem(14),
    fontStyle: 'normal',
    fontWeight: typography.fontWeightRegular,
    fontHeight: 'normal',
    textAlign: 'start',
    paddingTop: '15px'
}