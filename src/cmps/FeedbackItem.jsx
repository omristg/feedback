import { Card } from "./shared/Card"
import { FaTimes } from 'react-icons/fa'

export const FeedbackItem = ({ item, onRemove }) => {

    const { rating, text, id } = item

    return (
        <Card >
            <div className="num-display">{rating}</div>
            <button
                onClick={() => onRemove(id)}
                className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{text}</div>
        </Card>
    )
}