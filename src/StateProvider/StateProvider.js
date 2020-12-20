// SetUP data layer
// to track cart
import React, { createContext, useContext, useReducer } from 'react';

// this is the data layer
export const StateContext = createContext();

// builed a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it like a component
export const useStateValue = () => useContext(StateContext);



