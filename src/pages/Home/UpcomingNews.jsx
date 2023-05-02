import { useContext, useEffect, useState } from "react";
import fetchNews from "../../api/fetchNews";
import { Loader } from "../../components";
import LocalStorageCtx from "../../contexts/LocalStorage";
import configs from "../../helpers/configs";

const { text, host } = configs;
const { title, message } = text.latest_news;
const fetch_url = `${host}/newsGetAllByLang.php`;

const UpcomingNews = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch(fetch_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({lang: lang})
            })
            .then(response => response.json())
            .then(resp => {
                console.log('newsByLang', resp);
                setIsLoading(false);
                setData(dt => {
                    return resp.response;
                })
            })
        }, 2000)
        
    },[lang])

    const configureNews1 = (item) => {

        return <div className="col-lg-7 news_col">
            {isLoading && <Loader />}
            {!isLoading && !item && 'No news present'}
            {!isLoading && item && <div className="news_post_large_container">
                <div className="news_post_large">
                    <div className="news_post_image"><img src="images/news_1.jpg" alt="" /></div>
                    <div className="news_post_large_title"><a href="blog_single.html">{item.title}</a></div>
                    <div className="news_post_meta">
                        <ul>
                            <li><a href="#">{item.author}</a></li>
                            <li><a href="#">{item.created_on}</a></li>
                        </ul>
                    </div>
                    <div className="news_post_text">
                        <p>{item.description}</p>
                    </div>
                    <div className="news_post_link"><a href="blog_single.html">read more</a></div>
                </div>
            </div>}
        </div>
    }

    const configureNewsRest = (items) => {
        return <div className="col-lg-5 news_col">
            {isLoading && <Loader />}
            {!isLoading && items && <div className="news_posts_small">
                {items.map((item, idx) => <div key={idx} className="news_post_small">
                    <div className="news_post_small_title"><a href="blog_single.html">{item.title}</a></div>
                    <div className="news_post_meta">
                        <ul>
                            <li><a href="#">{item.author}</a></li>
                            <li><a href="#">{item.created_on}</a></li>
                        </ul>
                    </div>
                </div>)}
            </div>}
        </div>   
    }

    return <div className="news">
    <div className="container">
      <div className="row">
          <div className="col">
              <div className="section_title_container text-center">
                  <h2 className="section_title">{title[lang]}</h2>
                  <div className="section_subtitle"><p>{message[lang]}</p></div>
              </div>
          </div>
      </div>
      <div className="row news_row">
        {configureNews1(data[0])}
        {configureNewsRest(data.slice(1, 4))}
      </div>
  </div>
</div>
}

export default UpcomingNews