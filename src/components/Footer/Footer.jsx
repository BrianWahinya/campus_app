import { useContext } from "react";
import LocalStorageCtx from "../../contexts/LocalStorage";
import configs from "../../helpers/configs";

const {brand, motto, address, question, content} = configs;
const {home, academics, contact, about, email, phone, quicklinks } = content;

const Footer = () => {
	const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;

  return <>
	<footer className="footer">
		<div className="footer_background" style={{backgroundImage: `url(${"images/footer_background.png"})`}}></div>
		<div className="container">
			<div className="row footer_row">
				<div className="col">
					<div className="footer_content">
						<div className="row">

							<div className="col-lg-4 footer_col">
					
								{/* Footer About */}
								<div className="footer_section footer_about">
									<div className="footer_logo_container">
										<a href="#">
											<div className="footer_logo_text">{brand.slice(0,3)}<span>{brand.slice(3)}</span></div>
										</a>
									</div>
									<div className="footer_about_text">
										<p>{motto[lang]}</p>
									</div>
									<div className="footer_social">
										<ul>
											<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
											<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
										</ul>
									</div>
								</div>
								
							</div>

							<div className="col-lg-4 footer_col">
					
								{/* Footer Contact */}
								<div className="footer_section footer_contact">
									<div className="footer_title">{contact[lang]}</div>
									<div className="footer_contact_info">
										<ul>
											<li>{email[lang]}: {address.email}</li>
											<li>{phone[lang]}:  {address.phone}</li>
											<li>{address.address}</li>
										</ul>
									</div>
								</div>
								
							</div>

							<div className="col-lg-4 footer_col">
					
								{/* Footer links */}
								<div className="footer_section footer_links">
									<div className="footer_title">{quicklinks[lang]}</div>
									<div className="footer_links_container">
										<ul>
											<li><a href="/" disabled>{home[lang]}</a></li>
											<li><a href="/" disabled>{about[lang]}</a></li>
											<li><a href="/" disabled>{contact[lang]}</a></li>
											{/* <li><a href="#">Features</a></li> */}
											<li><a href="/" disabled>{academics[lang]}</a></li>
											{/* <li><a href="#">Events</a></li>
											<li><a href="#">Gallery</a></li>
											<li><a href="#">FAQs</a></li> */}
										</ul>
									</div>
								</div>
								
							</div>

						</div>
					</div>
				</div>
			</div>

		</div>
	</footer>
  </>
}

export default Footer