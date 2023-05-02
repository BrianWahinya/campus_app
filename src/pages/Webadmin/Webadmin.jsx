import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LocalStorageCtx from '../../contexts/LocalStorage';
import AdminSideBar from './AdminSidebar/AdminSidebar';
import sidebar_menu from './AdminSidebar/sidebar-menu';

import "./css/webadmin.css"
import News from './News/News';
import Schools from './Schools/Schools';
import Activities from './Activities/Activities';
import Courses from './Courses/Courses';
import Departments from './Departments/Departments';
import Dashboard from './Dashboard/Dashboard';

const locals = {
  schools: <Schools />,
  news: <News />,
  activities: <Activities />,
  courses: <Courses />,
  departments: <Departments />,
  dashboard: <Dashboard />
}

const Webadmin = () => {
  const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;
  const navigate = useNavigate();
  const local_creds = JSON.parse(localStorage.getItem("creds"));
  // console.log(local_creds);
  if(!local_creds.status && !local_creds.token){
    setLocalContent(lc => ({...lc, entity: "home"}));
    navigate("/home");
  }
  useEffect(() => {
  }, [])

  return (
    <div className='webadmin-body dashboard-container'>
      <AdminSideBar menu={sidebar_menu} />
      <div className='dashboard-body'>
        {localContent?.admin_entity && locals[localContent?.admin_entity]}
      </div>
    </div>
  )
}

export default Webadmin