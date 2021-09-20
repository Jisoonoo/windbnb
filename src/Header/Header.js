import './Header.css'
import Button from '@mui/material/Button'
import { useState } from 'react';
import Box from '@mui/material/Box'
import logo from '../logo.svg'
import {BiSearchAlt} from 'react-icons/bi'
import Stack from '@mui/material/Stack'

function Header() {
    
    const [isShown, setHeaderState] = useState(false)
    const [Timer, setTimerState] = useState(false)
    function open() {
        if(isShown) {
            setTimerState(!Timer)
            setTimeout(() => {
                setHeaderState(!isShown);
            }, 100);
        }
        else {
            setHeaderState(!isShown)
            setTimeout(() => {
                setTimerState(!Timer);
            }, 100);
        }
    }

    const buttonStyle = {
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #F2F2F2',
        borderRadius: '10px',
        boxShadow: '0px 1px 4px rgba(0,0,0,0.1)',
        transition: '0.4s',
        zIndex: '3',
        '&:hover': {
            boxShadow: '0px 3px 8px rgba(0,0,0,0.1)'
        }
    }

    return(
        <div className='Header'>
            <div className={isShown ? 'header active' : 'header'}/>
            <div className={Timer ? 'black-background hidden' : 'black-background'} onClick={open}/>
            <Box fullWidth sx={{display: 'flex', justifyContent: 'space-between', padding: '30px 0 30px 0'}}>
                <img src={logo} alt='logo'/>
                <Stack direction='row' spacing={0} onClick={open} sx={buttonStyle}>
                    <div className='first-input semi'>Add location</div>
                    <div className='second-input semi'>Add guest</div>
                    <div className='third-input semi'><BiSearchAlt/></div>
                </Stack>
            </Box>
        </div>
    );
}

export default Header;