import { useContext } from "react"
import { FeedbackContext } from "../context/FeedbackContext"

import { Card } from "./shared/Card"
import { FaTimes, FaEdit } from 'react-icons/fa'

export const FeedbackItem = ({ item }) => {

    const { removeFeedback, editFeedback } = useContext(FeedbackContext)

    const { rating, text, id } = item

    return (
        <Card >
            <div className="num-display">{rating}</div>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color="purple" />
            </button>
            <button className="close" onClick={() => removeFeedback(id)}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{text}</div>
        </Card>
    )
}