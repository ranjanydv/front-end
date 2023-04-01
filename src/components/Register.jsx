import { Link, Navigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import './Login.css'
import axios from 'axios'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (password !== confirmPassword) throw new Error('Passwords do not match')

		const registerData = { name: name, email: email, password: password }
		// await axios.post("http://127.0.0.1:5000/api/v1/auth/register", JSON.stringify(registerData)).then(res => console.log(`Sending Data :${res}`)).catch(err => console.log(err))
		await axios({
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			// url: 'http://127.0.0.1:5000/api/v1/auth/register',
			url: 'http://localhost:5000/api/v1/auth/register',
			data: {
				name: name,
				lastName: 'Yadav',
				email: email,
				password: password,
			},
		})
		setName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
		;<Navigate to="/" replace={true} />
	}

	return (
		<div>
			<div className="container">
				<div className="login">
					<h2>SIGN UP</h2>
					<form method="post" onSubmit={(e) => handleSubmit(e)}>
						<label htmlFor="name">
							{/* <i className="fas fa-user"></i> */}
						</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							id="username"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor="name">
							{/* <i className="fas fa-user"></i> */}
						</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							id="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="password">
							{/* <i className="fas fa-lock"></i> */}
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
						<input
							type="password"
							name="password"
							placeholder="Confirm Password"
							id="confirm-password"
							required
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<input type="submit" value="Register" />
					</form>
					<p>
						Already a user.{' '}
						<span>
							<Link to={'/login'}> Login Here</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Register
