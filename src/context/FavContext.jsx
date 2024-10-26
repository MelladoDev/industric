const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  
  const addToFavorites = (product) => { /* lógica para añadir a favoritos */ };
  const removeFromFavorites = (productId) => { /* lógica para eliminar de favoritos */ };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
