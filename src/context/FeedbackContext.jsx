import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'

export const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {


    const [feedbacks, setFeedbacks] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: null,
        edit: false
    })
    const [sortBy, setsortBy] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedbacks()
    }, [])

    const fetchFeedbacks = async () => {
        const res = await fetch(`http://localhost:5000/feedback?_sort=${sortBy}`)
        const feedbacks = await res.json()
        setFeedbacks(feedbacks)
        setIsLoading(false)
    }

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
                isLoading,
                removeFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
                setsortBy,
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}
