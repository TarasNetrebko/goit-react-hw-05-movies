import { fetchReviews } from "helpers/fetchHandler"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import moment from "moment-js";
export const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const params = useParams();
    useEffect(() => {
        fetchReviews(params.movieId).then(res => {
            setReviews(res.results);
        })
        // eslint-disable-next-line
    }, [])
    console.log(reviews);
    return (
        <div>
            {reviews && reviews.map(({ author, content, id, created_at, updated_at, author_details: {rating} }) => (
                <div key={id}>
                    <div>
                        <b>{author}</b>
                        <p>Created: {moment(created_at, "YYYY-MM-DDTHH:MM:SS.MSZ").format("DD/MM/YY")}</p>
                        <p>Updated: {moment(updated_at, "YYYY-MM-DDTHH:MM:SS.MSZ").format("DD/MM/YY")}</p>
                    </div>
                    <div>
                        <b>{rating}/10</b>
                        <br />
                        <p>{content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}