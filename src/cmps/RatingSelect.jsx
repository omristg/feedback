import { useEffect, useState, useContext } from "react"
import { FeedbackContext } from "../context/FeedbackContext"

export const RatingSelect = ({ select }) => {


	const { feedbackEdit } = useContext(FeedbackContext)
	const [selected, setSelected] = useState(10)

	useEffect(() => {
		if (!feedbackEdit.item) return
		setSelected(feedbackEdit.item.rating)
	}, [feedbackEdit])

	const handleChange = ({ currentTarget }) => {
		setSelected(+currentTarget.value);
		select(+currentTarget.value)
	}

	const idxs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	return (
		<ul className="rating">
			{idxs.map(idx => {
				return (
					<li key={`li${idx}`}>
						<input
							type="radio"
							id={`num${idx}`}
							name="rating"
							value={idx}
							onChange={handleChange}
							checked={selected === idx}
						/>
						<label htmlFor={`num${idx}`}>{idx}</label>
					</li>
				)
			})}
		</ul>
	)
}