import { useContext, useEffect, useState } from 'react'
import { CustomModal, Loader } from '../../components';
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs';
import { DEPE } from '../../helpers/utils';
import SingleCourse from '../Academics/SingleCourse';

const { host, text, content } = configs;
const {popular_online} = text;
const fetch_url = `${host}/coursesGetAllByLang.php`;

const imgs = [
    'https://crc.losrios.edu/crc/main/img/page-assets/Body-Office-UniversalDetail-940x529/cac/business-and-computer-science-body.png',
    'https://tryengineering.org/wp-content/uploads/bigstock-School-Children-Learning-Codin-344363629-1024x645.jpg',
    'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/06203909/Computer-Science-vs-Software-Engineering.png'
]

const PopularCourses = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    const lang = localContent.lang;

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const changeEntity = (e) => {
        const id = e.target.id.slice(1).toLowerCase();
        // console.log(id);
        setLocalContent(lc => ({...lc, entity:id}));
        DEPE.scrollToTop();
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch(fetch_url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({lang: lang})
            })
            .then(response => response.json())
            .then(resp => {
                console.log('PopCoursesAll', resp);
                setIsLoading(false);
                const filterCourses = resp.response.filter((rs => rs.cs_id));
                setData(filterCourses.slice(4, 7));
            }).catch((e) => {
                setIsLoading(false);
            })
        }, 2000)
    }, [])

    const generatePopObj = (datos) => {
        return <>
            {datos.map((dt, idx) => <div className="col-lg-4 course_col">
              <div className="course">
                  <div className="course_image"><img src={imgs[idx]} alt=""/></div>
                  <div className="course_body">
                      <h3 className="course_title"><CustomModal btn={{text:dt.cs_name}} head={""} body={<SingleCourse course={dt} img={imgs[idx]}/>}/></h3>
                      <div className="course_teacher">{dt.dp_name}</div>
                      <div className="course_text">
                          <p>{dt.cs_desc.split(" ").slice(0, 30).join(" ")}...</p>
                      </div>
                  </div>
                  <div className="course_footer">
                      <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                          <div className="course_info">
                              <i className="fa fa-graduation-cap gp" aria-hidden="true"></i>
                          </div>
                          {/* <div className="course_info">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <span>5 Ratings</span>
                          </div> */}
                          <div className="course_price ml-auto"></div>
                      </div>
                  </div>
              </div>
          </div>)}
        </>
    }

  return <div className="courses">
  <div className="section_background parallax-window" data-parallax="scroll" data-image-src="images/courses_background.jpg" data-speed="0.8"></div>
  <div className="container">
      <div className="row">
          <div className="col">
              <div className="section_title_container text-center">
                  <h2 className="section_title">{popular_online.title[lang]}</h2>
                  <div className="section_subtitle"><p>{popular_online.message[lang]}</p></div>
              </div>
          </div>
      </div>
      <div className="row courses_row">
            {isLoading && <Loader />}
            {!isLoading && data.length < 1 && 'No courses available'}
            {!isLoading && data.length > 0 && generatePopObj(data) }
      </div>
      <div className="row">
          <div className="col">
              <div className="courses_button trans_200"><a role="button" onClick={changeEntity} id="aAcademics">{content.view_all_courses[lang]}</a></div>
          </div>
      </div>
  </div>
</div>
}

export default PopularCourses