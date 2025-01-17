import Navbar from './components/navbar/navbar'
import Banner from './components/banner/Banner'
import Rows from './components/Rows/Rows'
import Footer from './components/Footer/Footer'
import request from './request'


function App() {


  return (
    <div>
      
    <Banner/>
     <Navbar/>
     <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
     <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="TV Shows" fetchUrl={request.fetchTV} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Mystery" fetchUrl={request.fetchMystery} />
      <Rows title="Science Fi" fetchUrl={request.fetchSciFi} />
      <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Romantic Movies" fetchUrl={request.fetchRomanceMovies} />
      <Footer/>
    </div>
  )
}

export default App
