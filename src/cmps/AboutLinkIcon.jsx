import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const AboutLinkIcon = () => {

    return (
        <div className="about-link">
            <Link to={{
                pathname: '/about',
                search: '?filter=name',
                hash: '#about'
            }}>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}