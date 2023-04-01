import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'

function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
