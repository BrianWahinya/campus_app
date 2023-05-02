import { useContext, useEffect } from 'react'
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/main.css";
import { DEPE } from '../../helpers/utils';

const { motto, content, text } = configs;
const { select_course, select_cert, search } = content;

const Main = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    const generateForm = (idx) => {
        return <form key={idx} className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center justify-content-start">
                {/* <input type="search" className="home_search_input" placeholder="Keyword Search" required="required" /> */}
                {/* <select className="dropdown_item_select home_search_input">
                    <option>{select_cert[lang]}</option>
                    <option>Diploma</option>
                    <option>Degree</option>
                    <option>Masters</option>
                    <option>Phd</option>
                </select>
                <select className="dropdown_item_select home_search_input">
                    <option>{select_course[lang]}</option>
                    <option>Course A</option>
                    <option>Course B</option>
                </select> */}
            </div>
            {/* <button type="submit" className="home_search_button">{search[lang]}</button> */}
        </form>
    }

    const settings = {
        className: "row",
        autoplay: true,
        infinite: true,
        rtl: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplaySpeed: 3000,
        fade: false,
        useTransform: false
    }

  return <div className="home">
    <div className="home_slider_container">
    <Slider {...settings}>
        <div className="owl-item">
              <div className="home_slider_background" style={{backgroundImage: `url(${"https://brescia.uwo.ca/communications/img/wallpaper/buc_wallpaper_desktop_01.jpg"})`}}></div>
              <div className="home_slider_content">
                  <div className="container">
                      <div className="row">
                          <div className="col text-center">
                              <div className="home_slider_title">{motto[lang]}</div>
                              <div className="home_slider_subtitle">{text.submotto[lang]}</div>
                              <div className="home_slider_form_container">
                                    {generateForm(2)}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
        <div className="owl-item">
            <div className="home_slider_background" style={{backgroundImage: `url("https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")`}}></div>
            <div className="home_slider_content">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="home_slider_title">{motto[lang]}</div>
                            <div className="home_slider_subtitle">{text.submotto[lang]}</div>
                            <div className="home_slider_form_container">
                                {generateForm(1)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="owl-item">
            <div className="home_slider_background" style={{backgroundImage: `url(${"https://www.communications.uwo.ca/img/img-zoom-background/UC_03.png"})`}}></div>
            <div className="home_slider_content">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="home_slider_title">{motto[lang]}</div>
                            <div className="home_slider_subtitle">{text.submotto[lang]}</div>
                            <div className="home_slider_form_container">
                                {generateForm(3)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Slider>     
  </div>
</div>
}

export default Main