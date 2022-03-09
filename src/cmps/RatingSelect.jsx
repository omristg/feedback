
export const RatingSelect = ({ rating, setRating }) => {

	const handleChange = ({ currentTarget }) => {
		setRating(+currentTarget.value)
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
							checked={rating === idx}
						/>
						<label htmlFor={`num${idx}`}>{idx}</label>
					</li>
				)
			})}
		</ul>
	)
}