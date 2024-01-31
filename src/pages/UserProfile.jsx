import { MyDiv } from "../components/myStyledComponents/styledComponents";
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import { poppinsFont, pxToRem } from "../theme/typography";
import palette from "../theme/palette";
import typography from "../theme/typography";
import { useSelector } from "react-redux";

export default function UserProfile({ name, email }) {
    const profilePicLink = useSelector((state) => state.assessmentsReducer.profilePicLink)
    return (
        <>
            <Stack direction={'row'}>
                <img
                    style={{
                        height: '38px',
                        borderRadius: '4px'
                    }}
                    src={profilePicLink} alt="IMAGE BROKEN" />
                <Stack direction={'column'} height={'28px'}>
                    <MyDiv>
                        <Typography
                            sx={
                                {
                                    color: palette.grey[800],
                                    fontFamily: poppinsFont.fontFamily,
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: typography.fontWeightMedium,
                                    lineHeight: '24px',
                                    marginLeft: '10px',
                                    textAlign: 'start',
                                    alignItems: 'start',
                                }
                            }
                        >{name}</Typography>
                    </MyDiv>
                    <MyDiv>
                        <Typography
                            sx={
                                {
                                    color: palette.grey[400],
                                    fontFamily: poppinsFont.fontFamily,
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    marginLeft: '10px',
                                    lineHeight: '16px'
                                }
                            }
                        >{email}</Typography>
                    </MyDiv>
                </Stack>
            </Stack>
        </>
    );
}