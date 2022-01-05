import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import NotFound from "./routes/404";
import Services from "./routes/Services";
import Service from "./routes/Service";
import Profile from "./routes/Profile";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbnBj37LvoF0Es1ltsPbWomLftWL9voSQ",
  authDomain: "red-onion-restaurant-63e12.firebaseapp.com",
  projectId: "red-onion-restaurant-63e12",
  storageBucket: "red-onion-restaurant-63e12.appspot.com",
  messagingSenderId: "887962618446",
  appId: "1:887962618446:web:ef3c6e75a065538072111f",
};

const app = initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(false);
  const auth = getAuth(app);

  function PrivateRoute({ element }) {
    if (user.uid) {
      return element;
    }
    return <Navigate to="/login" />;
  }

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={<Login auth={auth} user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register auth={auth} user={user} setUser={setUser} />}
        />
        <Route
          path="/services"
          element={<PrivateRoute element={<Services />} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile user={user} />} />}
        />
        <Route path="/service">
          <Route
            path=":serviceID"
            element={<PrivateRoute element={<Service />} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
