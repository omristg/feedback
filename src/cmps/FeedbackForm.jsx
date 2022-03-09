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

    const handleChange = ({ target: { value } }) => {
        if (!value) {
            setIsDisabled(true)
            setMessege(null)
        } else if (value && value.trim().length < 10) {
            setIsDisabled(true)
            setMessege('Text must be at least 10 characters')
        } else {
            setIsDisabled(false)
            setMessege(null)
        }
        setText(value)
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        if (text.trim().length < 10) return
        await saveFeedback()
        resetForm()
    }

    const saveFeedback = async () => {
        const newFeedback = {
            text,
            rating
        }
        if (feedbackEdit.item) await updateFeedback(newFeedback, feedbackEdit.item.id)
        else await addFeedback(newFeedback)
    }

    const resetForm = () => {
        setText('')
        setRating(10)
        setIsDisabled(true)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect setRating={setRating} rating={rating} />
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