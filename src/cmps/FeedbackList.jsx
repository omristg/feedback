import { FeedbackItem } from './FeedbackItem'

export const FeedbackList = ({ feedback, onRemove }) => {

    if (!feedback || !feedback.length) return <p>No feedback yet</p>

    return (
        <div className="feedback-list">
            {feedback.map(item => {
                return <FeedbackItem key={item.id} item={item} onRemove={onRemove} />
            })}
        </div>
    )
}