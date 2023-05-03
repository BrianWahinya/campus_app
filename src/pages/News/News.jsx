import { useContext, useEffect, useState } from 'react';
import LocalStorageCtx from '../../contexts/LocalStorage';
import { Breadcrumbs, CustomModal } from '../../components';
import SingleNews from './SingleNews';
import './css/news.css';
import configs from '../../helpers/configs';

const {host} = configs;
const fetch_url = `${host}/newsGetAllByLang.php`;

const News = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

	const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                // console.log('newsByLang', resp);
                setIsLoading(false);
                setData(dt => {
                    return resp.response;
                })
            })
        }, 2000)
        
    },[lang])

	// const generateNewsItemImg = (idx) => {
	// 	const title = "Here’s What You Need to Know About Online Testing";
	// 	const author = "admin";
	// 	const date = "november 11, 2017";
	// 	return <div className="blog_post trans_200">
	// 	<div className="blog_post_image"><img src={`images/blog_${idx}.jpg`} alt="" /></div>
	// 	<div className="blog_post_body">
	// 		<div className="blog_post_title"><CustomModal btn={{text:title}} head={""} body={<SingleNews />}/></div>
	// 		<div className="blog_post_meta">
	// 			<ul>
	// 				<li><CustomModal btn={{text:author}} head={""} body={<SingleNews />}/></li>
	// 				<li><CustomModal btn={{text:date}} head={""} body={<SingleNews />}/></li>
	// 			</ul>
	// 		</div>
	// 		<div className="blog_post_text">
	// 			<p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
	// 		</div>
	// 	</div>
	// </div>
	// }
	// const generateNewsItemVideo = (idx) => {
	// 	return <div className="blog_post trans_200">
	// 		<div className="blog_post_video_container">
	// 			<video className="blog_post_video video-js" data-setup='{"controls": true, "autoplay": false, "preload": "auto", "poster": "images/blog_4.jpg"}'>
	// 				<source src="images/mov_bbb.mp4" type="video/mp4" />
	// 				<source src="images/mov_bbb.ogg" type="video/ogg" />
	// 				Your browser does not support HTML5 video.
	// 			</video>
	// 		</div>
	// 		<div className="blog_post_body">
	// 			<div className="blog_post_title"><a href="blog_single.html">Building Skills Outside the Classroom With New Ways</a></div>
	// 			<div className="blog_post_meta">
	// 				<ul>
	// 					<li><a href="#">admin</a></li>
	// 					<li><a href="#">november 11, 2017</a></li>
	// 				</ul>
	// 			</div>
	// 			<div className="blog_post_text">
	// 				<p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// }
	// const generateNewsItemNoMedia = (idx) => {
	// 	return  <div className="blog_post trans_200">
	// 		<div className="blog_post_body">
	// 			<div className="blog_post_title"><a href="blog_single.html">With Changing Students and Times</a></div>
	// 			<div className="blog_post_meta">
	// 				<ul>
	// 					<li><a href="#">admin</a></li>
	// 					<li><a href="#">november 11, 2017</a></li>
	// 				</ul>
	// 			</div>
	// 			<div className="blog_post_text">
	// 				<p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// }
  return <>
  <Breadcrumbs page="News"/>
  <div className="blog">
  <div className="container">
	  <div className="row">
		  <div className="col">
			  <div className="blog_post_container">
				{data.map((item, idx) => {
					const {title, author, description, created_on} = item;
					return <div key={idx} className="blog_post trans_200">
						<div className="blog_post_image"><img src={`images/blog_${idx + 1}.jpg`} alt="" /></div>
						<div className="blog_post_body">
							<div className="blog_post_title"><CustomModal btn={{text:title}} head={""} body={<SingleNews data={item} />}/></div>
							<div className="blog_post_meta">
								<ul>
									<li><CustomModal btn={{text:author}} head={""} body={<SingleNews data={item} />}/></li>
									<li><CustomModal btn={{text:created_on}} head={""} body={<SingleNews data={item} />}/></li>
								</ul>
							</div>
							<div className="blog_post_text">
								<p>{description}</p>
							</div>
						</div>
					</div>
				})}

				{/* {generateNewsItemImg(1)}
				{generateNewsItemImg(2)}
				{generateNewsItemImg(3)}
				{generateNewsItemImg(4)}
				{generateNewsItemImg(5)} */}
			  
			  </div>
		  </div>
	  </div>
	  <div className="row">
		  <div className="col text-center">
			  <div className="load_more trans_200"><a href="#">load more</a></div>
		  </div>
	  </div>
  </div>
</div>
  
  </>
}

export default News