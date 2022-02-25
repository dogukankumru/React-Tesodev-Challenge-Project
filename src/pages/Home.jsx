import Footer from "../components/HomeComponents/Footer"
import Slider from "../components/HomeComponents/Slider"
import SearchForm from "../components/HomeComponents/SearchForm"
import Header from "../components/HomeComponents/Header"

function Home() {
  return (
    <>
      <Header/>
      <SearchForm/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default Home