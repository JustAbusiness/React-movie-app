import { useEffect, useState } from "react";

export default function useDebounce(initializeValue="", delay=1000) {
    const [debounceValue, setDebounceValue] = useState(initializeValue);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(initializeValue);
        }, delay);

        return () => {      // Clear up function
            clearTimeout(timer);
        }
    }, [delay, initializeValue]);

    return debounceValue;
}