import React, { useEffect, useState } from 'react'
import { CustomNavbar, WebadminNavbar, Footer, ScrollToTop } from './components'
import LocalStorageCtx from './contexts/LocalStorage'

import { Courses, Departments, Home, News, Student, Webadmin, Error, Login, Academics, About, Contact } from './pages'

const contentObj = {
    home: <Home />,
    webadmin: <Webadmin />,
    login: <Login />,
    student: <Student />,
    news: <News />,
    academics: <Academics />,
    courses: <Courses />,
    about: <About />,
    contact: <Contact />,
    departments: <Departments />,
    error: <Error />
}

const Super = ({entity}) => {
    const [localContent, setLocalContent] = useState({
        entity: entity || 'home',
        lang: "en",
        openedItems: []
    });

    const checkWhichNavbar = (entity, elem) => {
        // console.log(entity)
        
        if(entity !== "webadmin"){
           return true 
        }
    }
    return <LocalStorageCtx.Provider value={{localContent, setLocalContent}}>
        {checkWhichNavbar(localContent.entity) && <CustomNavbar />}
        <section className='content'>{contentObj[localContent.entity]}</section>
        {checkWhichNavbar(localContent.entity) && <Footer /> }
        <ScrollToTop />
    </LocalStorageCtx.Provider>
}

export default Super;