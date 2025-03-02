import foods from "../../services/foods/Foods"
import "./FoodList.css"

function FoodList() {
  return (
    <>
      {
        foods.map((f) => {
          return (
            <div className="food-list-box">
              <div>
                <img src={`/img/${f.img}`} />
              </div>
              <p>{f.description}</p>
            </div>
          )
        })
      }

    </>
  )

}

export default FoodList


