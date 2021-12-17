import React, {useEffect, useState} from 'react'
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import LargeRow from './components/LargeRow';
import requests from './components/requests'
import Row from './components/Row';

import Modal from './components/Modal';

function App() {


  const [openModal, setOpenModal] = useState(false);



  return (

    <>
      <div className="App">
        <Navbar />

        <Banner />


        <LargeRow
          title = "Only On Netflix"
          fetchUrl =  {requests.fetchTrending}
          largeRowPoster
          
          onClick = {() => {
            setOpenModal(true);
          }}
        />

        <Row 
          title = "Action Movies"
          fetchUrl =  {requests.fetchActionMovies}
        />

        <Row 
          title = "Top rated"
          fetchUrl =  {requests.fetchTopRated}
        />

        <Row 
          title = "Comedy Movies"
          fetchUrl =  {requests.fetchComedyMovies}
        />

        <Row 
          title = "Horror Movies"
          fetchUrl =  {requests.fetchHorrorMovies}
        />

        <Row 
          title = "Documentaries"
          fetchUrl =  {requests.fetchDocumentaries}
        />

        <Row 
          title = "Romance Movies"
          fetchUrl =  {requests.fetchRomanceMovies}
        />

        {openModal && <Modal/>}

      </div>
    </>
  );
}

export default App;
