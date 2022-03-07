import { useContext, useEffect, useState } from 'react'
import { FeedbackContext } from '../context/FeedbackContext'

import { Card } from './shared/Card'
import { Button } from './shared/Button'
import { RatingSelect } from './RatingSelect'

export const FeedbackForm = () => {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [messege, setMessege] = useState(null)
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if (!feedbackEdit.edit) return
        setIsDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleChange = ({ target }) => {
        if (text === '') {
            setIsDisabled(true)
            setMessege(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setIsDisabled(true)
            setMessege('Text must be at least 10 characters')
        } else {
            setIsDisabled(false)
            setMessege(null)
        }
        setText(target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (text.trim().length < 10) return
        saveFeedback()
    }

    const saveFeedback = () => {
        const newFeedback = {
            text,
            rating
        }
        if (feedbackEdit.item) updateFeedback({ id: feedbackEdit.item.id, ...newFeedback })
        else addFeedback(newFeedback)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        value={text}
                        onChange={handleChange}
                        placeholder='Write a review'
                    />
                    <Button type='submit' isDisabled={isDisabled} >Send</Button>
                </div>
                {messege && messege}
            </form>
        </Card>
    )
}