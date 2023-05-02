
import { useContext } from 'react';
import { Breadcrumbs } from '../../components';
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs';
import './css/about.css';

const { university } = configs;
const { welcome, mission, vision, values} = university;

const About = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    const lang = localContent.lang;
  return <>
  <Breadcrumbs />
  <div className="about">
  <div className="container">
      <div className="row">
          <div className="col">
              <div className="section_title_container text-center">
                  <h2 className="section_title">{welcome.title[lang]}</h2>
                  <div className="section_subtitle"><p>{welcome.msg[lang]}</p></div>
              </div>
          </div>
      </div>
      <div className="row about_row">
          
          {/* About Item */}
          <div className="col-lg-4 about_col about_col_left">
              <div className="about_item">
                  <div className="about_item_image"><img src="images/about_1.jpg" alt="" /></div>
                  <div className="about_item_title"><a href="#">{mission.title[lang]}</a></div>
                  <div className="about_item_text">
                      <p>{mission.msg[lang]}</p>
                  </div>
              </div>
          </div>

          {/* About Item */}
          <div className="col-lg-4 about_col about_col_middle">
              <div className="about_item">
                  <div className="about_item_image"><img src="images/about_2.jpg" alt="" /></div>
                  <div className="about_item_title"><a href="#">{vision.title[lang]}</a></div>
                  <div className="about_item_text">
                      <p>{vision.msg[lang]}</p>
                  </div>
              </div>
          </div>

          {/* About Item */}
          <div className="col-lg-4 about_col about_col_right">
              <div className="about_item">
                  <div className="about_item_image"><img src="images/about_3.jpg" alt="" /></div>
                  <div className="about_item_title"><a href="#">{values.title[lang]}</a></div>
                  <div className="about_item_text">
                      <p>{values.msg[lang]}</p>
                  </div>
              </div>
          </div>

      </div>
  </div>
</div>
  
  </>
}

export default About