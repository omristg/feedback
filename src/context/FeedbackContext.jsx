import { createContext, useEffect, useState } from "react";

export const FeedbackContext = createContext()
const BASE_URL = 'http://localhost:5000/feedback'

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
        const res = await fetch(`${BASE_URL}?_sort=${sortBy}`)
        const feedbacks = await res.json()
        setFeedbacks(feedbacks)
        setIsLoading(false)
    }

    const removeFeedback = async (id) => {
        if (!window.confirm('Are you sure you want to delete?')) return
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })
        setFeedbacks(feedbacks.filter(item => id !== item.id))
    }

    const addFeedback = async (newFeedback) => {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const savedFeedback = await res.json()
        setFeedbacks([savedFeedback, ...feedbacks])
    }

    const updateFeedback = async (feedbackToUpdate, feedbackId) => {
        const res = await fetch(`${BASE_URL}/${feedbackId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackToUpdate)
        })
        const savedFeedback = await res.json()

        setFeedbacks(feedbacks.map(item => {
            return (item.id === feedbackId) ? savedFeedback : item
        }))
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
