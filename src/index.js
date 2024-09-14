import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
//       <p>This move is rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={3} size={24} />
    <StarRating
      maxRating={5}
      color="red"
      className="test"
      messages={["Best", "Good", "Not Good", "Bad", "Worst"]}
      defaultRating={3}
    />
    <StarRating color="green" size={48} />
    <Test /> */}
  </React.StrictMode>
);
