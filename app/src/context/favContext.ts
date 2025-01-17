import { createContext } from "react";

const FavContext = createContext<{
    fav : number;
    setFav : (fav : number) => void;
}>({
    fav: 0,
    setFav: () => {},
})

export default FavContext;

