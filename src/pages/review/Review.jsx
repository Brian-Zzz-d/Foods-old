import { useState, useEffect, useRef } from "react";
import { ref, get, remove, push } from "firebase/database";
import database from "../../services/reviewf/firebase.js"; // Importa la base de datos correctamente
import "./Review.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Componente para las estrellas
const StarRating = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5]; // 5 estrellas disponibles
  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${rating >= star ? "filled" : ""}`}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

function Review() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0); // Calificación de estrellas
  const refForm = useRef();
  const dbRef = ref(database, "/reviews"); // Referencia a la colección de reseñas en Firebase

  // 🔄 Obtener todas las reseñas de Firebase al cargar el componente
  useEffect(() => {
    getAllReviews();
  }, []);

  // 📥 Obtener reseñas de Firebase
  const getAllReviews = () => {
    get(dbRef)
      .then((snapshot) => {
        let allReviews = [];
        snapshot.forEach((item) => {
          allReviews.push({ key: item.key, ...item.val() });
        });
        setReviews(allReviews);
      })
      .catch((err) => console.error(err));
  };

  // ➕ Agregar reseña a Firebase
  const addReview = (e) => {
    e.preventDefault();
    const restaurant = e.target.restaurant.value;
    const comment = e.target.comment.value;

    push(dbRef, { restaurant, comment, rating }).then((res) => {
      refForm.current.reset();
      setRating(0); // Resetear la calificación de estrellas
      setReviews((prev) => [...prev, { key: res.key, restaurant, comment, rating }]);
    });
  };

  // 🗑️ Eliminar reseña de Firebase
  const removeReview = (key) => {
    const reviewRef = ref(database, `/reviews/${key}`);
    remove(reviewRef).then(() => {
      setReviews((prev) => prev.filter((review) => review.key !== key));
    });
  };

  return (
    <>
      <Header />
      <div className="review-list-main-container">
        <div className="review-form-container">
          <form id="review-form" onSubmit={addReview} ref={refForm}>
            <input
              className="rounded-input"
              type="text"
              name="restaurant"
              placeholder="Nombre del restaurante"
              required
            />
            <textarea
              className="rounded-input"
              name="comment"
              placeholder="Tu opinión"
              required
            />
            <StarRating rating={rating} setRating={setRating} />
            <input className="rounded-input" type="submit" value="Agregar reseña" />
          </form>
        </div>

        <div className="review-list">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div className="review-item" key={r.key}>
                <p><strong>{r.restaurant}</strong></p>
                <p>{r.comment}</p>
                <p>Calificación: {r.rating} {Array(r.rating).fill("★").join("")}</p>
                <button onClick={() => removeReview(r.key)}>Eliminar reseña</button>
              </div>
            ))
          ) : (
            <p>No hay reseñas disponibles.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Review;
