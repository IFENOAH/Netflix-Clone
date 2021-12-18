import React, {useEffect, useState} from 'react'
import axios from './axios'


function Row({ title, fetchUrl, largePoster = false }) {


    const base_url = "https://image.tmdb.org/t/p/original/"

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])


    return (
        <div className = "movie-row">
            <h2>{ title }</h2>

            <div className = "row-images"> 
                {movies.map(movie => (
                    <img 
                        key = {movie.id}
                        className = {`row-poster ${largePoster && "row-poster-large"}`}
                        src = { `${base_url}${ 
                        largePoster ? movie.poster_path : movie.backdrop_path
                    }`} alt = {movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
