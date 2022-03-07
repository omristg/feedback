import { v4 as uuid } from 'uuid'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import { Header } from './cmps/Header';
import { About } from './pages/About'
import { feedbackData } from './data/feedbackData';
import { FeedbackList } from './cmps/FeedbackList'
import { FeedbackStats } from './cmps/FeedbackStats';
import { FeedbackForm } from './cmps/FeedbackForm';
import { AboutLinkIcon } from './cmps/AboutLinkIcon';

export function App() {
	const [feedback, setFeedback] = useState(feedbackData)

	const onRemove = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter(item => id !== item.id))
		}
	}

	const onAddFeedback = (newFeedback) => {
		newFeedback.id = uuid()
		setFeedback([newFeedback, ...feedback])
	}

	return (
		<Router>
			<Header />
			<div className="container">
				<h1>My App!</h1>
				<Routes>
					<Route path='/' element={(
						<>
							<FeedbackForm onAddFeedback={onAddFeedback} />
							<FeedbackStats feedback={feedback} />
							<FeedbackList feedback={feedback} onRemove={onRemove} />
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
	)
}
