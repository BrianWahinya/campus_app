import { useContext } from 'react';
import LocalStorageCtx from '../../contexts/LocalStorage';
import './css/singleactivity.css'

const SingleActivity = ({data, imgs}) => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    return <div className="blog_content">
        <div className="blog_title">‘I Kept Thinking of Antioch’: Long Before #MeToo, a times Video Journalist Remembered</div>
        <div className="blog_meta">
            <ul>
                <li>Post on <a href="#">May 5, 2018</a></li>
                <li>By <a href="#">admin</a></li>
            </ul>
        </div>
        <div className="blog_image"><img src="images/blog_single.jpg" alt=""/></div>
        <p>Times Insider delivers behind-the-scenes insights into how news, features and opinion come together at The New York Times.Before I could spend the night in my younger sister’s dorm room at Antioch College in Yellow Springs, Ohio — before I could read the spines of her textbooks or drink a disgusting but lovingly prepared vodka/sparkling wine/Red Bull — I had to report to security:</p>
        <div className="blog_quote d-flex flex-row align-items-center justify-content-start">
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            <div>“All sexual interactions at Antioch College must be consensual. Consent means verbally asking and verbally giving or denying consent.”</div>
        </div>
        <p>It was 2004, a decade before the phrase “affirmative consent” made it onto news shows or big university campuses. I was 21, a junior at another college. I think it was the first time I had heard people talk about consent as something you could ask for verbally. It was definitely the first time I’d ever seen it written out like that.</p>
        <p>The first-of-its-kind affirmative consent policy was written by students in 1990 as a response to campus rape. But the first thing anyone who was at Antioch in the ’90s wanted to talk to me about was the media mayhem. When The Associated Press ran an article on the policy with the headline “No huggy, no kissy without a ‘yes’ at Antioch College,” it ignited a cultural firestorm.</p>
        <div className="blog_subtitle">All the current students</div>
        <p>I followed up with for the video told me that being sexual with an Antioch student is different from being sexual with someone else. They spoke of a common language everyone is taught beginning at orientation, so that when one student starts asking questions of another student in the midst of sexual activity, it doesn’t seem so out there.</p>
        <div className="blog_images">
            <div className="row">
                <div className="col-lg-6 blog_images_col"><div className="blog_image_small"><img src="images/blog_images_1.jpg" alt="" /></div></div>
                <div className="col-lg-6 blog_images_col"><div className="blog_image_small"><img src="images/blog_images_2.jpg" alt="" /></div></div>
            </div>
        </div>
        <p>But what is it like to be an 18-year-old and have the expectation set that you will talk during sex? I, for one, have never been part of a community with that expectation. Spending time at Antioch’s orientation, I thought about how that might change your sexual interactions for the rest of your life.</p>
    </div>
}

export default SingleActivity