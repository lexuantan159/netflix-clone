import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <Main/>
      <Row rowId={1} title="Up Coming" fetchUrl={requests.requestUpCome} />
      <Row rowId={2} title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId={3} title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row rowId={4} title="Now Playing" fetchUrl={requests.requestNowPlaying} />
      <Footer/>
    </>
  )
}

export default Home