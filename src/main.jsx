import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import MainLayout from './components/layout/MainLayout.jsx'

import './index.css'

import AboutPage from './components/page/about/AboutPage.jsx'
import ContactPage from './components/page/contact/ContactPage.jsx'
import LiveAuctionPage from './components/page/liveAuction/LiveAuction.jsx'
import ProductsWrap from "./components/page/products/ProductsWrap.jsx";
import AuctionDetailsWrap from "./components/page/auctionDetails/AuctionDetailsWrap.jsx";
import Login from "./components/page/login/Login.jsx";

function Main() {
	return (
		<>
			<BrowserRouter>
				<Routes basename="/">
					<Route path="/" element={<MainLayout />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="products" element={<ProductsWrap />} />
					{/*<Route path="error" element={<ErrorPage/>}/>*/}
					{/*<Route path="signup" element={<SignUp/>}/>*/}
					<Route path="login" element={<Login/>}/>
					<Route path="auction-details" element={<AuctionDetailsWrap/>}/>
					{/*<Route path="dashboard" element={<Dashboard/>}/>*/}
					<Route path="live-auction" element={<LiveAuctionPage />} />
					{/*<Route path="how-works" element={<HowItWork/>}/>*/}
					{/*<Route path="join-merchant" element={<Merchant/>}/>*/}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Main

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
)
