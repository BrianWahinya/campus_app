import { useContext } from 'react';
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs'
import './css/singlecourse.css'

const {content} = configs;
const {curriculum, description} = content;

const SingleCourse = ({course, img}) => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    // console.log(course)
    return <div className="singlecourse">
    <div className="container">
        <div className="row">

            {/* Course */}
            <div className="col-lg-12">
                
                <div className="course_container">
                    <div className="course_title">{course.cs_name}</div>
                    {/* Course Image */}
                    <div className="course_image"><img src={img} alt={course.cs_name} /></div>

                    {/* Course Tabs */}
                    <div className="course_tabs_container">
                        <div className="tabs d-flex flex-row align-items-center justify-content-start">
                            <div className="tab active">{description[lang]}</div>
                            <div className="tab">{curriculum[lang]}</div>
                        </div>
                        <div className="tab_panels">

                            {/* Description */}
                            <div className="tab_panel active">
                                <div className="tab_panel_title">{course.dp_name}</div>
                                <div className="tab_panel_content">
                                    <div className="tab_panel_section">
                                        <div className="tab_panel_subtitle">{course.sl_name}</div>
                                    </div>
                                    <div className="tab_panel_text">
                                        <p>{course.cs_desc}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Curriculum */}
                            <div className="tab_panel tab_panel_2">
                                <div className="tab_panel_content">
                                    <div className="tab_panel_title">Software Training</div>
                                    <div className="tab_panel_content">
                                        <div className="tab_panel_text">
                                            <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                                        </div>

                                        {/* Dropdowns */}
                                        <ul className="dropdowns">
                                            <li className="has_children">
                                                <div className="dropdown_item">
                                                    <div className="dropdown_item_title"><span>Lecture 1:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                    <div className="dropdown_item_text">
                                                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="dropdown_item">
                                                            <div className="dropdown_item_title"><span>Lecture 1.1:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                            <div className="dropdown_item_text">
                                                                <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dropdown_item">
                                                            <div className="dropdown_item_title"><span>Lecture 1.2:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                            <div className="dropdown_item_text">
                                                                <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has_children">
                                                <div className="dropdown_item">
                                                    <div className="dropdown_item_title"><span>Lecture 2:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                    <div className="dropdown_item_text">
                                                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="dropdown_item">
                                                            <div className="dropdown_item_title"><span>Lecture 2.1:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                            <div className="dropdown_item_text">
                                                                <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dropdown_item">
                                                            <div className="dropdown_item_title"><span>Lecture 2.2:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                            <div className="dropdown_item_text">
                                                                <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="dropdown_item">
                                                    <div className="dropdown_item_title"><span>Lecture 3:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                    <div className="dropdown_item_text">
                                                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown_item">
                                                    <div className="dropdown_item_title"><span>Lecture 4:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                    <div className="dropdown_item_text">
                                                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown_item">
                                                    <div className="dropdown_item_title"><span>Lecture 5:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                    <div className="dropdown_item_text">
                                                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default SingleCourse