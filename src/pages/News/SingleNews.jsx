import { useContext } from 'react';
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs';
import './css/singlenews.css';

const {content} = configs;
const {posted_on, by} = content;

const SingleNews = ({data, imgs}) => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    console.log("single_news", data);
    const {title, author, description, created_on} = data;

    return <div className="blog_content">
        <div className="blog_title">{title}</div>
        <div className="blog_meta">
            <ul>
                <li>{posted_on[lang]} <a href="#">{created_on}</a></li>
                <li>{by[lang]} <a href="#">{author}</a></li>
            </ul>
        </div>
        <div className="blog_image"><img src="images/blog_single.jpg" alt=""/></div>
        <p>{description}</p>
        {/* <div className="blog_images">
            <div className="row">
                <div className="col-lg-6 blog_images_col"><div className="blog_image_small"><img src="images/blog_images_1.jpg" alt="" /></div></div>
                <div className="col-lg-6 blog_images_col"><div className="blog_image_small"><img src="images/blog_images_2.jpg" alt="" /></div></div>
            </div>
        </div> */}
    </div>
}

export default SingleNews