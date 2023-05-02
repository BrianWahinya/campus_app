import { useContext } from 'react';
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs'
import './css/contact.css'

const {content} = configs;
const {email, submit_now, name, message, contact_us} = content;

const Contact = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    const lang = localContent.lang;
  
  return <div className="contact">

  {/* Contact Info */}

  <div className="contact_info_container">
      <div className="container">
          <div className="row">

              {/* Contact Form */}
              <div className="col-lg-6">
                  <div className="contact_form">
                      <div className="contact_info_title">{contact_us[lang]}</div>
                      <form action="#" className="comment_form">
                          <div>
                              <div className="form_title">{name[lang]}</div>
                              <input type="text" className="comment_input" required="required" />
                          </div>
                          <div>
                              <div className="form_title">{email[lang]}</div>
                              <input type="text" className="comment_input" required="required" />
                          </div>
                          <div>
                              <div className="form_title">{message[lang]}</div>
                              <textarea className="comment_input comment_textarea" required="required"></textarea>
                          </div>
                          <div>
                              <button type="submit" className="comment_button trans_200">{submit_now[lang]}</button>
                          </div>
                      </form>
                  </div>
              </div>

              {/* Contact Info */}
              {/* <div className="col-lg-6">
                  <div className="contact_info">
                      <div className="contact_info_title">Contact Info</div>
                      <div className="contact_info_text">
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a distribution of letters.</p>
                      </div>
                      <div className="contact_info_location">
                          <div className="contact_info_location_title">New York Office</div>
                          <ul className="location_list">
                              <li>T8/480 Collins St, Melbourne VIC 3000, New York</li>
                              <li>1-234-567-89011</li>
                              <li>info.deercreative@gmail.com</li>
                          </ul>
                      </div>
                      <div className="contact_info_location">
                          <div className="contact_info_location_title">Australia Office</div>
                          <ul className="location_list">
                              <li>Forrest Ray, 191-103 Integer Rd, Corona Australia</li>
                              <li>1-234-567-89011</li>
                              <li>info.deercreative@gmail.com</li>
                          </ul>
                      </div>
                  </div>
              </div> */}
          </div>
      </div>
  </div>
</div>
}

export default Contact