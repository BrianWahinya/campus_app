import { useContext, useEffect, useState } from 'react'
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs';

const { host, text, content } = configs;
const { register_now } = text;
const { select_course, submit_now, excited } = content;
const fetch_url = `${host}/coursesGetAllByLang.php`;

const RegisterNow = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    const lang = localContent.lang;

	const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");

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
                // console.log('SelectCoursesAll', resp);
                setIsLoading(false);
                const filterCourses = resp.response.filter((rs => rs.cs_id));
                setData(filterCourses);
            }).catch((e) => {
                setIsLoading(false);
            })
        }, 2000)
    }, [])

	const changeCourse = (e) => {
		setSelectedCourse(e.target.value);
	}

  	return <div className="counter register_now">
		<div className="counter_background" style={{backgroundImage:`url(images/counter_background.jpg)`}}></div>
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="counter_content">
						<h2 className="counter_title">{register_now.title[lang]}</h2>
						<div className="counter_text"><p>{register_now.message[lang]}</p></div>

						<div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
							

						</div>
					</div>

				</div>
			</div>

			<div className="counter_form">
				<div className="row fill_height">
					<div className="col fill_height">
						<form className="counter_form_content d-flex flex-column align-items-center justify-content-center" action="#">
							<div className="counter_form_title">{excited[lang]}</div>
							<input type="text" className="counter_input" placeholder="Your Name:" required="required" />
							<input type="tel" className="counter_input" placeholder="Phone:" required="required" />
							<select name="counter_select" id="counter_select" className="counter_input counter_options" value={selectedCourse} onChange={changeCourse}>
								<option>{select_course[lang]}</option>
								{data.map((dt, idx) => {
									const {cs_name} = dt;
									const nm = cs_name.replace(/\s/g, "");
									<option key={`${idx}${nm}`} value={nm.replace(/\s/g, "")}>{cs_name}</option>
								})}
							</select>
							<textarea className="counter_input counter_text_input" placeholder="Message:" required="required"></textarea>
							<button type="submit" className="counter_form_button">{submit_now[lang]}</button>
						</form>
					</div>
				</div>
			</div>

		</div>
	</div>
}

export default RegisterNow