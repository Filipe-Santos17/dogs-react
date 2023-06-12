import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../userContext";
import NotFound from "../NotFound";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  if (login) {
    navigate("/conta");
  }

  return (
    <section className="login">
      <div className="forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound/>} /> 
        </Routes>
      </div>
    </section>
  );
}
