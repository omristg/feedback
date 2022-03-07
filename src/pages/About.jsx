import { Card } from "../cmps/shared/Card"
import { Link } from 'react-router-dom'

export const About = () => {

    return (
        <Card >
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app for leaving feedback about services</p>
                <p>version: 1.0.0</p>
                <Link to="/">Back to home page</Link>
            </div>
        </Card>
    )
}