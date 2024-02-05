import palette from '../../theme/palette'
import typography, { pxToRem, poppinsFont } from '../../theme/typography'

export const titleStyles = {
    color: palette.grey[900],
    fontFamily: poppinsFont.fontFamily,
    fontSize: pxToRem(25),
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: '-0.25px'
}
export const whatYouWillLearnStyles = {
    color: palette.info.contrastText,
    fontFamily: poppinsFont.fontFamily,
    fontSize: pxToRem(16),
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '10px',
    opacity: 1
}

export const continueReadingStyles = {
    color: palette.grey[900],
    fontFamily: poppinsFont.fontFamily,
    fontSize: pxToRem(20),
    fontStyle: 'normal',
    fontWeight: typography.fontWeightMedium,
    lineHeight: 'normal',
    marginLeft: '56px'
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


export const sliderStyles = {
    // width: '350px',
    // height: '21px',
    // marginTop: '18px',
    // marginLeft: '85px',
    // alignItems: 'center',
    // display: 'flex'
}

export const avgStyles = {
    // width: '50px',
    // fontSize: '14px',
    // fontstyle: 'normal',
    // fontWeight: '400',
    // lineHeight: 'normal',
    // marginLeft: '12px'
}