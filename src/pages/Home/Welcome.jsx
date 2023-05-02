import { useContext } from 'react'
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs'

const { text } = configs;

const Welcome = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

    return <div className="features">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="section_title_container text-center">
                        <h2 className="section_title">{text.welcome_title[lang]}</h2>
                        <div className="section_subtitle"><p>{text.welcome_msg[lang]}</p></div>
                    </div>
                </div>
            </div>
            <div className="row features_row">
                {Object.keys(text.pillars).map((item, idx) => {
                    const {title, message} = text.pillars[item];
                    return <div key={idx} className="col-lg-3 feature_col">
                        <div className="feature text-center trans_400">
                            <div className="feature_icon"><img src={`images/icon_${idx+1}.png`} alt=""/></div>
                            <h3 className="feature_title">{title[lang]}</h3>
                            <div className="feature_text"><p>{message[lang]}</p></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default Welcome