import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        console.log("Fetching data from", url);

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                console.log("Data fetched successfully", data);
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                    console.log('Chech and run the server with "npx json-server --watch data/db.json --port 8000"')
                } else {
                    console.log("Fetch error:", err.message);
                    setIsPending(false);
                    setError(err.message);
                }
            });

        return () => {
            console.log("Aborting fetch");
            abortCont.abort();
        };
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
