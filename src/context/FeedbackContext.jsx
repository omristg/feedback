import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid'

import { feedbackData } from '../data/feedbackData'

export const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {


    const [feedbacks, setFeedbacks] = useState(feedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: null,
        edit: false
    })

    const removeFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedbacks(feedbacks.filter(item => id !== item.id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid()
        setFeedbacks([newFeedback, ...feedbacks])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (feedbackToUpdate) => {
        const { id } = feedbackToUpdate
        setFeedbacks(feedbacks.map(item => {
            return (item.id === id) ? feedbackToUpdate : item
        }))
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                feedbackEdit,
                removeFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}
