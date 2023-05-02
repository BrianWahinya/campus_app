import { useContext, useState } from 'react';
import { Link, useNavigate, useHis } from 'react-router-dom';
import { Loader } from '../../components';
import LocalStorageCtx from '../../contexts/LocalStorage';
import configs from '../../helpers/configs';
import './css/login.css';

const { host, text } = configs;
const { title, message } = text.upcoming_act;
const fetch_url = `${host}/loginWebuser.php`;

const Login = () => {
  const navigate = useNavigate();
  const {localContent, setLocalContent} = useContext(LocalStorageCtx);
	const lang = localContent.lang;
  const [loginObj, setLoginObj] = useState({ email_username: "", password: "" })
  const [error, setError] = useState('');

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const changeVal = (e) => {
    e.preventDefault()
    setLoginObj(obj => ({...obj, [e.target.id]:e.target.value}))
  }

  const submitLogin = (e) => {
    setError('');
    if(!isLoading && loginObj.email_username && loginObj.password){
      setIsLoading(true);
      setTimeout(() => {
        fetch(fetch_url, {
          method: "POST",
          mode: "cors",
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(loginObj)
        })
        .then(response => response.json())
        .then(resp => {
            console.log('loginsByLang', resp);
            if(resp.status === 'false'){
              setError(resp.message);
            }
            localStorage.setItem("creds", JSON.stringify({...resp, name:loginObj.email_username}));
            setLoginObj(lo => ({email_username:"", password:""}))
            setIsLoading(false);
            if(resp.status !== 'false' && resp.token !== null){
              setLocalContent(lc => ({...lc, entity: "webadmin"}));
            }
        }).catch((e) => {
          setIsLoading(false);
          setError('There is either a connection or inputs error');
        })
      }, 2000)
      console.log(loginObj);
      return;
    }
    setError('Please fill in all the fields');
  }

  return <div className="login-form-box">
    <div className="login-form">
        <span className="title">Staff</span>
        {/* <span className="subtitle">Create a free account with your email.</span> */}
        <div className="form-container">
          {/* <input type="text" className="input" placeholder="Full Name" /> */}
          {isLoading && <Loader />}
          <input id="email_username" type="email" className="input" placeholder="Email or Username" value={loginObj.email_username} onChange={changeVal} disabled={isLoading}/>
          <input id="password" type="password" className="input" placeholder="Password" value={loginObj.password} onChange={changeVal} disabled={isLoading}/>
        </div>
        <button className={`btnLogin ${loginObj.email_username && loginObj.password? '': 'btn-disabled'}`} onClick={submitLogin}>Login</button>
        <p className='login-error'>{error}</p>
    </div>
    <div className="form-section">
      <p>Are you a staff?<br />No account?<br />Kindly contact admin</p>
    </div>
  </div>
}

export default Login