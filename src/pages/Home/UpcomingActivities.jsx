import { useContext, useEffect, useState } from "react";
import { Loader } from "../../components";
import LocalStorageCtx from "../../contexts/LocalStorage";
import configs from "../../helpers/configs";
import { DEPE } from "../../helpers/utils";

const { text, host } = configs;
const { title, message } = text.upcoming_act;
const fetch_url = `${host}/activityGetAllByLang.php`;

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
                console.log('activitiesByLang', resp);
                setIsLoading(false);
                setData(dt => {
                    return resp.response;
                })
            })
        }, 2000)
        
    },[lang])

    const configureActivities = (items) => {
        return <>
            {isLoading && <Loader />}
            {!isLoading && !items && items.length < 1 && 'No upcoming activities'}
            {!isLoading && items && items.length > 0 && items.map((item, idx) => {
                const {activityDate, title, description} = item;
                return <div key={idx} className="col-lg-4 event_col">
                    <div className="event event_left">
                        <div className="event_image"><img src="images/event_1.jpg" alt="" /></div>
                        <div className="event_body d-flex flex-row align-items-start justify-content-start">
                            <div className="event_date">
                                <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                                    <div className="event_day trans_200">{activityDate.split('-')[2]}</div>
                                    <div className="event_month trans_200">{DEPE.getMonth(activityDate.split('-')[1], 'iso3')}</div>
                                </div>
                            </div>
                            <div className="event_content">
                                <div className="event_title"><a href="#">{title}</a></div>
                                <div className="event_info_container">
                                    <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true"></i><span>15.00 - 19.30</span></div>
                                    <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true"></i><span>{item.venue}</span></div>
                                    <div className="event_text">
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </>
          
    }

    return <div className="events">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="section_title_container text-center">
                    <h2 className="section_title">{title[lang]}</h2>
                    <div className="section_subtitle"><p>{message[lang]}</p></div>
                </div>
            </div>
        </div>
        <div className="row events_row">
        {configureActivities(data.slice(0, 3))}
      </div>
  </div>
</div>
}

export default UpcomingNews