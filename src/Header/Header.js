import './Header.css'
import { useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi'
import logo from '../logo.svg'

function Header() {

    const [setHeader, setHeaderState] = useState(false);

    const showHeader = () => setHeaderState(!setHeader);

    return(
        <div className={setHeader ? 'Header hd-shown' : 'Header'}>
            <div className={setHeader ? 'logo-container lc-shown' : 'logo-container'} >
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <div className={setHeader ? 'search-bar-container sb-shown' : 'search-bar-container'}>
                <div className={setHeader ? 'location-menu loc-shown' : 'location-menu'}>
                    <div className='title'>Location</div>
                    <div className='pholder'>Add location</div>
                </div>
                <div className={setHeader ? 'guest-menu gue-shown' : 'guest-menu'}>
                    <div className='title'>Guest</div>
                    <div className='pholder'>Add guest</div>
                </div>
                <div className={setHeader ? 'button bt-shown' : 'button'} onClick={showHeader}><BiSearchAlt/></div>
            </div>
        </div>
    );
}

export default Header;