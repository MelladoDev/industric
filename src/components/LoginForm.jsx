import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log("Submitting form..."); //logs when the form is submitted

    const isEmail = userInput.includes("@");
    const loginData = isEmail
      ? { email: userInput, password }
      : { username: userInput, password };
    console.log("Login data:", loginData); //logs the login data

    try {
        
      const token = await login(userInput, password); // Llama a la función de login del contexto    
      localStorage.setItem("token", token); // Almacena el token en localStorage
      console.log("Token almacenado:", token);
      navigate("/"); // Redirecciona al usuario a su perfil
    } catch (error) {
      console.error("Login error:", error); //logs the error message
      setError("Error de autenticación. Verifica tus credenciales.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-full max-w-md px-4 py-8 mx-auto mt-16 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Inicio de sesión
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ingresa con tu cuenta
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="userInput"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Usuario o Correo
            </label>
            <input
              type="text"
              name="userInput"
              id="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Usuario o Correo"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Contraseña"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
