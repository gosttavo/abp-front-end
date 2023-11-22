import React, { createContext, useEffect } from "react";
import { Restaurante, RestaurantesContextProps } from "../interfaces/Restaurante";

const RestaurantesContext = createContext<RestaurantesContextProps>({
    restaurantes: [],
    setRestaurantes: () => []
});

export function RestaurantesProvider(props: any) {
    const [restaurantes, setRestaurantes] = React.useState<Restaurante[]>([]);

    useEffect(() => {
        const restaurantesData = localStorage.getItem("restaurantes");
        const restaurantes = restaurantesData ? JSON.parse(restaurantesData) : [];
        setRestaurantes(restaurantes);
    }, []);

    useEffect(() => {
        if (restaurantes.length > 0) {
            localStorage.setItem("restaurantes", JSON.stringify(restaurantes));
        }
    }, [restaurantes]);

    return <RestaurantesContext.Provider value={{ restaurantes, setRestaurantes }} {...props} />;
}

export function userRestaurante() {
    const context = React.useContext(RestaurantesContext);
    if (!context) {
        throw new Error("userRestaurante must be used within a RestaurantesProvider");
    }
    return context;
}

export function generateId() {
    return Math.random().toString(36).substr(2, 9);
}