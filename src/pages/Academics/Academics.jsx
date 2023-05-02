import { useContext, useEffect, useState } from 'react';
import { Breadcrumbs, CustomModal, Loader, Sidebar } from '../../components';
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs';
import { DEPE } from '../../helpers/utils';
import './css/academics.css';
import SingleCourse from './SingleCourse';

const {host} = configs;
const fetch_url = `${host}/coursesGetAllByLang.php`;
const Academics = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedData, setSelectedData] = useState([]);
    const [dataDep, setDataDep] = useState([]);
    const [dataCourses, setDataCourses] = useState([]);
    const [selectedDataSchools, setSelectedDataSchools] = useState([]);
    const [selectedSearch, setSelectedSearch] = useState({
        school: "all",
        department: "all",
        course: "all"
    })

    const imgs = [
        'https://www.springboard.com/blog/wp-content/uploads/2020/07/what-are-data-structures-and-algorithms.png',
        'https://www.vegaitglobal.com/media/dv4l0gel/fundamental-data-structures-computational-complexity-blog.jpeg',
        'https://www.eecs.mit.edu/wp-content/uploads/2021/06/compscihero-1024x545.jpg',
        'https://media.licdn.com/dms/image/C4D12AQFeqZIrL2SG3w/article-cover_image-shrink_720_1280/0/1526915102578?e=2147483647&v=beta&t=aCOuYKQ8jPRb-I_g72FpAcrouKBHgbuOOpwMFG-M3LE'
    ]

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
                // console.log('coursesByLang', resp.response);
                setIsLoading(false);
                setData(resp.response);
                setDataDep(resp.response);
                setDataCourses(resp.response);
                // setSelectedData(resp.response);
            })
        }, 2000)
        
    },[lang])


    useEffect(() => {
        // console.log("change school")
        const { school } = selectedSearch;
        // console.log(data.filter(dt => dt.sl_name.replace(/\s/g, "") === school))
        setDataDep(dt => (school === 'all')? data: data.filter(dt => dt.dp_name && dt.sl_name.replace(/\s/g, "") === school))
        setDataCourses(dt => (school === 'all')? data: data.filter(dt => dt.cs_name && dt.sl_name.replace(/\s/g, "") === school))
    },[selectedSearch.school])

    useEffect(() => {
        // console.log("change department")
        const { department } = selectedSearch;
        // console.log(dataDep.filter(dt => dt.dp_name.replace(/\s/g, "") === department))
        setDataCourses(dt => (department === 'all')? dataDep: dataDep.filter(dt => dt.cs_name && dt.dp_name.replace(/\s/g, "") === department))
    },[selectedSearch.department])

    const changeSchools = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSelectedSearch(sc => ({...sc, school: e.target.value.replace(/\s/g, "")}))
    }

    const changeDeps = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSelectedSearch(sc => ({...sc, department: e.target.value.replace(/\s/g, "")}))
    }

    const changeCourse = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSelectedSearch(sc => ({...sc, course: e.target.value.replace(/\s/g, "")}))
    }

    return <>
        <Breadcrumbs />
        <div className="courses">
        <div className="container">
        <div className="row">

          {/* Courses Main Content */}
          <div className="col-lg-8">
              <div className="courses_search_container">
                  <form action="#" id="courses_search_form" className="courses_search_form d-flex flex-row align-items-center justify-content-start">
                      {/* <input type="search" className="courses_search_input" placeholder="Search Courses" required="required" /> */}
                      <select id="schools_search_select" className="search_select courses_search_input" onChange={changeSchools} value={selectedSearch.school}>
                            <option value="all">All Schools</option>
                            {DEPE.unique(data, 'sl_name').map((nm, idx) => <option value={nm.replace(/\s/g, "")} key={idx}>{nm}</option>)}
                      </select>
                      <select id="departments_search_select" className="search_select courses_search_input" onChange={changeDeps} 
                        disabled={dataDep.length > 0? false: true }
                        value={selectedSearch.department}>
                        {
                            dataDep.length > 0 ? <>
                                <option value="all">All Departments</option>
                                {DEPE.unique(dataDep, 'dp_name').map((nm, idx) => nm && <option value={nm.replace(/\s/g, "")} key={idx}>{nm}</option>)}
                            </>:  <option>No Deparments</option>
                        }
                      </select>
                      <select id="courses_search_select" className="search_select courses_search_input"  onChange={changeCourse} 
                        disabled={dataDep.length < 1 ? true: dataCourses.length > 0? false: true }
                        value={selectedSearch.course}>
                        {
                            dataDep.length < 1 ? <option>No Courses</option>: dataCourses.length > 0 ? <>
                                <option value="all">All Courses</option>
                                {DEPE.unique(dataCourses, 'cs_name').map((nm, idx) => nm && <option value={nm.replace(/\s/g, "")} key={idx}>{nm}</option>)}
                            </>: <option>No Courses</option>
                        }
                      </select>
                  </form>
              </div>
              <div className="courses_container">
                  <div className="row courses_row">
                      
                    {/* Course */}
                    {isLoading && <Loader />}
                    {!isLoading && dataCourses.length < 1 && 'No courses available'}
                    {!isLoading && dataCourses.length > 0 && dataCourses.map((crs, idx) => {
                        // console.log(crs);
                        if(!crs || !crs.cs_name){
                            return;
                        }
                        const selectedImg = imgs[DEPE.randomNum(1, imgs.length - 1)];
                        return <div className="col-lg-6 course_col" key={idx}>
                            <div className="course">
                                <div className="course_image"><img src={selectedImg} alt="" /></div>
                                <div className="course_body">
                                    <h3 className="course_title">
                                        <CustomModal btn={{text: crs.cs_name}} head={""} body={<SingleCourse course={crs} img={selectedImg}/>}/>
                                    </h3>
                                    <div className="course_teacher">{crs.dp_name}</div>
                                    <div className="course_text">
                                        <p>{crs.cs_desc}</p>
                                    </div>
                                </div>
                                <div className="course_footer">
                                    <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                                        
                                        {/* <div className="course_info">
                                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                            <span>20 Student</span>
                                        </div>
                                        <div className="course_info">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <span>5 Ratings</span>
                                        </div> */}
                                        <div className="course_price ml-auto"><button className='btn btn-sm btnApply'>Apply</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                  </div>
                  <div className="row pagination_row">
                      <div className="col">
                          <div className="pagination_container d-flex flex-row align-items-center justify-content-start">
                              <ul className="pagination_list">
                                  <li className="active"><a href="#">1</a></li>
                                  <li><a href="#">2</a></li>
                                  <li><a href="#">3</a></li>
                                  <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                              </ul>
                              <div className="courses_show_container ml-auto clearfix">
                                  <div className="courses_show_text">Showing <span className="courses_showing">1-6</span> of <span className="courses_total">26</span> results:</div>
                                  <div className="courses_show_content">
                                      <span>Show: </span>
                                      <select id="courses_show_select" className="courses_show_select">
                                          <option>06</option>
                                          <option>12</option>
                                          <option>24</option>
                                          <option>36</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Courses Sidebar */}
          <div className="col-lg-4">
              <Sidebar dataSide={data.filter(item => item.cs_name).slice(0, 3)}/>
          </div>
      </div>
  </div>
</div>
  </>
  
 
}

export default Academics