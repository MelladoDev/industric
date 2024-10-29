import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com/";

const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload.user, token: action.payload };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (username, password) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      });

      const { token, user } = response.data;
      dispatch({ type: "LOGIN_SUCCESS", payload: { token, user } });
      // Configura el token en los headers para futuras solicitudes
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;

      return token;
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error.response?.data?.message || "Login failed" });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
