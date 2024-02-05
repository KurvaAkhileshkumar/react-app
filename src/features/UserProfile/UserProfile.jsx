import Typography from '@mui/material/Typography';
import { poppinsFont } from "../../theme/typography";
import palette from "../../theme/palette";
import typography from "../../theme/typography";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { userProfileText } from "../../pages/DummyStyles/UserProfileStyles";

export default function UserProfile() {
    const profilePicLink = useSelector((state) => state.assessmentsReducer.profile.profilePic)
    const name = useSelector((state) => state.assessmentsReducer.profile.name)
    const email = useSelector((state) => state.assessmentsReducer.profile.email)
    return (
        <>
            <Box sx={{
                margin: '0px',
                padding: '0px',
                bgcolor: '#FFF'
            }}>
                {/* UserProfileText */}
                <Typography sx={userProfileText}>
                    User profile
                </Typography>

                {/* UserProfileCard */}
                <Box
                    sx={{
                        height: '70px',
                        bgcolor: '#FFF',
                        marginBottom: '20px',
                        borderRadius: '10px',
                        border: '1px solid #F4F6F8',
                        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '10px',
                            marginLeft: '15px'
                        }}
                    >
                        <img
                            style={{
                                width: 'auto',
                                height: '48px',
                                borderRadius: '4px'
                            }}
                            src={profilePicLink} alt="" />
                        <Box direction={'column'}>
                            <Box>
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
                            </Box>
                            <Box>
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
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    );
}
