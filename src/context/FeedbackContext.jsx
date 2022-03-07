import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid'

import { feedbackData } from '../data/feedbackData'

export const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {


    const [feedbacks, setFeedback] = useState(feedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false

    })

    const removeFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedbacks.filter(item => id !== item.id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid()
        setFeedback([newFeedback, ...feedbacks])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }


    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                removeFeedback,
                addFeedback,
                editFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}
