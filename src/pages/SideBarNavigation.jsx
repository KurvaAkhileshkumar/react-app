import { NavLink } from 'react-router-dom'
import { Stack, Box } from '@mui/material'
import palette from '../theme/palette';
import logo from '../assets/Group.jpg'
import elementEqual from '../assets/element-equal.jpg'
import book from '../assets/book.jpg'
import logoutImg from '../assets/logout.jpg'
import { authSliceActions } from '../Store/Store';
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

export default function SibeBarNavigation() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(authSliceActions.logout())
        navigate('/')
    }
    return (
        <>
            <Stack width={'80px'} height={'100%'}
                sx={
                    {
                        background: palette.grey[100],
                        position: 'absolute',
                        top: '0px',
                    }
                }
            >
                <Box
                    sx={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        width: '80px',
                        height: '50px',
                        marginLeft: '19px',
                        marginBottom: '30px',
                        marginTop: '22px'
                    }}
                >
                    <NavLink
                        to=''
                    >
                        <img src={logo} alt="Logo Icon" />
                    </NavLink>
                </Box>
                <Stack gap={'16px'}>
                    <Box
                        sx={{
                            width: '80px',
                            height: '50px',
                            padding: '8px 18px 8px 19px'
                        }}
                    >
                        <Box
                            sx={{
                                background: palette.primary[200],
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                padding: '8px'
                            }}
                        >
                            <NavLink to=''>
                                <img src={elementEqual} alt="Home page icon" />
                            </NavLink>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '80px',
                            height: '50px',
                            padding: '8px 18px 8px 19px'
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                padding: '8px'
                            }}
                        >
                            <NavLink to=''>
                                <img src={book} alt="Courses Icon" />
                            </NavLink>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '0',
                            width: '80px',
                            height: '50px',
                            padding: '8px 18px 8px 19px'
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                padding: '8px',
                                cursor: 'pointer'
                            }}
                        >
                            <img src={logoutImg} alt="Log out Icon" onClick={logoutHandler} />
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}