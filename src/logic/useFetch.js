import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then(res => res.json()) // obj list
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
}

