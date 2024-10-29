    import React, { useEffect } from "react";
    import { useAuth } from "../context/AuthContext";
    import { useApi } from "../context/ApiContext";

    const UserProfile = () => {
      const { user } = useAuth(); // Asegúrate de que esto esté correctamente configurado
      const { data, loading, error, fetchData } = useApi();
      

      useEffect(() => {
        fetchData("/users/me"); // Asegúrate de que este endpoint sea correcto
      }, []);
    
      if (loading) return <div>Loading...</div>;
    
      if (error) return <div>Error: {error}</div>;
    
      if (!user) return <div>No hay usuario autenticado</div>;
    
      return (
        <div className="bg-gradient-to-b from-blue-950 to-50% via-blue-500 to-70% to-blue-50 to-71%">
          <h1 className="text-5xl font-bold text-center font-mono underline underline-offset-8 pt-10">Perfil</h1>
          <div className="p-28">
            <h2 className="text-3xl">¡Bienvenido, {user.username}!</h2>
            <p>Estos son tus detalles:</p>
            {/* Renderiza aquí más detalles del usuario si los tienes */}
          </div>
        </div>
      );
    };
    
    export default UserProfile;