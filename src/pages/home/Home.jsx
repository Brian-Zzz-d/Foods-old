import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./Home.css"
function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="image-column">
          <img src="/img/home/Ramen.jpeg" alt="Imagen 1" className="fade-image" />
          <img src="/img/home/Paella.jpg" alt="Imagen 2" className="fade-image" />
          <img src="/img/home/Pizza.jpg" alt="Imagen 3" className="fade-image" />
          <div className="image-text">FOOD</div>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Home