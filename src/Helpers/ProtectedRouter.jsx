import { useContext } from "react";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";
//Não altere mais esse arquivo, já está atualizado

const ProtectedRouter = ({ children }) => {
  const { login } = useContext(UserContext);

  if(login === true){
    return children
  } else if(login === false){
    return <Navigate to="/login"/>; 
  } else {
    return <></>
  }
};

export default ProtectedRouter;
