import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./Recipe.css";
function Recipe() {
  return (
    <>
      <Header />
      <div className="img">
        <img src="/img/recipe/Working.jpg" alt="Working"/>
      </div>
      <Footer />
    </>
  )

}

export default Recipe