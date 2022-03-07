import { useContext } from "react"
import { FeedbackContext } from "../context/FeedbackContext"

export const FeedbackStats = () => {

    const { feedbacks } = useContext(FeedbackContext)

    let avarage = feedbacks.reduce((acc, curr) => {
        return acc += curr.rating
    }, 0) / feedbacks.length

    avarage = avarage.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedbacks.length} Reviews</h4>
            <h4>Avarage rating: {isNaN(avarage) ? '0' : avarage}</h4>
        </div>
    )
}