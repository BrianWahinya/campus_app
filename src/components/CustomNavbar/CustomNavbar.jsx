import { useContext, useEffect, useState } from "react";
import LocalStorageCtx from "../../contexts/LocalStorage";
import CustomModal from "../CustomModal/CustomModal";
import Login from "../../pages/Login/Login";
import configs from "../../helpers/configs"

const {brand, address, question, content} = configs;
const {home, academics, contact, about, news, staff_login } = content;

const CustomNavbar = () => {
  const {localContent, setLocalContent} = useContext(LocalStorageCtx);
  // const lang = localContent.lang;
  // const [currLang, setCurrLang] = useState(lang);
  
  const changeLang = (e) => {
    // console.log(e.target);
    // setCurrLang(ln => ln==='en'? 'sw':'en');
    setLocalContent(lc => ({...lc, lang: lc.lang==='en'? 'sw':'en'}))
  }

  const changeEntity = (e) => {
    const id = e.target.id.slice(1).toLowerCase();
    // console.log(id);
    setLocalContent(lc => ({...lc, entity:id}))
  }

  return <>
  <header className="header">
			
      {/* Top Bar */}
      <div className="top_bar">
        <div className="top_bar_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                  <ul className="top_bar_contact_list">
                    <li><div className="question">{question[localContent.lang]}</div></li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <div>{address.phone}</div>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      <div>{address.email}</div>
                    </li>
                  </ul>
                  <div className="top_bar_login ml-auto">
                    <div className="login_button"><CustomModal btn={{text:staff_login[localContent.lang]}} body={<Login />} size="sm"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>				
      </div>
  
      {/* Header Content */}
      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-start">
                <div className="logo_container">
                  <a href="#">
                    <div className="logo_text">{brand.slice(0,3)}<span>{brand.slice(3)}</span></div>
                  </a>
                </div>
                <nav className="main_nav_contaner ml-auto">
                  <ul className="main_nav">
                    <li className={localContent.entity === 'home'? "active": "" }><a onClick={changeEntity} id="aHome">{home[localContent.lang]}</a></li>
                    <li className={localContent.entity === 'about'? "active": "" }><a onClick={changeEntity} id="aAbout">{about[localContent.lang]}</a></li>
                    <li className={localContent.entity === 'academics'? "active": "" }><a onClick={changeEntity} id="aAcademics">{academics[localContent.lang]}</a></li>
                    <li className={localContent.entity === 'news'? "active": "" }><a onClick={changeEntity} id="aNews">{news[localContent.lang]}</a></li>
                    {/* <li className={localContent.entity === 'home'? "active": "" }><a href="blog.html">Blog</a></li>
                    <li className={localContent.entity === 'home'? "active": "" }><a href="#">Page</a></li> */}
                    <li className={localContent.entity === 'contact'? "active": "" }><a onClick={changeEntity} id="aContact">{contact[localContent.lang]}</a></li>
                  </ul>
                  
                  <div className="search_button"><i className="fa fa-search" aria-hidden="true"></i></div>
                  <div className="divLangBtn">
                    <label className="btnLang" htmlFor="toggleLang">
                      <input id="toggleLang" type="checkbox" onChange={changeLang} value={localContent.lang}/>
                      <span className="sliderLang"></span>
                    </label>
                  </div>
  
                  {/* Hamburger */}
  
                  {/* <div className="shopping_cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div> */}
                  
                  <div className="hamburger menu_mm">
                    <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                  </div>
                </nav>
  
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Header Search Panel */}
      <div className="header_search_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                <form action="#" className="header_search_form">
                  <input type="search" className="search_input" placeholder="Search" required="required" />
                  <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>			
      </div>			
    </header>
  
    {/* Menu */}
  
    <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
      <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
      <div className="search">
        <form action="#" className="header_search_form menu_mm">
          <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
          <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
            <i className="fa fa-search menu_mm" aria-hidden="true"></i>
          </button>
        </form>
      </div>
      <nav className="menu_nav">
        <ul className="menu_mm">
          <li className="menu_mm"><a onClick={changeEntity} id="aHome">{home[localContent.lang]}</a></li>
          <li className="menu_mm"><a onClick={changeEntity} id="aAbout">{about[localContent.lang]}</a></li>
          <li className="menu_mm"><a onClick={changeEntity} id="aAcademics">{academics[localContent.lang]}</a></li>
          <li className="menu_mm"><a onClick={changeEntity} id="aNews">{news[localContent.lang]}</a></li>
          <li className="menu_mm"><a onClick={changeEntity} id="aContact">{contact[localContent.lang]}</a></li>
        </ul>
      </nav>
    </div>
  
  </>

}

export default CustomNavbar