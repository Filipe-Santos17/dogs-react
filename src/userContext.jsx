import { createContext, useCallback, useEffect, useState } from "react";
import { tokenPost, userGet, tokenValidatePost } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(null);
    setLogin(null);
    localStorage.removeItem("token");
  }, []);

  async function getUserFetch(token) {
    const { url, options } = userGet(token);
    const resp = await fetch(url, options);
    const json = await resp.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = tokenPost(username, password);
      const tokenValue = await fetch(url, options);

      if (!tokenValue.ok) {
        throw new Error(`Error: ${tokenValue.statusText}`);
      }

      const jsonData = await tokenValue.json();
      localStorage.setItem("token", jsonData.token);

      await getUserFetch(jsonData.token);

      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function Autologin() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setError(false);
          setLoading(false);

          const { url, options } = tokenValidatePost(token);
          const response = await fetch(url, options);

          if (!response.ok) {
            throw new Error("Token Invalido");
          }

          await getUserFetch(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    Autologin();
  }, [userLogout]);

  return <UserContext.Provider value={{ data, login, loading, error, userLogin, userLogout }}>{children}</UserContext.Provider>;
};
