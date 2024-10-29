import { createContext, useReducer, useContext } from "react";
import axios from "axios";

// Configuración global de Axios
axios.defaults.baseURL = 'https://fakestoreapi.com/';
// axios.defaults.headers.common['Authorization'] = 'Bearer AUTH_TOKEN';

// Definición del reducer
const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Estado inicial
const initialState = {
  loading: false,
  error: null,
  data: null,
};

// Crear el contexto
export const ApiContext = createContext();

// Proveedor del contexto
export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  // Función para hacer la petición GET a la API
  const fetchData = async (url) => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await axios.get(url);
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  return (
    <ApiContext.Provider value={{ ...state, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useApi = () => useContext(ApiContext);

