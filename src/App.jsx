import { useState } from 'react';

import { Header } from './cmps/Header';
import { feedbackData } from './data/feedbackData';
import { FeedbackList } from './cmps/FeedbackList'
import { FeedbackStats } from './cmps/FeedbackStats';
import { FeedbackForm } from './cmps/FeedbackForm';

export function App() {
	const [feedback, setFeedback] = useState(feedbackData)

	const onRemove = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter(item => id !== item.id))
		}
	}

	return (
		<>
			<Header />
			<div className="container">
				<h1>My App!</h1>
				<FeedbackForm />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} onRemove={onRemove} />
			</div>
		</>
	)
}
