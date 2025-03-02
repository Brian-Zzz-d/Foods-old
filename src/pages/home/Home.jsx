import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./Home.css"
function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="image-column">
          <img src="/img/Ramen.jpeg" alt="Imagen 1" className="fade-image" />
          <img src="/img/Paella.jpg" alt="Imagen 2" className="fade-image" />
          <img src="/img/Pizza.jpg" alt="Imagen 3" className="fade-image" />
          <div className="image-text">Texto en el centro</div>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Home