import { fetchActorCast } from "helpers/fetchHandler"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
export const Cast = () => {
    const [cast, setCast] = useState(null);
    const params = useParams();
    useEffect(() => {
        fetchActorCast(params.movieId).then(res => {
            setCast(res.cast);
        })
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <p>
            {cast && cast.map(actor => actor.name).join(", ")}
            </p>
        </div>
    )
}