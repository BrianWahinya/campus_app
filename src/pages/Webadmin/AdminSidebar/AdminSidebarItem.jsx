import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import LocalStorageCtx from "../../../contexts/LocalStorage";

import '../css/adminsidebar.css';

const AdminSidebarItem = ({ item, active }) => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    const [hover, setHover] = useState(false);

    const setAdminEntity = (e) => {
        setLocalContent(lc => ({...lc, admin_entity: item.title.toLowerCase()}))
    }
    return (
        <Link className={localContent.admin_entity === item.title.toLowerCase() ? 'adminsidebar-item-active' : 'adminsidebar-item'} onClick={setAdminEntity} >
            <img 
                src={item.icon}
                alt={`icon-${item.icon}`}
                className='adminsidebar-item-icon' />
            <span className='adminsidebar-item-label'>{item.title}</span>
        </Link>
    )
}

export default AdminSidebarItem