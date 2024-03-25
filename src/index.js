import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import Appv1 from './Appv1';
// import StarRating from "./StarRating";
// import SeeMore from "./SeeMore";
// import Test from "./Test";

// function Test() {
//   const[movieRating, setMovieRating] = useState(0)

//   return(
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating}/>
//       <p>This film rated {movieRating}</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Appv1/>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amaizing"]}
    />
    <StarRating size={30} color="red" className="test" defaultRating={3}/>
    <Test/> */}
    {/* <SeeMore defaultLength={'auto'} color="blue"/>
    <SeeMore defaultLength={1000} color="green"/>
    <SeeMore defaultLength={400} color="red" padding={5} border={1} background="#dcdcdc" borderColor="#1c1c1c"/> */}
    {/* <Test/> */}
  </React.StrictMode>
);
