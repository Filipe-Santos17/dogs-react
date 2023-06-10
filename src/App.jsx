import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Footer from "./components/Footer";
import Users from "./user/Users";

import { UserStorage } from "./userContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./Helpers/ProtectedRouter";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} /> {/* login/* - diz que há sub rotas */}
          <Route path="conta/*" element={<ProtectedRouter> <Users/> </ProtectedRouter>} /> 
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
