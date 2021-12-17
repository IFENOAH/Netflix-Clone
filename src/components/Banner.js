import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'


const Banner = () => {


    const base_url = "https://image.tmdb.org/t/p/original/";


    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(requests.fetchNetflixOriginals);
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;

        }

        fetchData();
    }, []) 
    
    // console.table(movie);


    return (
        
        <div className = "c-banner" 
            style = {{ 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundPosition : "center center",
            backgroundImage: `url(${base_url}${movie?.backdrop_path})`
            }}>

            <div className = "banner-content">
                <h1 className = "movie-logo">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className = "about-box">
                    <p className = "movie-about">
                        {movie?.overview}
                    </p>
                </div>
    
                <div className = "c-buttons"> 
                    <a href ="" ><button className = "c-play-button" ><i class="fas fa-play"></i>Play</button></a>
                    <a href ="" ><button className = "c-info-button" ><i class="fas fa-info-circle"></i>More Info</button></a>
                </div>
            </div>

            {/* <span className = "c-rating">
                <h3>+16</h3>
            </span> */}

        </div>
    )
}

export default Banner
