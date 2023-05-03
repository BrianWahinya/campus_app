
import { Breadcrumbs } from '../../components';
import './css/news.css';
const News = () => {
	const generateNewsItemImg = (idx) => {
		return <div className="blog_post trans_200">
		<div className="blog_post_image"><img src={`images/blog_${idx}.jpg`} alt="" /></div>
		<div className="blog_post_body">
			<div className="blog_post_title"><a href="blog_single.html">Here’s What You Need to Know About Online Testing</a></div>
			<div className="blog_post_meta">
				<ul>
					<li><a href="#">admin</a></li>
					<li><a href="#">november 11, 2017</a></li>
				</ul>
			</div>
			<div className="blog_post_text">
				<p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
			</div>
		</div>
	</div>
	}
	const generateNewsItemVideo = (idx) => {
		return <div className="blog_post trans_200">
			<div className="blog_post_video_container">
				<video className="blog_post_video video-js" data-setup='{"controls": true, "autoplay": false, "preload": "auto", "poster": "images/blog_4.jpg"}'>
					<source src="images/mov_bbb.mp4" type="video/mp4" />
					<source src="images/mov_bbb.ogg" type="video/ogg" />
					Your browser does not support HTML5 video.
				</video>
			</div>
			<div className="blog_post_body">
				<div className="blog_post_title"><a href="blog_single.html">Building Skills Outside the Classroom With New Ways</a></div>
				<div className="blog_post_meta">
					<ul>
						<li><a href="#">admin</a></li>
						<li><a href="#">november 11, 2017</a></li>
					</ul>
				</div>
				<div className="blog_post_text">
					<p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
				</div>
			</div>
		</div>
	}
	const generateNewsItemNoMedia = (idx) => {
		return  <div className="blog_post trans_200">
			<div className="blog_post_body">
				<div className="blog_post_title"><a href="blog_single.html">With Changing Students and Times</a></div>
				<div className="blog_post_meta">
					<ul>
						<li><a href="#">admin</a></li>
						<li><a href="#">november 11, 2017</a></li>
					</ul>
				</div>
				<div className="blog_post_text">
					<p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
				</div>
			</div>
		</div>
	}
  return <>
  <Breadcrumbs page="News"/>
  <div className="blog">
  <div className="container">
	  <div className="row">
		  <div className="col">
			  <div className="blog_post_container">
				{generateNewsItemImg(1)}
				{generateNewsItemImg(2)}
				{generateNewsItemImg(3)}
				{generateNewsItemImg(4)}
				{generateNewsItemImg(5)}
			  
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