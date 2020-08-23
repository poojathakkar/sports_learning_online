//setup data layer
//to track the basket


import React, { createContext, useContext, useReducer } from 'react';
//data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children })