import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import api from "../../common/api.js";
import Cookies from 'js-cookie';

function LoginWrap() {
    const [openEye, setOpenEye] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userToken, setUserToken] = useState('');

    // useEffect(() => {
    //     const token = Cookies.get('userToken');
    //     setUserToken(token || '');
    // }, []);

    const handleEyeIcon = () => {
        setOpenEye(!openEye)
        // if (openEye === false) {
        //     setOpenEye(true)
        // } else {
        //     setOpenEye(false)
        // }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(`Email: ${email}`)
        console.log(`Password : ${password}`)
        const data = {email: email, password: password,}
        await api.auth.login(data).then((r) => {
            console.log(r)
            console.log(r.user)

            // document.cookie=`userToken=${r.data.userToken}`
            // setProduct(r.data.product)
            // setPassword('')
            // setEmail('')
        })
        const cookieValue = await Cookies.get('userToken');
        console.log(cookieValue)

    }

    return (
        <>
            {/*<p>User Token: {userToken}</p>*/}
            <div className="login-section pt-80 pb-120">
                <img
                    alt="imges"
                    src="/images/bg/section-bg.png"
                    className="img-fluid section-bg-top"
                />
                <img
                    alt="imges"
                    src="/images/bg/section-bg.png"
                    className="img-fluid section-bg-bottom"
                />
                <div className="container">
                    <div className="row d-flex justify-content-center g-4">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div
                                className="form-wrapper wow fadeInUp"
                                data-wow-duration="1.5s"
                                data-wow-delay=".2s"
                            >
                                <div className="form-title">
                                    <h3>Log In</h3>
                                    <p>
                                        New Member?{' '}
                                        <Link
                                            to={`/signup`}
                                            onClick={() =>
                                                window.scrollTo({top: 0, behavior: 'smooth'})
                                            }
                                        >
                                            Signup here
                                        </Link>
                                    </p>
                                </div>
                                <form className="w-100 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-inner">
                                                <label htmlFor={"email"}>Enter Your Email *</label>
                                                <input
                                                    type="email"
                                                    id='email'
                                                    placeholder="Enter Your Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-inner">
                                                <label htmlFor={'password'}>Password *</label>
                                                <input
                                                    type={openEye ? 'password' : 'text'}
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <i
                                                    className={openEye ? 'bi bi-eye-slash' : 'bi bi-eye-slash bi-eye'}
                                                    id="togglePassword"
                                                    onClick={handleEyeIcon}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div
                                                className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                <div className="form-group">
                                                    <input type="checkbox" id="html"/>
                                                    <label htmlFor="html">
                                                        I agree to the{' '}
                                                        <Link to={'#'}>Terms &amp; Policy</Link>
                                                    </label>
                                                </div>
                                                <Link to={'#'} className="forgot-pass">
                                                    Forgotten Password
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="account-btn" type={"submit"} onClick={event => {
                                        handleLogin(event)
                                    }}>Log in
                                    </button>
                                </form>
                                <div className="form-poicy-area">
                                    <p>
                                        By clicking the "signup" button, you create a Premiere
                                        Auctioneers account, and you agree to Premiere Auctioneers's{' '}
                                        <Link to={'#'}>Terms &amp; Conditions</Link> &amp;{' '}
                                        <Link to={'#'}>Privacy Policy.</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginWrap
