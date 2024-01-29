import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'
import palette from '../theme/palette';
import logo from '../assets/Group.jpg'
import elementEqual from '../assets/element-equal.jpg'
import book from '../assets/book.jpg'
import logout from '../assets/logout.jpg'
import { MyDiv } from '../components/myStyledComponents/styledComponents'
export default function SibeBarNavigation() {
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
                <MyDiv
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
                        to='/'
                    >
                        <img src={logo} alt="Logo Icon" />
                    </NavLink>
                </MyDiv>
                <Stack gap={'16px'}>
                    <MyDiv
                        sx={{
                            width: '80px',
                            height: '50px',
                            padding: '8px 18px 8px 19px'
                        }}
                    >
                        <MyDiv
                            sx={{
                                background: palette.primary[200],
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                padding: '8px'
                            }}
                        >
                            <NavLink to='/'>
                                <img src={elementEqual} alt="Home page icon" />
                            </NavLink>
                        </MyDiv>
                    </MyDiv>
                    <MyDiv
                        sx={{
                            width: '80px',
                            height: '50px',
                            padding: '8px 18px 8px 19px'
                        }}
                    >
                        <MyDiv
                            sx={{
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                padding: '8px'
                            }}
                        >
                            <NavLink to='/courses'>
                                <img src={book} alt="Courses Icon" />
                            </NavLink>
                        </MyDiv>
                    </MyDiv>

                    <MyDiv
                        sx={{
                            position: 'absolute',
                            bottom: '0',
                            width: '80px',
                            height: '50px',
                            padding: '8px 18px 8px 19px'
                        }}
                    >
                        <MyDiv
                            sx={{
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                padding: '8px'
                            }}
                        >
                            <NavLink to='/'>
                                <img src={logout} alt="Home page icon" />
                            </NavLink>
                        </MyDiv>
                    </MyDiv>
                </Stack>
            </Stack>
        </>
    );
}