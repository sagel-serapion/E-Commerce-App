
import {Box, Typography, Menu, MenuItem, styled} from '@mui/material';
import { useState } from 'react';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component =styled(Menu)`
    margin-top: 5px;
    `
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 10px;
    display: flex;
    align-items: center;
`


const Profile =({account,setAccount}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
     }

    const handleClose = () => {
        setOpen(false);
    }

    const logout = () => {
        // Logic for logout can be added here
        setAccount('');
    }

    return(
        <>
            <Box onClick={(e) => handleClick(e)}>
                <Typography style={{marginTop :2,cursor:'pointer'}}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose(); logout();}}>
                <PowerSettingsNewIcon fontSize='small' color='primary' />
                <Logout>Logout</Logout>

                </MenuItem>

            </Component>
        </>
    )
}


export default Profile;