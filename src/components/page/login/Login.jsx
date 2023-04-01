import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import LoginWrap from './LoginWrap.jsx'
import Header from "../../common/Header.jsx";
import Footer from "../../common/Footer.jsx";

function Login() {
    return (
        <>
            <Header/>
            <Breadcrumb pageName="Log In" pageTitle="Log In"/>
            <LoginWrap/>
            <Footer/>
        </>
    )
}

export default Login