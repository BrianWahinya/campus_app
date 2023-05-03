import { useContext, useEffect, useState } from "react";
import fetchNews from "../../api/fetchNews";
import { CustomModal, Loader } from "../../components";
import LocalStorageCtx from "../../contexts/LocalStorage";
import configs from "../../helpers/configs";
import SingleNews from "../News/SingleNews";

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
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({lang: lang})
            })
            .then(response => response.json())
            .then(resp => {
                console.log('upcomingnewsByLang', resp);
                setIsLoading(false);
                setData(dt => {
                    return resp.response;
                })
            })
        }, 2000)
        
    },[lang])

    const configureNews1 = (item) => {
        const {title, author, description, created_on} = item;
        return <div className="col-lg-7 news_col">
            {isLoading && <Loader />}
            {!isLoading && !item && 'No news present'}
            {!isLoading && item && <div className="news_post_large_container">
                <div className="news_post_large">
                    <div className="news_post_image"><img src="images/news_1.jpg" alt="" /></div>
                    <div className="news_post_large_title"><CustomModal btn={{text:title}} head={""} body={<SingleNews data={item} />}/></div>
                    <div className="news_post_meta">
                        <ul>
                            <li><CustomModal btn={{text:author}} head={""} body={<SingleNews data={item} />}/></li>
                            <li><CustomModal btn={{text:created_on}} head={""} body={<SingleNews data={item} />}/></li>
                        </ul>
                    </div>
                    <div className="news_post_text">
                        <p>{description}</p>
                    </div>
                    <div className="news_post_link"><CustomModal btn={{text:"read more"}} head={""} body={<SingleNews data={item} />}/></div>
                </div>
            </div>}
        </div>
    }

    const configureNewsRest = (items) => {
        return <div className="col-lg-5 news_col">
            {isLoading && <Loader />}
            {!isLoading && items && <div className="news_posts_small">
                {items.map((item, idx) => <div key={idx} className="news_post_small">
                    <div className="news_post_small_title"><CustomModal btn={{text:item.title}} head={""} body={<SingleNews data={item} />}/></div>
                    <div className="news_post_meta">
                        <ul>
                            <li><CustomModal btn={{text:item.author}} head={""} body={<SingleNews data={item} />}/></li>
                            <li><CustomModal btn={{text:item.created_on}} head={""} body={<SingleNews data={item} />}/></li>
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
        {data.length && configureNews1(data[0])}
        {data.length && configureNewsRest(data.slice(1, 4))}
      </div>
  </div>
</div>
}

export default UpcomingNews