import "./App.css";
import Contact from "./components/Contact/Contact.component";
import Home from "./components/Home/Home.component";
import NavBar from "./components/NavBar/NavBar.component";
import Portfolio from "./components/Portfolio/portfolio.component";
import Skills from "./components/Skills/Skills.components";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBpSZkRz5QxJeHON7wNgy_SXChM4ue8PKM",
//   authDomain: "portfolio-420e6.firebaseapp.com",
//   projectId: "portfolio-420e6",
//   storageBucket: "portfolio-420e6.appspot.com",
//   messagingSenderId: "136563829021",
//   appId: "1:136563829021:web:9d2726193b93058d8519f4",
//   measurementId: "G-FVSGHP47HM",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
/* eslint-disable */
// const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}

export default App;
