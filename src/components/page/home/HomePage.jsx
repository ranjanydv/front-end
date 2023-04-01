import React, { useEffect, useState } from 'react'
import HeroBanner from './HeroBanner.jsx'
import LiveAuctionHome from './LiveAuctionHome.jsx'
import UpComing from './Upcoming.jsx'
import api from '../../common/api.js'
import Breadcrumb from '../../common/BreadCrumb.jsx'
import HeroBanner2 from './HeroBanner2.jsx'

function HomePage() {
	return (
		<>
			<HeroBanner2 />
			<LiveAuctionHome />
			<UpComing />
		</>
	)
}

export default HomePage
