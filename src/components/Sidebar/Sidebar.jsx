import { useContext } from 'react';
import LocalStorageCtx from '../../contexts/LocalStorage';
import { DEPE } from '../../helpers/utils';
import SingleCourse from '../../pages/Academics/SingleCourse';
import CustomModal from '../CustomModal/CustomModal';
import Loader from '../Loader/Loader';
import './css/sidebar.css';

const imgs = [
    'https://www.skyfallblue.com/wp-content/uploads/2017/08/Marketing-Strategy-scaled.jpg',
    'https://www.springboard.com/blog/wp-content/uploads/2020/07/what-are-data-structures-and-algorithms.png',
    'https://www.eecs.mit.edu/wp-content/uploads/2021/06/compscihero-1024x545.jpg',
    'https://www.vegaitglobal.com/media/dv4l0gel/fundamental-data-structures-computational-complexity-blog.jpeg',
    'https://media.licdn.com/dms/image/C4D12AQFeqZIrL2SG3w/article-cover_image-shrink_720_1280/0/1526915102578?e=2147483647&v=beta&t=aCOuYKQ8jPRb-I_g72FpAcrouKBHgbuOOpwMFG-M3LE'
]

const Sidebar = ({dataSide}) => {
  return <div className="sidebar">

  {/* Categories */}
  <div className="sidebar_section">
      <div className="sidebar_section_title">Categories</div>
      <div className="sidebar_categories">
          <ul>
              <li><a>Art & Design</a></li>
              <li><a>Business</a></li>
              <li><a>IT & Software</a></li>
              <li><a>Languages</a></li>
              <li><a>Programming</a></li>
          </ul>
      </div>
  </div>

  {/* Latest Course */}
  <div className="sidebar_section">
      <div className="sidebar_section_title">Latest Courses</div>
      <div className="sidebar_latest">
            {dataSide.map((dc, idx) => { 
                if(dc.cs_name){
                    return <div key={idx} className="latest d-flex flex-row align-items-start justify-content-start">
                        <div className="latest_image"><div><img src={imgs[idx]} alt="" /></div></div>
                        <div className="latest_content">
                            <div className="latest_title"><a role="button">{dc.cs_name}</a></div>
                            <div className="latest_price"><CustomModal btn={{text: 'View'}} head={""} body={<SingleCourse />}/></div>
                        </div>
                    </div>
                }}
            )}
      </div>
  </div>

  {/* Banner */}
  <div className="sidebar_section">
      <div className="sidebar_banner d-flex flex-column align-items-center justify-content-center text-center">
          <div className="sidebar_banner_background" style={{backgroundImage: `url(${"images/banner_1.jpg"})`}}></div>
          <div className="sidebar_banner_overlay"></div>
          <div className="sidebar_banner_content">
              <div className="banner_title">Choose A Course</div>
              <div className="banner_button"><a>Apply Now</a></div>
          </div>
      </div>
  </div>
</div>
}

export default Sidebar