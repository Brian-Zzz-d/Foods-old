import { useState, useEffect } from "react";
import { ref, get, remove, push } from "firebase/database";
import database from "../../services/reviewf/firebase.js"; // Importa la base de datos correctamente
import "./Review.css";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

function Review() {
  const [bikes, setBikes] = useState([]);
  const refForm = useRef();
  const dbRef = ref(database, "/bikes"); // Referencia a la colección en Firebase

  // 🔄 Obtener todas las bicicletas de Firebase al cargar el componente
  useEffect(() => {
    getAllBikes();
  }, []);

  // 📥 Obtener bicicletas de Firebase
  const getAllBikes = () => {
    get(dbRef)
      .then((snapshot) => {
        let allBikes = [];
        snapshot.forEach((item) => {
          allBikes.push({ key: item.key, ...item.val() });
        });
        setBikes(allBikes);
      })
      .catch((err) => console.error(err));
  };

  // ➕ Agregar bicicleta a Firebase
  const addBike = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;

    push(dbRef, { brand, model }).then((res) => {
      refForm.current.reset();
      setBikes((prev) => [...prev, { key: res.key, brand, model }]);
    });
  };

  // 🗑️ Eliminar bicicleta de Firebase
  const removeBike = (key) => {
    const bikeRef = ref(db, `/bikes/${key}`);
    remove(bikeRef).then(() => {
      setBikes((prev) => prev.filter((bike) => bike.key !== key));
    });
  };

  return (
    <>
          <Header />
      <div className="bicycle-list-main-container">
        <div className="bicycle-form-container">
          <form id="bicycle-form" onSubmit={addBike} ref={refForm}>
            <input className="rounded-input" type="text" name="brand" placeholder="Brand" required />
            <input className="rounded-input" type="text" name="model" placeholder="Model" required />
            <input className="rounded-input" type="submit" value="Add Bike" />
          </form>
        </div>

        <div className="bicycle-list">
          {bikes.length > 0 ? (
            bikes.map((b) => (
              <div className="bike-item" key={b.key}>
                <p>{b.brand} {b.model}</p>
                <FaRegTrashAlt className="delete-bike" onClick={() => removeBike(b.key)} />
              </div>
            ))
          ) : (
            <p>No bikes available.</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );

}
export default Review;