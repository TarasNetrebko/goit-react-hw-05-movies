import { fetchActorCast } from "helpers/fetchHandler"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { CastList, Actor, CastContainer } from "./Cast.styled";
const Cast = () => {
    const [cast, setCast] = useState(null);
    const params = useParams();
    useEffect(() => {
        fetchActorCast(params.movieId).then(res => {
            setCast(res.cast);
        })
        // eslint-disable-next-line
    }, [])
    console.log(cast)
    return (
        <CastContainer>
            <CastList>
                {cast && cast.map(({profile_path, character, name, id}) => <Actor key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="name" width="105" height="150"/>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </Actor> )}
            </CastList>
        </CastContainer>
    )
}
export default Cast;