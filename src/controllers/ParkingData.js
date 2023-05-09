import { Link } from 'react-router-dom';

const P_Data = ({ parkings }) => {
    return (
        <article className="parkings">
            <Link to={`/parkings/${parkings.id}`}>
                <h2>{parkings.title}</h2>
                <p className="postDate">{parkings.datetime}</p>
            </Link>
            <p className="postBody">{
                (parkings.body).length <= 25
                    ? parkings.body
                    : `${(parkings.body).slice(0, 25)}...`
            }</p>
        </article>
    )
}

export default P_Data