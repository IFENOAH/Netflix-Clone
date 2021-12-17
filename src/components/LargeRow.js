import React, {useEffect, useState} from 'react'
import axios from './axios'
import requests from './requests'


function LargeRow({ title, fetchUrl, largeRowPoster = false }) {


    const base_url = "https://image.tmdb.org/t/p/original/"

    const [ movies, setMovies ] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies( request.data.results );
            return request;
        }

        fetchData();
    }, [fetchUrl])


    return (
        <div className = "movie-large-row">
            <h2> { title } </h2>

            <div className = "large-row-images"> 
                { movies.map( movie => (

                    <img 
                        key = { movie.id }
                        className = {` ${largeRowPoster && "row-poster-large"}`}
                        src = { `${base_url}${ 
                        largeRowPoster ? movie.poster_path : movie.backdrop_path}`} 
                        alt = { movie.name }
                    />

                ))}
            </div>
        </div>
    )
}

export default LargeRow
