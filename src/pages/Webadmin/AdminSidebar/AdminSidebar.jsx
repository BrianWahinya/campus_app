import React, {useContext, useEffect, useState} from 'react';

import AdminSideBarItem from './AdminSidebarItem.jsx';

import '../css/adminsidebar.css';
import logo from '../assets/images/white-logo.png';
import LogoutIcon from '../assets/icons/logout.svg';
import LocalStorageCtx from '../../../contexts/LocalStorage.jsx';

function AdminSideBar ({ menu }) {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    const [active, setActive] = useState(2);

    useEffect(() => {
        setLocalContent(lc => ({...lc, admin_entity: "schools"}))
    }, [])

    const logout = () => {
        localStorage.removeItem("creds")
        setLocalContent((lc) => ({...lc, entity:"home"}))
    }

    return(
        <nav className='adminsidebar'>
            <div className='adminsidebar-container'>
                <div className='adminsidebar-logo-container'>
                    <img
                        src={logo}
                        alt="logo" />
                </div>

                <div className='adminsidebar-container'>
                    <div className='adminsidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} >
                                <AdminSideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='adminsidebar-footer' onClick={logout} >
                        <span className='adminsidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='adminsidebar-item-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AdminSideBar;