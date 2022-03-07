import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { FeedbackProvider } from './context/FeedbackContext';
import { Header } from './cmps/Header';
import { About } from './pages/About'
import { FeedbackList } from './cmps/FeedbackList'
import { FeedbackStats } from './cmps/FeedbackStats';
import { FeedbackForm } from './cmps/FeedbackForm';
import { AboutLinkIcon } from './cmps/AboutLinkIcon';

export function App() {

	return (
		<FeedbackProvider>

			<Router>
				<Header />
				<div className="container">
					<h1>My App!</h1>
					<Routes>
						<Route path='/' element={(
							<>
								<FeedbackForm />
								<FeedbackStats />
								<FeedbackList />
							</>
						)} />
						<Route path='/about' element={<About />} />
					</Routes>
					<AboutLinkIcon />

					{/* <div>
					<NavLink to="/" className={({ isActive }) => (isActive ? " red" : "")}>Home</NavLink>
					<NavLink to="/about" className={({ isActive }) => (isActive ? " red" : "")}>About</NavLink>
				</div> */}

				</div>
			</Router>
		</FeedbackProvider>
	)
}
