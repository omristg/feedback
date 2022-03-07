import { motion, AnimatePresence } from 'framer-motion'

import { FeedbackItem } from './FeedbackItem'

export const FeedbackList = ({ feedback, onRemove }) => {

    if (!feedback || !feedback.length) return <p>No feedback yet</p>

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} onRemove={onRemove} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}