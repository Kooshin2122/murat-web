//
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
//
export default function AccountMenu() {
    const router = useRouter()
    const { userInfo } = useSelector((state) => state.globalSlice);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const showLoginPage = () => {
        router.push('login')
    }
    let names = 'Abdirahman'
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {
                            userInfo.isLogin ?
                                <Avatar sx={{ width: 32, height: 32, backgroundColor: '#25aae1' }}>
                                    {userInfo.userName.slice(0, 1)}
                                </Avatar>
                                :
                                <Avatar sx={{ width: 32, height: 32, }} />
                        }
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    userInfo.isLogin ?
                        <Box>
                            <MenuItem sx={{ display: 'flex', flexDirection: 'column', rowGap: 2, alignItems: 'center', textAlign: 'center' }}>
                                <Avatar sizes="large" />
                                Abdirahman Abdirashid Ahmed
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Box>
                        :
                        <Box>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <PersonAddIcon fontSize="small" />
                                </ListItemIcon>
                                Create New Account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={showLoginPage}>
                                <ListItemIcon>
                                    <LoginIcon fontSize="small" />
                                </ListItemIcon>
                                Login
                            </MenuItem>
                        </Box>
                }
            </Menu>
        </React.Fragment>
    );
}
