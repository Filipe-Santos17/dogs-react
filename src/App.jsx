import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Footer from "./components/Footer";
import Users from "./components/user/Users";

import { UserStorage } from "./userContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./Helpers/ProtectedRouter";
import Photo from "./components/photo/photo";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="app-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} /> {/* login/* - diz que há sub rotas */}
              <Route
                path="conta/*"
                element={
                  <ProtectedRouter>
                    {" "}
                    <Users />{" "}
                  </ProtectedRouter>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
