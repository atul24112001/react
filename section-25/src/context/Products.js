import React, { useState } from "react";

export const ProductContext = React.createContext({
    products: [],
    favourateProducts: [],
    addFavourate: (item) => { },
    removeFavourate: (id) => { },
})

export default props => {
    const [products, setProducts] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]);
    const [favourate, setFavourate] = useState([]);

    const addFavourateHandler = item => {
        let updatedFav = [...favourate, item]
        setFavourate(updatedFav);
    }

    const removeFavourateHandler = id => {
        let updatedFav = favourate.filter(item => item.id !== id);
        setFavourate(updatedFav)
    }


    const contextValue = {
        products: products,
        favourateProducts: favourate,
        addFavourate: addFavourateHandler,
        removeFavourate: removeFavourateHandler
    }
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}