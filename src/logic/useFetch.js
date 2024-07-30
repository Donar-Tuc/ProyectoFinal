import { useState, useEffect, useCallback } from "react";

export function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const refetch = useCallback(() => {
        setLoading(true);

        fetch(url, options)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [url, options]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return { data, error, loading, refetch };
}
