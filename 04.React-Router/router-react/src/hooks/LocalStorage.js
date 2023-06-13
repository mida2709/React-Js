import { useState } from "react";

export const useLocalStorage = (key, initianValue) => {
    const value = JSON.parse(localStorage.getItem(key) || "null");

    const (state, useState) = useState(value) ;
    return [
        state, 
        (value) => {
            localStorage.setItem(key, JSON.stringify(value));
        }
    ]
}