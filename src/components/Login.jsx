import { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { IoMail } from 'react-icons/all'
import { Link, useNavigate } from 'react-router-dom'

import './Login.css'
import axios from 'axios'

const Login = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticated)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(`Email: ${email}`)
		console.log(`Password : ${password}`)
		const loginData = { email: email, password: password }

		await axios({
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			url: 'http://localhost:5000/api/v1/auth/login',
			data: {
				email: email,
				password: password,
			},
		})
			.then((res) => {
				console.log(res)
				if (res.status === 200) {
					setIsAuthenticated(true)
					localStorage.setItem('isAuthenticated', true)
					navigate('/')
				}
			})
			.error((e) => {
				console.error(e)
			})

		console.log('Success')
		setEmail('')
		setPassword('')
	}

	const handleNavigation = () => {
		navigate('/')
	}

	return (
		<div className="container">
			<div className="login">
				<h2>LOGIN</h2>
				<form
					action="client/src#"
					method="post"
					onSubmit={(e) => handleSubmit(e)}
				>
					<label htmlFor="email">
						<IoMail size={16} />
					</label>
					<input
						type="email"
						name="email"
						placeholder="Email"
						id="username"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="password">
						<FaLock size={16} />
					</label>
					<input
						type="password"
						name="password"
						placeholder="Password"
						id="password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input type="submit" value="Login" />
				</form>
				<p>
					New to this site.{' '}
					<span>
						<Link to={'/register'}> Register Here</Link>
					</span>
				</p>
				<button onClick={handleNavigation} type="button" className={'button'}>
					Home
				</button>
			</div>
		</div>
	)
}

export default Login
