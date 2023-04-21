import { useState, useEffect } from "react";

const LocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default LocalStorage;
